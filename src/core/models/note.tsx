export type Note = {
id: string;
title: string;
content: string;
createdAt: number; // epoch ms
};


export const createNote = (title = "", content = ""): Note => ({
id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
title,
content,
createdAt: Date.now(),
});