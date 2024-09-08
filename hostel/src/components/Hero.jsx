import React from 'react'
import video from '../assets/video.mp4'

function Hero() {
  return (
      <div className='w-screen'>
        <div>
        <video src={video} className='w-screen' muted autoPlay loop playsInline></video>
        <div className='fixed right-10  bottom-10'>
          <button className='bg-gradient-to-r text-4xl p-4 border-2 border-black hover:text-orange-700 rounded-3xl from-orange-700 to-orange-400'>Support us</button>
        </div>
        </div>
        
        
      </div>
  )
}

export default Hero