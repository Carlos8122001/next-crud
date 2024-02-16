import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
  const tasksAll = await prisma.task.findMany();
  return NextResponse.json(tasksAll);
};

export const POST = async (request) => {
  const data = await request.json();
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json(newTask);
};
