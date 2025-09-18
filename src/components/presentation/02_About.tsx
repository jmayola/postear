import React from "react";
import CardSticky from "../svg/Cardsticky";
function About() {
  return (
    <section className="grid w-screen p-8 bg-slate-100 dark:bg-slate-700 dark:border-y-slate-600 dark:border-[40px]">
      <h2 className="heading-1 py-2">Que es Postear?</h2>
      <p className="heading-2">
        Necesitas un lugar seguro donde administrar tu dia a dia?
      </p>
      <p className="heading-2">
        Este es tu sitio ideal! Prueba de manera gratuita y al instante nuestras
        funciones!
      </p>
      <div className="flex justify-around p-5 place-content-center">
        <CardSticky
          id="aboutcard"
          width={window.innerWidth / 2}
          height={window.innerHeight / 3}
          className="drop-shadow-xl drop-shadow-zinc-600"
        ></CardSticky>
        <CardSticky
          id="aboutcard"
          width={window.innerWidth / 2}
          height={window.innerHeight / 3}
          className="drop-shadow-xl drop-shadow-zinc-600"
        ></CardSticky>
      </div>
    </section>
  );
}

export default About;
