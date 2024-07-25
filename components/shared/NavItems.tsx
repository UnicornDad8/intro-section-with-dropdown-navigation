"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavItems = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <ul className="flex w-[700px] flex-col gap-12 items-start md:flex-row">
      <li className="hover:cursor-pointer">
        <DropdownMenu open={open1} onOpenChange={setOpen1}>
          <DropdownMenuTrigger
            className="flex items-center outline-none"
            onClick={() => setOpen1(true)}
          >
            Features
            <Image
              src="/images/icon-arrow-down.svg"
              alt="arrow down"
              width={32}
              height={32}
              className={
                open1
                  ? "ml-2 mt-1 rotate-180 duration-300"
                  : "ml-2 mt-1 rotate-0 duration-300"
              }
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none rounded-lg">
            <DropdownMenuItem>
              <Image
                src="/images/icon-todo.svg"
                alt="todo list"
                width={14}
                height={14}
                className="mr-2"
              />
              Todo List
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image
                src="/images/icon-calendar.svg"
                alt="todo list"
                width={14}
                height={14}
                className="mr-2"
              />
              Calendar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image
                src="/images/icon-reminders.svg"
                alt="todo list"
                width={14}
                height={14}
                className="mr-2"
              />
              Reminders
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image
                src="/images/icon-planning.svg"
                alt="todo list"
                width={14}
                height={14}
                className="mr-2"
              />
              Planing
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li className="hover:cursor-pointer">
        <DropdownMenu open={open2} onOpenChange={setOpen2}>
          <DropdownMenuTrigger
            className="flex items-center outline-none"
            onClick={() => setOpen2(true)}
          >
            Company
            <Image
              src="/images/icon-arrow-down.svg"
              alt="arrow down"
              width={32}
              height={32}
              className={
                open2
                  ? "ml-2 mt-1 rotate-180 duration-300"
                  : "ml-2 mt-1 rotate-0 duration-300"
              }
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none rounded-lg">
            <DropdownMenuItem>History</DropdownMenuItem>
            <DropdownMenuItem>Our Team</DropdownMenuItem>
            <DropdownMenuItem>Blog</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li className="hover:cursor-pointer">Carrers</li>
      <li className="hover:cursor-pointer">About</li>
    </ul>
  );
};

export default NavItems;
