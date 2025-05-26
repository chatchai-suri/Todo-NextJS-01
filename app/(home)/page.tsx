import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <Image src="/logo.png" alt="Basic Todo logo" width={120} height={120}/>
      <h1 className="text-4xl">The best simple todo list for you. Join us!</h1>
      <Link href="/dashboard" className="bg-gray-200 px-4 py-2 rounded-lg">Get's start</Link>
    </div>
  );
}
