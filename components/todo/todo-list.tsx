import TodoItem from "@/components/todo/todo-item";
import { fetchTodo } from "@/libs/data";

export default async function TodoList() {
  const todos = await fetchTodo();
  return (
    <div className="grid gap-2">
      {todos.map(el => (
        <TodoItem key={el.id} {...el} /> 
      ))}
    </div>
  );
}
