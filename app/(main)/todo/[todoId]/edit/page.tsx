type EditTodoPageProps = {
  params: Promise<{ todoId: string}>;
};

export default async function EditTodoPage({ params }: EditTodoPageProps) {
  const { todoId } = await params;
  console.log("*", todoId);
  return <div>Edit Todo Page</div>;
}
