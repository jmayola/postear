"use client";
import { JSX, useState } from "react";
import useTimersVM from "../../core/viewmodels/useTimersVM";
import {
  IoPlay,
  IoPause,
  IoRefresh,
  IoTimerOutline,
  IoAdd,
} from "react-icons/io5";

const fmt = (s: number): string => {
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const ss = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${ss}`;
};

export default function TimersSection(): JSX.Element {
  const { timers, addTimer, removeTimer, start, pause, reset } = useTimersVM();
  const [label, setLabel] = useState<string>("");
  const [minutes, setMinutes] = useState<number>(5);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const secs = Math.max(1, Math.floor(Number(minutes) * 60));
    addTimer(label || "Temporizador", secs);
    setLabel("");
    setMinutes(5);
  };

  return (
    <section id="timers" className="space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <IoTimerOutline /> Temporizadores
        </h2>
      </header>

      <form onSubmit={onSubmit} className="card">
        <div className="card-header">
          <h3 className="font-medium">Nuevo temporizador</h3>
          <button className="btn-primary" type="submit">
            <IoAdd />
            Agregar
          </button>
        </div>
        <div className="card-body grid gap-3 sm:grid-cols-3">
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Etiqueta (opcional)"
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            min={0.1}
            step={0.5}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="text-sm text-slate-500 self-center">Minutos</div>
        </div>
      </form>

      <ul className="grid gap-4 sm:grid-cols-2">
        {timers.map((t) => (
          <li key={t.id} className="card">
            <div className="card-header">
              <h3 className="font-semibold truncate">{t.label}</h3>
              <div className="flex items-center gap-2">
                {t.running ? (
                  <button className="btn-secondary" onClick={() => pause(t.id)}>
                    <IoPause /> Pausa
                  </button>
                ) : (
                  <button className="btn-secondary" onClick={() => start(t.id)}>
                    <IoPlay /> Iniciar
                  </button>
                )}
                <button className="btn-secondary" onClick={() => reset(t.id)}>
                  <IoRefresh /> Reset
                </button>
              </div>
            </div>
            <div className="card-body space-y-3">
              <div className="text-4xl font-mono tracking-widest">
                {fmt(t.remaining)}
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-sky-500"
                  style={{
                    width: `${((t.seconds - t.remaining) / t.seconds) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="text-sm text-rose-600 hover:text-rose-700"
                  onClick={() => removeTimer(t.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
