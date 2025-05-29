import Search from "@/components/todo/search";
import TodoList from "@/components/todo/todo-list";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Todo",
};

type TodoPageProps = {
  searchParams: Promise<{ [k:string]: string | undefined }>
}
export default async function TodoPage({ searchParams }: TodoPageProps) {
  const { search = ''} = await searchParams
  return (
    <>
      <div className="flex gap-4 items-center">
        <Search />
        <Link href="/todo/create" className="bg-gray-200 px-3 py-1.5 rounded-md">
          Create Todo
        </Link>
      </div>
      <TodoList search={search} />;
    </>
  );
}
