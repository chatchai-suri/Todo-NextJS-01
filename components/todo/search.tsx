"use client";

import { useDebouncedCallback } from 'use-debounce';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  // const s = new URLSearchParams();
  // s.set("name", "John");
  // console.log(s.toString); // name=John
  // s.set("age", "20");
  // console.log(s.toString); // name=John&age=20
  // s.set("name", "Mike");
  // console.log(s.toString); // name=Mike&age=20
  // s.delete("name");
  // console.log(s.toString); // age=20
  // console.log(s.get("name")); // null
  // console.log(s.has("name")); // flase
  // console.log(s.has("age")); // true

  const router = useRouter();
  const pathname = usePathname();
  const oldUrlSearchParams = useSearchParams() // same as URLSearchParams but readyOnly

  // /todo?search=aaaa
  console.log(pathname);

  const handleSearch = useDebouncedCallback((input: string) => {
    const nextUrlSearchParams = new URLSearchParams(oldUrlSearchParams);
    if (input.trim()) {
      nextUrlSearchParams.set("search", input);
    } else {
      nextUrlSearchParams.delete("search");
    }
    console.log(nextUrlSearchParams.toString()); // where "use client", console.log show at browser
    // router.replace(/todo?search=aaaa);
    router.replace(`${pathname}?${nextUrlSearchParams.toString()}`)
  }, 500);

  return (
    <input
      onChange={(e) => handleSearch(e.target.value)}
      type="text"
      className="grow border border-gray-300 rounded-lg px-3 py-1.5 outline-none"
      placeholder="Search todo..."
      defaultValue={oldUrlSearchParams.get('search') || ''} // turesy value, if before parameter is 'false' will use next 'true' unless final paramter
    />
  );
}