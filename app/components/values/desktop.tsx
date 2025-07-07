import React from 'react'
import Value from "./value-desktop"

const desktop = () => {
  return (
    <div className='hidden lg:block w-[100vw] relative'>
        <img src="/icons/ellipse.svg" alt="" />
        <Value top={8} left={14}/>
    </div>
  )
}

export default desktop