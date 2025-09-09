"use client"
import { JSX } from "react";
import Presentation from "@/components/presentation/01_Presentation"
import About from "@/components/presentation/02_About"

export default function HomePage(): JSX.Element {
  return (
    <>
        <Presentation/>
        <About/>
    </>
  );
}
