import TodoItem from "@/components/todo/todo-item";
import { fetchTodo } from "@/libs/data";

type TodoListProps = {
  search: string;
};

export default async function TodoList({ search }: TodoListProps) {
  const todos = await fetchTodo(search);

  // if searchTerm exist call fetchTodoBySearchTerm else fetchTodo OR fetchTodo(searchTerm)

  return (
    <div className="grid gap-2">
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </div>
  );
}
