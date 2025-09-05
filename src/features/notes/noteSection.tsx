"use client";
import { JSX, useState } from "react";
import useNotesVM from "../../core/viewmodels/useNotesVM";
import NoteItem from "./NoteItem";
import { IoAdd } from "react-icons/io5";


export default function NotesSection(): JSX.Element {
const { notes, addNote, removeNote, updateNote, count } = useNotesVM();
const [title, setTitle] = useState<string>("");
const [content, setContent] = useState<string>("");


const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
e.preventDefault();
if (!title && !content) return;
addNote(title, content);
setTitle("");
setContent("");
};


return (
<section id="notes" className="space-y-4">
<header className="flex items-center justify-between">
<h2 className="text-2xl font-semibold">Notas</h2>
<span className="text-sm text-slate-500">{count} nota{count !== 1 ? "s" : ""}</span>
</header>


<form onSubmit={onSubmit} className="card">
<div className="card-header">
<h3 className="font-medium">Nueva nota</h3>
<button className="btn-primary" type="submit"><IoAdd />Agregar</button>
</div>
<div className="card-body grid gap-3">
<input
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Título"
className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
/>
<textarea
value={content}
onChange={(e) => setContent(e.target.value)}
placeholder="Contenido"
rows={3}
className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
/>
</div>
</form>


<ul className="grid gap-4 sm:grid-cols-2">
{notes.map((n) => (
<NoteItem key={n.id} note={n} onDelete={() => removeNote(n.id)} onUpdate={updateNote} />
))}
</ul>
</section>
);
}