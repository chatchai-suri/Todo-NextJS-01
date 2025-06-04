"use server";

import { todoSchema } from "@/libs/schemas";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { ZodError } from "zod";
import { redirect } from "next/navigation";
import prisma from "@/libs/prisma";
import { FormState } from "@/types";
import { success } from "zod/v4";
import { resolve } from "path";

export async function createTodo(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    title: formData.get("title") as string | "",
    status: formData.get("status") as "completed" | "pending",
  };

  try {
    await new Promise(resolve => setTimeout(() => resolve(''), 3000))
    const data = todoSchema.parse(rawData);
    await prisma.todo.create({ data });
    redirect("/todo");
  } catch (error) {
    if (isRedirectError(error)) throw error;

    if (error instanceof ZodError) {
      return {
        error: error.flatten().fieldErrors,
        message: "validation error",
        data: rawData,
      };
    }
    return { message: "Something went wrong", data: rawData };
  }
}
