"use client";
import { IoLogoGithub } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Footer() {
  const [Version, setVersion] = useState("...");

  async function getVersion() {
    const data = await fetch("/VERSION");
    const version = await data.text();
    if (version === null) {
      return setVersion("...");
    } else {
      return setVersion(version);
    }
  }

  useEffect(() => {
    return () => {
      getVersion();
    };
  }, []);

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-screen px-4 py-6 text-sm text-slate-600 dark:text-slate-300 grid grid-cols-3 gap-[15%] justify-around items-center">
        <p className="text-center">
          Hecho con <span className="text-rose-500">❤</span> por Julian Mayola —
          Version {Version}
        </p>
        <a
          href="https://github.com/jmayola/postear"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-2 hover:text-slate-900 dark:hover:text-white"
        >
          <IoLogoGithub size={32} />
        </a>
        <div className="flex justify-center items-center flex-col ">
          <h4 className="text-2xl font-bold ">Navegador</h4>
          <ul>
            <a href="/notes">
              <li className="text-xl">Notas</li>
            </a>
            <a href="/timers">
              <li className="text-xl">Temporizadores</li>
            </a>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}
