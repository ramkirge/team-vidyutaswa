import React from 'react'
import video from '../assets/video.mp4'
import Picture from '../assets/Picture6.jpg'

function Hero() {
  return (
      <div className='w-screen'>
        <div>
        
        <img src={Picture} alt="" className='w-screen h-screen' />
        <div className='fixed right-10  bottom-10'>
          <button className='z-60 bg-gradient-to-r text-4xl p-4 border-2 border-black hover:text-orange-700 rounded-3xl from-orange-700 to-orange-400'>Support us</button>
        </div>
        </div>
        
        
      </div>
  )
}

export default Hero