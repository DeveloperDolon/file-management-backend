import { z } from "zod";

const selectPackage = z.object({
  body: z.object({}).optional(),
  params: z.object({
    packageId: z.string().min(1, "Package ID is required"),
  }),
});

export const SubscriptionValidation = {
  selectPackage,
};
