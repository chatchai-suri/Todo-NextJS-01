"use client";

import { createTodo } from "@/libs/actions";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function Form() {
  const [state, action, isPending] = useActionState(createTodo, {
    data: { title: "", status: "pending" },
    message: "",
  });

  return (
    <form
      action={action}
      className="grid gap-6 border border-gray-300 p-6 rounded-lg"
    >
      <div>
        <input
          name="title"
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-1.5 outline-none"
          placeholder="Enter todo title"
          defaultValue={state.data.title}
        />
        {state.error?.title && <p className="text-red-500">{state.error?.title[0]}</p>}
      </div>
      <div className="flex gap-4">
        <div>
          <input
            type="radio"
            name="status"
            id="pending"
            value="pending"
            className="mr-1"
            defaultChecked={state.data.status === "pending"}
          />
          <label htmlFor="pending">Pending</label>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            id="completed"
            value="completed"
            className="mr-1"
            defaultChecked={state.data.status === "completed"}
          />
          <label htmlFor="completed">Completed</label>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/todo" className="bg-gray-200 rounded-md px-3 py-1.5">
          Cancle
        </Link>
        <button className="bg-gray-200 rounded-md px-3 py-1.5" disabled={isPending}>
          {isPending ? (
            <div className="flex gap-2 items-center">
              <Loader className="animate-spin"/>
              <span>Creating ...</span>
            </div>
          ) : (
            'Create'
          )}
          </button>
      </div>
    </form>
  );
}
