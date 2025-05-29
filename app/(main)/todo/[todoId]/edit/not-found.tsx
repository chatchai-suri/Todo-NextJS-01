import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full">
      <h1 className="text-6xl">404</h1>
      <p className="text-2xl">The item you requested was not found</p>
      <Link href="/todo" className="px-3 py-1.5 rounded-md bg-gray-200">
        Go to Todo Page
      </Link>
    </div>
  );
}
