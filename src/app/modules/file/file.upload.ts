import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import ApiError from "#app/errors/ApiError.js";
import httpStatus from "http-status";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export { cloudinary };

const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "video/mp4",
  "video/mpeg",
  "video/quicktime",
  "video/x-msvideo",
  "video/webm",
  "application/pdf",
  "audio/mpeg",
  "audio/wav",
  "audio/ogg",
  "audio/mp4",
  "audio/aac",
  "audio/webm",
];

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (_req: any, file: any) => {
    let resourceType: "image" | "video" | "raw" | "auto" = "auto";

    if (file.mimetype.startsWith("image/")) resourceType = "image";
    else if (file.mimetype.startsWith("video/")) resourceType = "video";
    else if (file.mimetype.startsWith("audio/"))
      resourceType = "video"; // Cloudinary handles audio under "video"
    else if (file.mimetype === "application/pdf") resourceType = "raw";

    return {
      folder: "uploads",
      resource_type: resourceType,
      use_filename: true,
      unique_filename: true,
    };
  },
});

const fileFilter: multer.Options["fileFilter"] = (_req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new ApiError(httpStatus.BAD_REQUEST, `Unsupported file type: ${file.mimetype}. Allowed: Image, Video, PDF, Audio.`));
  }
};

export const uploadMiddleware = multer({
  storage,
  fileFilter,
  limits: { fileSize: 500 * 1024 * 1024 },
});
