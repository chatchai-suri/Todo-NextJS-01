import EditForm from "@/components/todo/edit-form";
import EditHookForm from "@/components/todo/edit-hook-form";
import { fetchTodoById } from "@/libs/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// generate dynamic metadata
export async function generateMetadata({ params }: EditTodoPageProps): Promise<Metadata> {
  const { todoId } = await params;
  const todo = await fetchTodoById(todoId);
  return {
    title: todo?.title ?? '404'
  };
}

type EditTodoPageProps = {
  params: Promise<{ todoId: string }>;
};

export default async function EditTodoPage({ params }: EditTodoPageProps) {
  const { todoId } = await params;
  // console.log("*", todoId);
  const todo = await fetchTodoById(todoId);
  // if api use zod vaidate, then no need to use type alias "as ...""

  if (!todo) {
    notFound();
  }

  // return <EditForm {...todo} status={todo.status as 'completed' | 'pending'} />;
  return (
    <EditHookForm {...todo} status={todo.status as "completed" | "pending"} />
  );
}
