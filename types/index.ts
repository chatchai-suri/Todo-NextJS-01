import { todoSchema } from "@/libs/schemas";
import { z } from "zod";

export type FormState = {
  data: z.infer<typeof todoSchema>;
  message: string;
  error?: z.inferFlattenedErrors<typeof todoSchema>["fieldErrors"];
};
