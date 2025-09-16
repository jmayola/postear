import CardSticky from '@/components/svg/Cardsticky'
import React, { useEffect, useState } from 'react'

function Cardswapping() {
  const [Width, setWidth] = useState(0)
  const [Height, setHeight] = useState(0)
  useEffect(() => {
    return () => {
        setWidth(100 * 3)
        setHeight(125 * 3)
      
    // load animation
    if (typeof window !== 'undefined') CardsAnimation()
    }
  }, [])
  
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