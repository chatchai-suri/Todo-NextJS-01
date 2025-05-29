import { fetchTodoById } from "@/libs/data";
import { notFound } from "next/navigation";

type EditTodoPageProps = {
  params: Promise<{ todoId: string}>;
};

export default async function EditTodoPage({ params }: EditTodoPageProps) {
  const { todoId } = await params;
  // console.log("*", todoId);
  const todo = await fetchTodoById(todoId)

  if(!todo) {
    notFound()
  }

  return <div>{todo.title}</div>;
}
