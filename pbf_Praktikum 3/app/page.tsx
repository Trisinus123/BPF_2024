import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gradient-to-b from-blue-200">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg font-semibold mb-2 text-black">Ilmuan yang luar biasa</p>
        <div className="flex flex-row space-x-10">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="px-20">
              <Profile />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
