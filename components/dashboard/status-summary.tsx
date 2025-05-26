import Card from "@/components/dashboard/card";
import { countTodoStatus } from "@/libs/data";

export default async function StatusSummary() {
  // await new Promise(resolve => setTimeout(() => resolve(''), 3000))
  const { completed, pending} = await countTodoStatus();
  return (
    <>
      <Card title="Complete" amount={completed} />
      <Card title="Pending" amount={pending} />
    </>
  );
}
