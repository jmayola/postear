import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Amarante } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const amarante = Amarante({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Postear",
  description: "Agregar tus notas y maneja tus horarios en un mismo lugar!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={amarante.className} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-slate-100 to-slate-500 dark:from-slate-700 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8 grid grid-cols-1 gap-5 container mx-auto px-4 py-8">
            {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
