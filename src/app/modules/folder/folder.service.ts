import httpStatus from "http-status";
import ApiError from "#app/errors/ApiError.js";
import type { TCreateFolder, TRenameFolder } from "./folder.interfaces.js";
import prisma from "#config/prisma.js";

// ─── Enforcement Helper ────────────────────────────────────────────────────────

const getActivePackage = async (userId: string) => {
  const subscription = await prisma.userSubscription.findFirst({
    where: { userId, isActive: true },
    include: { package: true },
    orderBy: { startDate: "desc" },
  });

  if (!subscription) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have an active subscription package.");
  }

  return subscription.package;
};

// ─── Service Methods ───────────────────────────────────────────────────────────

const getRootFolders = async (userId: string) => {
  const folders = await prisma.folder.findMany({
    where: { userId, parentId: null },
    include: {
      _count: {
        select: { children: true, files: true },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  return folders;
};

const getFolderChildren = async (userId: string, folderId: string) => {
  const folder = await prisma.folder.findUnique({
    where: { id: folderId },
  });

  if (!folder) {
    throw new ApiError(httpStatus.NOT_FOUND, "Folder not found!");
  }

  if (folder.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
  }

  const [subFolders, files] = await Promise.all([
    prisma.folder.findMany({
      where: { userId, parentId: folderId },
      include: {
        _count: {
          select: { children: true, files: true },
        },
      },
      orderBy: { createdAt: "asc" },
    }),
    prisma.file.findMany({
      where: { userId, folderId },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  return {
    folder,
    subFolders,
    files,
  };
};

const createFolder = async (userId: string, payload: TCreateFolder) => {
  const { name, parentId = null } = payload;

  const pkg = await getActivePackage(userId);

  const totalFolders = await prisma.folder.count({ where: { userId } });
  if (totalFolders >= pkg.maxFolders) {
    throw new ApiError(httpStatus.FORBIDDEN, `Folder limit reached. Your ${pkg.name} plan allows a maximum of ${pkg.maxFolders} folders.`);
  }

  let newDepth = 0;

  if (parentId) {
    const parentFolder = await prisma.folder.findUnique({
      where: { id: parentId },
    });

    if (!parentFolder) {
      throw new ApiError(httpStatus.NOT_FOUND, "Parent folder not found!");
    }

    if (parentFolder.userId !== userId) {
      throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
    }

    newDepth = parentFolder.depth + 1;

    // depth is 0-indexed. maxNestingLevel=3 allows depth 0,1,2
    if (newDepth >= pkg.maxNestingLevel) {
      throw new ApiError(httpStatus.FORBIDDEN, `Maximum nesting level (${pkg.maxNestingLevel}) reached for your ${pkg.name} plan.`);
    }
  }

  // ── Check duplicate name in same parent ──
  const duplicate = await prisma.folder.findFirst({
    where: { userId, parentId, name },
  });

  if (duplicate) {
    throw new ApiError(httpStatus.CONFLICT, "A folder with this name already exists here!");
  }

  const newFolder = await prisma.folder.create({
    data: {
      name,
      userId,
      parentId,
      depth: newDepth,
    },
  });

  return newFolder;
};

const renameFolder = async (userId: string, folderId: string, payload: TRenameFolder) => {
  const { name } = payload;

  const folder = await prisma.folder.findUnique({
    where: { id: folderId },
  });

  if (!folder) {
    throw new ApiError(httpStatus.NOT_FOUND, "Folder not found!");
  }

  if (folder.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
  }

  const duplicate = await prisma.folder.findFirst({
    where: {
      userId,
      parentId: folder.parentId,
      name,
      NOT: { id: folderId },
    },
  });

  if (duplicate) {
    throw new ApiError(httpStatus.CONFLICT, "A folder with this name already exists here!");
  }

  const updatedFolder = await prisma.folder.update({
    where: { id: folderId },
    data: { name },
  });

  return updatedFolder;
};

const deleteFolder = async (userId: string, folderId: string) => {
  const folder = await prisma.folder.findUnique({
    where: { id: folderId },
  });

  if (!folder) {
    throw new ApiError(httpStatus.NOT_FOUND, "Folder not found!");
  }

  if (folder.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
  }

  const collectDescendantIds = async (parentId: string): Promise<string[]> => {
    const children = await prisma.folder.findMany({
      where: { parentId },
      select: { id: true },
    });

    const ids: string[] = [];
    for (const child of children) {
      ids.push(child.id);
      const grandchildren = await collectDescendantIds(child.id);
      ids.push(...grandchildren);
    }

    return ids;
  };

  const descendantIds = await collectDescendantIds(folderId);
  const allFolderIds = [folderId, ...descendantIds];

  await prisma.$transaction(async (tx: any) => {
    await tx.file.deleteMany({
      where: { folderId: { in: allFolderIds } },
    });

    const sortedIds = [folderId, ...descendantIds].reverse();

    for (const id of sortedIds) {
      await tx.folder.delete({ where: { id } });
    }
  });

  return { deleted: true, folderId };
};

export const FolderService = {
  getRootFolders,
  getFolderChildren,
  createFolder,
  renameFolder,
  deleteFolder,
};
