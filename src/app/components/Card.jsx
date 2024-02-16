"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Card({ id, title, description }) {
  const router = useRouter();

  const deleteTask = async () => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    router.refresh();
    return console.log(data);
  };

  return (
    <div className="w-full h-full p-5 rounded-lg shadow-lg flex justify-center flex-col gap-y-3 hover:scale-105 transition-all ease-linear duration-75 cursor-pointer">
      <h3 className="font-semibold">{id}</h3>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-base">{description}</p>
      <div className="my-4 flex flex-row gap-x-4">
        <button
          onClick={deleteTask}
          className="flex transition-all ease-linear duration-75 w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Eliminar
        </button>

        <button
          onClick={() => {
            router.push("/tasks/edit/" + id);
          }}
          className="flex transition-all ease-linear duration-75 w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
