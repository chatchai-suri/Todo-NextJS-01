import Link from "next/link";

type TodoItemProps = {
  id: string
  title: string
  status: string
}

export default function TodoItem({ id, title, status }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center gap-4 p-4 border border-gray-300">
      <div className="flex justify-between items-center grow">
        <span>{title}</span>
        <span>{`${status[0]?.toUpperCase()}${status.slice(1)}`}</span>
      </div>
      <div className="flex gap-4">
        <Link href={`/todo/${id}/edit`} className="px-3 py-1.5 bg-gray-200 rounded-md">Edit</Link>
        <form>
          <button className="px-3 py-1.5 bg-gray-200 rounded-md">Delete</button>
        </form>
      </div>
    </div>
  );
}
