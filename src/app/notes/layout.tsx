import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono, Amarante } from "next/font/google";
import "@/app/globals.css";

const amarante = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Postear - Notas",
  description: "Agregar tus notas y maneja tus horarios en un mismo lugar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
  );
}
