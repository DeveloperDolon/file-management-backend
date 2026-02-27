export type TRenameFile = {
  name: string;
};

export type TFileType = "IMAGE" | "VIDEO" | "PDF" | "AUDIO";

export const MIME_TO_FILE_TYPE: Record<string, TFileType> = {
  // Images
  "image/jpeg": "IMAGE",
  "image/png": "IMAGE",
  "image/gif": "IMAGE",
  "image/webp": "IMAGE",
  "image/svg+xml": "IMAGE",
  // Videos
  "video/mp4": "VIDEO",
  "video/mpeg": "VIDEO",
  "video/quicktime": "VIDEO",
  "video/x-msvideo": "VIDEO",
  "video/webm": "VIDEO",
  // PDFs
  "application/pdf": "PDF",
  // Audio
  "audio/mpeg": "AUDIO",
  "audio/wav": "AUDIO",
  "audio/ogg": "AUDIO",
  "audio/mp4": "AUDIO",
  "audio/aac": "AUDIO",
  "audio/webm": "AUDIO",
};
