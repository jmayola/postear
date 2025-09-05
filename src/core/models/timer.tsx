export type Timer = {
id: string;
label: string;
seconds: number; // duración original
remaining: number; // segundos restantes
running: boolean;
startedAt: number | null; // epoch ms
};


export const createTimer = (label = "", seconds = 300): Timer => ({
id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
label,
seconds,
remaining: seconds,
running: false,
startedAt: null,
});