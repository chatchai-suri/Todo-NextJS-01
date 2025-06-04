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

// This page is Dynamic (server-rendered on Demand)
// SSR: Static Rendering or Dynamic Rendering (OR PPR: PartialPreRendering in future)
// Static Rendering: page builds when build time (prerendered as static content)
// Dynamic Rendering: page build when request time (server-rendered on Demand)
// Default Build to Static Rendering
// Convert to dynamic when: 1) Manual, 2) Dynamic API 
// Manual: declare statement
// Dynamic API: from calling APIs
// Dymanic API include: 1) cookies, 2) headers, 3) connection, 4) draftMode, 5) searchParams_prop, 6) ubstable_noStore