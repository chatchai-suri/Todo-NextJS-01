import prisma from "@/libs/prisma";
import { title } from "process";

export async function fetchLatestTodo() {
  return prisma.todo.findMany({ orderBy: { createdAt: "desc" }, take: 5 });
}

export async function countTodoStatus() {
  // SELECT status, COUNT(status) FROM todo GROUP BY status
  const result = await prisma.todo.groupBy({
    by: "status",
    _count: { status: true },
  });
  console.log(result);
  // result returned from DB is an array as shown below
  // [
  //   { _count: { status: 3 }, status: 'completed' },
  //   { _count: { status: 5 }, status: 'pending' }
  // ]
  // but we need result as format of object {completed: 3, pending: 5} for easy in component status-summary.tsx
  return result.reduce(
    (acc, el) => {
      if (isCountStatus(el.status)) {
        acc[el.status] = el._count.status;
      }
      return acc;
    },
    { completed: 0, pending: 0 }
  );
}

type CountStatus = {
  completed: number;
  pending: number;
};

function isCountStatus(value: unknown): value is keyof CountStatus {
  return value === "completed" || value === "pending";
}

export async function fetchTodo(search: string) {
  if (search) {
    // SELECT * FROM todo WHERE title LIKE %search%
    return prisma.todo.findMany({
      where: { title: { contains: search, mode: "insensitive" } },
      orderBy: { createdAt: "desc" },
    });
  }
  return prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
}

export async function fetchTodoById(id: string) {
  return prisma.todo.findUnique({ where: { id } });
}
