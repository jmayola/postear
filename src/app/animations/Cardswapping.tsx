import CardSticky from '@/components/svg/Cardsticky'
import React, { useEffect, useState } from 'react'

function Cardswapping() {
  const [Width, setWidth] = useState(0)
  const [Height, setHeight] = useState(0)
  useEffect(() => {
    return () => {
      if(window.innerWidth){
        setWidth(100 * 3)
        setHeight(125 * 3)
      }
      else{
        setWidth(window.innerWidth / 2)
        setHeight(window.innerHeight / 2)
      }
    }
  }, [])
  
  return (
    <>
    <CardSticky
          height={Height}
          width={Width}
          className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute top-[5%]"
        />
        
    <CardSticky
          height={Height}
          width={Width}
          className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute top-[15%] left-[10%]"
        />
    <CardSticky
          height={Height}
          width={Width}
          className="m-auto drop-shadow-xl drop-shadow-zinc-600 absolute top-[25%] left-[20%]"
        />

    </>
    
  )
}

export default Cardswapping