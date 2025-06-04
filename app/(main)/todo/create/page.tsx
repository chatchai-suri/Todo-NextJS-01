import Form from "@/components/todo/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Todo"
}

export default function CreateTodoPage() {
  return <Form />;
}
