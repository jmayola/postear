"use client";
import { useState } from "react";
import { IoTrashOutline, IoPencil } from "react-icons/io5";
import type { Note } from "../../core/models/note";


type Props = {
note: Note;
onDelete: () => void;
onUpdate: (id: string, fields: Partial<Note>) => void;
};


export default function NoteItem({ note, onDelete, onUpdate }: Props): JSX.Element {
const [editing, setEditing] = useState<boolean>(false);
const [title, setTitle] = useState<string>(note.title);
const [content, setContent] = useState<string>(note.content);


const save = (): void => { onUpdate(note.id, { title, content }); setEditing(false); };


return (
<li className="card">
<div className="card-header">
{editing ? (
<input value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 px-2 py-1" />
) : (
<h3 className="font-semibold truncate">{note.title || "(Sin título)"}</h3>
)}
<div className="flex items-center gap-2">
<button className="btn-secondary" onClick={() => (editing ? save() : setEditing(true))}>
<IoPencil /> {editing ? "Guardar" : "Editar"}
</button>
<button className="btn-secondary" onClick={onDelete}><IoTrashOutline />Eliminar</button>
</div>
</div>
<div className="card-body">
{editing ? (
<textarea value={content} onChange={(e) => setContent(e.target.value)} rows={5} className="w-full rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 px-2 py-1" />
) : (
<p className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">{note.content || "(Sin contenido)"}</p>
)}
</div>
</li>
);
}