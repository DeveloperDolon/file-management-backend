import { z } from "zod";

const createFolder = z.object({
  body: z.object({
    name: z.string().min(1, "Folder name is required").max(255, "Folder name too long"),
    parentId: z.string().optional().nullable(),
  }),
});

const renameFolder = z.object({
  body: z.object({
    name: z.string().min(1, "Folder name is required").max(255, "Folder name too long"),
  }),
});

export const FolderValidation = {
  createFolder,
  renameFolder,
};
