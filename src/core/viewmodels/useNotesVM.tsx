"use client";
import { useEffect, useMemo, useState } from "react";
import { notesService } from "../services/notesService";
import { createNote, type Note } from "../models/note";


export type NotesVM = {
notes: Note[];
addNote: (title: string, content: string) => void;
removeNote: (id: string) => void;
updateNote: (id: string, fields: Partial<Note>) => void;
count: number;
};


export default function useNotesVM(): NotesVM {
const [notes, setNotes] = useState<Note[]>([]);


useEffect(() => { setNotes(notesService.getAll()); }, []);
useEffect(() => { notesService.saveAll(notes); }, [notes]);


const addNote = (title: string, content: string) => setNotes((prev) => [createNote(title, content), ...prev]);
const removeNote = (id: string) => setNotes((prev) => prev.filter((n) => n.id !== id));
const updateNote = (id: string, fields: Partial<Note>) => setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...fields } : n)));


return useMemo(() => ({ notes, addNote, removeNote, updateNote, count: notes.length }), [notes]);
}