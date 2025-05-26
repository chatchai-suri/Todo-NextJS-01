import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 py-2 shadow flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" width={36} height={36} alt="Basic Todo Logo" />
      </Link>
      <nav className="flex">
        <Link href="/dashboard" className="hover:bg-gray-200 px-4 py-2 rounded-md">Dashboard</Link>
        <Link href="/todo" className="hover:bg-gray-200 px-4 py-2 rounded-md">Todo</Link>
        <button className="hover:bg-gray-200 px-4 py-2 rounded-md">
          Sign Out
        </button>
      </nav>
    </header>
  );
}
