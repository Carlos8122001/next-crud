"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const location = usePathname();
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <span>
              <h1 className="text-xl text-white font-bold">Next App</h1>
            </span>
            <div className="flex items-center">
              <div className="block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className={`${
                      location === "/" ? "bg-gray-900" : "bg-transparent"
                    } text-white rounded-md px-3 py-2 text-sm font-medium`}
                    aria-current="page"
                  >
                    Tasks
                  </Link>
                  <Link
                    href="/new"
                    className={`${
                      location === "/new" ? "bg-gray-900" : "bg-transparent"
                    } text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Create Task
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
