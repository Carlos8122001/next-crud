import { prisma } from "@/libs/prisma";
import Card from "./components/Card";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const getTask = async () => {
    return await prisma.task.findMany();
  };

  const taskAll = await getTask();

  return (
    <div className="min-h-full">
      <header className="bg-white shadow mt-20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Tasks
          </h1>
        </div>
      </header>
      <main className="flex justify-center">
        <div className="mx-10 max-w-7xl py-6 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {taskAll.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.createAt}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
