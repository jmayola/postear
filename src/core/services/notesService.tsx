import { storage } from "./storage";
import type { Note } from "../models/note";


const KEY = "notes.v1";


export const notesService = {
getAll(): Note[] { return storage.get<Note[]>(KEY, []); },
saveAll(list: Note[]): void { storage.set<Note[]>(KEY, list); },
};