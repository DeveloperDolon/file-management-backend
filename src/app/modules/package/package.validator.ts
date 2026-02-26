import z from "zod";

export const packageSchema = z.object({
  body: z.object({
    name: z.enum(["SILVER", "GOLD", "DIAMOND"]),
    price: z.number().positive(),
    maxFolders: z.number().int().positive(),
    maxNestingLevel: z.number().int().positive(),
    allowedFileTypes: z.array(z.enum(["PDF", "IMAGE", "VIDEO", "AUDIO"])).nonempty(),
    maxFileSizeMB: z.number().positive(),
    totalFileLimit: z.number().int().positive(),
    filesPerFolder: z.number().int().positive(),
    isActive: z.boolean(),
  }),
});

export const PackageValidation = {
  packageSchema,
};
