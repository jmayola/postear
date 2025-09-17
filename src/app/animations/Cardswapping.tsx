import CardSticky from '@/components/svg/Cardsticky'
import React, { useEffect, useState } from 'react'
import CardsAnimation from '@/app/animations/CardsAnimation'
function Cardswapping() {
  const [Width, setWidth] = useState(100 *3)
  const [Height, setHeight] = useState(125 *3)
  useEffect(() => {
    return () => {
        setWidth(100 * 3)
        setHeight(125 * 3)
    }
  }, [])
  if(typeof document !== 'undefined' && !!document.cookie){
    CardsAnimation()
  }
  return (
    <>
    <CardSticky
          id="card_0"
          height={Height}
          width={Width}
          primary_color='#ff00ff'
          className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute"
        />
        
    <CardSticky
          id="card_1"
          height={Height}
          width={Width}
          primary_color='#ffff00'
          className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute"
        />
    <CardSticky
          id="card_2"
          height={Height}
          width={Width}
          className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute"
        />
    </>
  )
}

export default Cardswapping