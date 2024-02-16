import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(task);
};

export const PUT = async (request, { params }) => {
    const data = await request.json()
    const taskUpdate = await prisma.task.update({
        where:{
            id:Number(params.id)
        },
        data:{
            title:data.title,
            description:data.description
        }
    })
  return NextResponse.json(taskUpdate);
};

export const DELETE = async (request, { params }) => {
  try {
    const taskRemove = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(taskRemove)

  } catch (error) {
    NextResponse.json(error.message)
  }
};
