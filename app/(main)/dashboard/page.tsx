import LatestTodo from "@/components/dashboard/latest-todo";
import {
  CardsSkeleton,
  LatestTodoSkeleton,
} from "@/components/dashboard/skeleton";
import StatusSummary from "@/components/dashboard/status-summary";
import { Metadata } from "next";
// import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

// To Manual to be Dynamic page #1, #2, #3
// #1
// export const revalidate = 60
// DashboardPage build at build time
// 0 < request < 60 (sec) DashboardPage at build time
// 60 < request Dashboard rebuild Stale while revalidate (SWR)
export const revalidate = 0; // always do

// #2
// export const dynamic = "force-dynamic";

export default function DashBoardPage() {
  // new Promise((resolve) => setTimeout(() => resolve(""), 5000));
  // #3 unstable_noStore() 
  console.log('Dashboard')

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<CardsSkeleton />}>
          <StatusSummary />
        </Suspense>
      </div>
      <Suspense fallback={<LatestTodoSkeleton />}>
        <LatestTodo />
      </Suspense>
    </>
  );
}
