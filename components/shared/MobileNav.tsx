import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/images/icon-menu.svg"
            alt="menu"
            width={32}
            height={16}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="focus:no-underline text-gray-500">
                Features
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-5">
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    <Image
                      src="/images/icon-todo.svg"
                      alt="todo list"
                      width={14}
                      height={14}
                      className="mr-2"
                    />
                    Todo List
                  </li>
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    <Image
                      src="/images/icon-calendar.svg"
                      alt="todo list"
                      width={14}
                      height={14}
                      className="mr-2"
                    />
                    Calendar
                  </li>
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    <Image
                      src="/images/icon-reminders.svg"
                      alt="todo list"
                      width={14}
                      height={14}
                      className="mr-2"
                    />
                    Reminders
                  </li>
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    <Image
                      src="/images/icon-planning.svg"
                      alt="todo list"
                      width={14}
                      height={14}
                      className="mr-2"
                    />
                    Planning
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="focus:no-underline text-gray-500">
                Company
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-5">
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    History
                  </li>
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    Our Team
                  </li>
                  <li className="text-gray-400 font-semibold flex cursor-pointer items-center whitespace-nowrap">
                    Blog
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ul className="flex flex-col gap-5">
            <li className="font-medium text-gray-500">Careers</li>
            <li className="font-medium text-gray-500">About</li>
          </ul>
          <Button className="text-black w-full h-[36px] px-6 bg-transparent border-none outline-none">
            Login
          </Button>
          <Button className="text-black w-full h-[36px] px-6 bg-transparent outline outline-offset-2 outline-2 outline-black hover:bg-transparent hover:scale-90 transition-all duration-300">
            Register
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
