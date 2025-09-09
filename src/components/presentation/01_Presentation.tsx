"use client";

import Cardsticky from "../svg/Cardsticky";
function Presentation() {
  return (
    <section className="grid grid-cols-2 h-screen-nav">
      <div className="z-10">
        <h1 className="heading-1">Postear!</h1>
        <h2 className="heading-2 ">
          <span className="block p-2">Tu lugar para crear recordatorios, </span>
          <span className="block p-2">administrar tus tareas y manejar</span>
          <span className="block p-2">tus horarios desde un solo lugar.</span>
        </h2>
        <a href="/notes" className="btn-secondary">
          <button>Notas</button>
        </a>
        <a href="/timers" className="btn-secondary">
          <button>Temporizadores</button>
        </a>
      </div>
      <div className="grid grid-cols-3 place-content-center p-10 z-0">
        <Cardsticky
          height="150"
          width="125"
          color="#ffff00"
          className="relative color-100 max-h-1 rotate-12"
        />
        <Cardsticky
          height="150"
          width="125"
          color="#ffff00"
          className="relative color-300 max-h-1 rotate-12"
        />
        <Cardsticky
          height="150"
          width="125"
          color="#ffff00"
          className="relative color-800 max-h-1 rotate-12"
        />
      </div>
    </section>
  );
}

export default Presentation;
