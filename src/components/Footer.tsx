"use client"
import { IoLogoGithub } from "react-icons/io5";
import { useEffect, useState } from "react";



export default function Footer() {
const [Version, setVersion] = useState("...")

async function getVersion(){
    const data = await fetch("/VERSION")
    const version = await data.text()
    if (version === null) {
        return setVersion("...")
    }
    else {
        return setVersion(version)
    }
}

useEffect(() => {
  return () => {
    getVersion()
}},[])


return (
<footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
<div className="container mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600 dark:text-slate-300 flex items-center justify-between">
<p>
Hecho con <span className="text-rose-500">❤</span> — {Version}
</p>
<a href="https://github.com/jmayola/postear" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
<IoLogoGithub /> 
</a>
</div>
</footer>
);
}