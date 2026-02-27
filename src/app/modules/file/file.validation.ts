import { z } from "zod";

const renameFile = z.object({
  body: z.object({
    name: z.string().min(1, "File name is required").max(255, "File name too long"),
  }),
});

export const FileValidation = {
  renameFile,
};
