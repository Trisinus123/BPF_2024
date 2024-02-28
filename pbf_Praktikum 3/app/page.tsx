import Image from "next/image";
// import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-14 bg-gradient-to-b from-blue-200">
      <div className="flex flex-col items-left justify-left space-y-1">
        <div className="flex flex-row space-x-10">
          {[...Array(1)].map((_, index) => (
            <div key={index} className="px-4">
              {/* <Gallery /> */}
            </div>
          ))}
        </div>
        <hr />
        <TodoList />
      </div>
    </main>
  );
}
