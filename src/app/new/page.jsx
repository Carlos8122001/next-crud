"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const response = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(result);
    } else {
      const response = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(result);
    }
    
    router.refresh()
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg shadow-lg rounded-lg p-10 bg-white ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Crea una tarea!
            </h2>
          </div>
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Título
              </label>
              <div className="mt-2">
                <input
                  placeholder="Título de la tarea"
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="off"
                  className="block pl-2 w-full rounded-md border-0 outline-gray-800 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Descripción
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  placeholder="Describe la tarea"
                  id="description"
                  name="description"
                  className="pl-2 resize-none block w-full rounded-md border-0 outline-gray-800 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset f sm:text-sm sm:leading-6"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex transition-all ease-linear duration-75 w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                {!params ? "Actualizar" : "Crear"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
