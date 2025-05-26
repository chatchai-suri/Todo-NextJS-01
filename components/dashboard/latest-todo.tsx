import { fetchLatestTodo } from "@/libs/data";

export default async function LatestTodo() {
  // await new Promise(resolve => setTimeout(() => resolve(''), 5000))
  const latestTodos = await fetchLatestTodo();
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-4">
        {latestTodos.map((el) => (
          <div className="bg-white px-6" key={el.id}>
            <div className="flex justify-between items-center py-4">
              <span>{el.title}</span>
              <span>{`${el.status[0]?.toUpperCase()}${el.status.slice(1)}`}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
