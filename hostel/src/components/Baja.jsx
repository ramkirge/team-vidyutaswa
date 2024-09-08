
import images from '../assets/images.png'

import React from 'react'

function Baja() {
  return (
    <div className='w-screen items-center justify-center p-10 '>
      <div className='flex items-center justify-center '>
        <img src={images} alt="" className='w-4/6' />
        <div className='backdrop-blur-xl w-1/2v absolute'>
          <h1 className='text-white'>Ebaja</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Baja