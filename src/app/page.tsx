"use client"
import { JSX } from "react";
import Presentation from "@/components/presentation/01_Presentation"
import About from "@/components/presentation/02_About"

export default function HomePage(): JSX.Element {
  return (
    <div className="space-y-10 flex place-content-around">
        <main className="grid grid-cols-1 gap-5 container mx-auto px-4 py-8">
        <Presentation/>
        <About/>
        </main>
    </div>
  );
}
