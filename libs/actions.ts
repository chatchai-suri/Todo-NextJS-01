"use server";

import { todoSchema } from "@/libs/schemas";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { ZodError } from "zod";
import { redirect } from "next/navigation";
import prisma from "@/libs/prisma";
import { FormState, TodoFormInput } from "@/types";
import { revalidatePath } from "next/cache";

// use with form action
// async function create(formData: FormData) {}
// use with useActionState
// async function create(prevState: formState, formData: FormData) {}
// use without form action or useActionState
// async function create(...) {} // can do any function format upon to which data desired to pass through

export async function createTodo(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    title: formData.get("title") as string | "",
    status: formData.get("status") as "completed" | "pending",
  };

  try {
    await new Promise((resolve) => setTimeout(() => resolve(""), 3000));
    const data = todoSchema.parse(rawData);
    await prisma.todo.create({ data });
    // revalidatePath('/dashboard');
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

export async function updateTodo(id: string, _: unknown, formData: FormData) {
  // console.log(id)
  // return{ message: 'test message'}

  // Object.fromEntries([
  //   ['name', 'John'],
  //   ['age', 20]
  // ]); // {name: 'John', age: 20}

  // const f = new FormData();
  // f.append('email', 'a@mail.com'); // FormData {email: 'a@mail.com}
  // f.entries() // [['email', 'a@mail.com']]

  try {
    // Object.fromEntries(formData.entries())
    const data = todoSchema.parse(Object.fromEntries(formData.entries()));
    await prisma.todo.update({ where: { id }, data });
    // revalidatePath("/todo");
    redirect("/todo"); // redirect Internal: throw error
    // return { message: 'success' }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { message: "Something went wrong" };
  }
}

export async function updateTodoWithHookForm(id: string, rawData: TodoFormInput) {
  try {
    // const data = todoSchema.parse(rawData);
    // use otherway of validation of zod lib .safePrase
    const { success, data, error } = todoSchema.safeParse(rawData);

    if (!success) {
      return {
        error: error.flatten().fieldErrors,
        message: "validation error",
      };
    }

    const existTodo = await prisma.todo.findUnique({ where: { id } });
    if (!existTodo) {
      return { message: "Todo with id was not found" };
    }
    await prisma.todo.update({ where: { id }, data });
    revalidatePath("/todo");
    redirect("/todo");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { message: "Something went wrong" };
  }
}

export async function deleteTodo(id: string) {
  try {
    const existTodo = await prisma.todo.findUnique({ where: { id } });
    if (!existTodo) {
      return { message: "Todo with id was not found" };
    }
    await prisma.todo.delete({ where: { id } });
    revalidatePath("/todo");
  } catch (error) {
    return { message: "Something went wrong" };
  }
}
