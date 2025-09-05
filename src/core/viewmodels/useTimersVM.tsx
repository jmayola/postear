"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { timersService } from "../services/timersService";
import { createTimer, type Timer } from "../models/timer";


export type TimersVM = {
timers: Timer[];
addTimer: (label: string, seconds: number) => void;
removeTimer: (id: string) => void;
start: (id: string) => void;
pause: (id: string) => void;
reset: (id: string) => void;
};


export default function useTimersVM(): TimersVM {
const [timers, setTimers] = useState<Timer[]>([]);
const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);


useEffect(() => { setTimers(timersService.getAll()); }, []);
useEffect(() => { timersService.saveAll(timers); }, [timers]);


const addTimer = (label: string, seconds: number) => setTimers((prev) => [createTimer(label, seconds), ...prev]);
const removeTimer = (id: string) => setTimers((prev) => prev.filter((t) => t.id !== id));


const start = (id: string) => setTimers((prev) => prev.map((t) => t.id === id ? ({ ...t, running: true, startedAt: Date.now() - (t.seconds - t.remaining) * 1000 }) : t));
const pause = (id: string) => setTimers((prev) => prev.map((t) => t.id === id ? ({ ...t, running: false }) : t));
const reset = (id: string) => setTimers((prev) => prev.map((t) => t.id === id ? ({ ...t, running: false, remaining: t.seconds, startedAt: null }) : t));


useEffect(() => {
const anyRunning = timers.some((t) => t.running);
if (!anyRunning) { if (tickRef.current) clearInterval(tickRef.current as unknown as number); tickRef.current = null; return; }


if (!tickRef.current) {
tickRef.current = setInterval(() => {
setTimers((prev) => prev.map((t) => {
if (!t.running) return t;
const startedAt = t.startedAt ?? Date.now();
const elapsed = Math.floor((Date.now() - startedAt) / 1000);
const remaining = Math.max(0, t.seconds - elapsed);
return remaining === 0 ? { ...t, remaining, running: false } : { ...t, remaining };
}));
}, 250);
}


return () => {
if (tickRef.current && !timers.some((t) => t.running)) {
clearInterval(tickRef.current as unknown as number);
tickRef.current = null;
}
};
}, [timers]);


return useMemo(() => ({ timers, addTimer, removeTimer, start, pause, reset }), [timers]);
}