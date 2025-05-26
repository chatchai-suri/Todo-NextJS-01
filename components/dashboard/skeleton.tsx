const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 p-4`}>
      <div className="h-6 w-16 rounded-md bg-gray-200" />
      <div className="flex items-center justify-center rounded-lg bg-white mt-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function TodoSkeleton() {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-4">
      <div className="h-6 w-72 rounded-md bg-gray-200" />
      <div className="h-6 w-22 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestTodoSkeleton() {
  return (
    <div className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}>
      <div className="rounded-lg bg-gray-100 p-4">
        <div className="bg-white px-6">
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
        </div>
      </div>
    </div>
  );
}