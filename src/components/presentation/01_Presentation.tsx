"use client";

import Cardsticky from "../svg/Cardsticky";
function Presentation() {
  return (
    <section className="grid grid-cols-2 max-h-svh">
      <div className="z-10">
<h1 className="heading-1">Postear!</h1>
      <h2 className="heading-2">
        Tu lugar para crear recordatorios, administrar tus tareas y manejar tus
        horarios desde un solo lugar.
      </h2>
      <a href="/notes">
        <button className="btn-secondary">Notas</button>
      </a>
      <a href="/timers">
        <button className="btn-secondary">Temporizadores</button>
      </a>
      </div>
      <div className="flex place-content-center p-10 z-0">
        <Cardsticky height='150' width='125' color="#ffff00" className="relative color-100 max-h-1 rotate-12"/>
        <Cardsticky height='150' width='125' color="#ffff00" className="relative color-300 max-h-1 rotate-12" />
        <Cardsticky height='150' width='125' color="#ffff00" className="relative color-800 max-h-1 rotate-12" />
      </div>
    </section>
  );
}

export default Presentation;
