import TodoList from "@/components/todo/todo-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
};

export default function TodoPage() {
  return <TodoList />;
}
