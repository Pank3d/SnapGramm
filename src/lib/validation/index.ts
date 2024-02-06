import { z } from "zod";
  export const SignupValidation = z.object({
    name: z.string().min(2, { message: "To short" }),
    username: z.string().min(2, { message: "To short" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be more dificult" }),
  });

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be more dificult" }),
  });