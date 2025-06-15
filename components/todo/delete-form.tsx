'use client'

import { deleteTodo } from "@/libs/actions";
import { useActionState } from "react";

export default function DeleteForm({ id }: { id: string }) {
  const [state, action, isPending] = useActionState(deleteTodo.bind(null, id), { message: '' })
  return (
    <form action={action}>
      <button className="px-3 py-1.5 bg-gray-200 rounded-md" disabled={isPending}>
        {isPending ? 'Deleting ...' : 'Delete'}
        </button>
    </form>
  );
}
