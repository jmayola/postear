import { IoLogoGithub } from "react-icons/io5";


export default function Footer() {
return (
<footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
<div className="container mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600 dark:text-slate-300 flex items-center justify-between">
<p>
Hecho con <span className="text-rose-500">❤</span> — Demo MVVM
</p>
<a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
<IoLogoGithub /> Código base
</a>
</div>
</footer>
);
}