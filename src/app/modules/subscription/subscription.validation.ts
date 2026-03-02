import { z } from "zod";

const selectPackage = z.object({
  body: z.object({}).optional()
});

export const SubscriptionValidation = {
  selectPackage,
};
