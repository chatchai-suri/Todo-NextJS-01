import Header from "@/components/layouts/header";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <main className="p-4 py-8 md:w-[64rem] mx-auto flex-grow">
        <div className="flex flex-col gap-4">{children}</div>
      </main>
    </div>
  );
}
