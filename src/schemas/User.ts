import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" }),
  // role: z.enum(["admin", "user"]).default("user"),
  // authProviderId: z.string(),
});
