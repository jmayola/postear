import CardSticky from "@/components/svg/Cardsticky";
import React, { useEffect, useState } from "react";
import CardsAnimation from "@/app/animations/CardsAnimation";
function Cardswapping() {
  const [Width, setWidth] = useState(100 * 3);
  const [Height, setHeight] = useState(125 * 3);
  useEffect(() => {
    if (typeof document !== "undefined" && !!document.cookie) {
      CardsAnimation();
    }
    setWidth(window.innerWidth / 3);
    setHeight(window.innerHeight / 2);
      console.log("Width ",Width)
      console.log("Height ",Height)
    return () => {
    };
  }, []);

  return (
    <>
      <CardSticky
        id="card_0"
        height={Height}
        width={Width}
        primary_color="#ff00ff"
        className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute card_appear"
      />

      <CardSticky
        id="card_1"
        height={Height}
        width={Width}
        primary_color="#ffff00"
        className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute card_stay"
      />
      <CardSticky
        id="card_2"
        height={Height}
        width={Width}
        className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute card_disappear"
      />
    </>
  );
}

export default Cardswapping;
