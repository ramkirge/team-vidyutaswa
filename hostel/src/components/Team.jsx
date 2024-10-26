import img from '../assets/img.jpg'


function Team() {
  return (
    <div className='w-screen items-center justify-center -z-10 '>
      <div className='flex  items-center justify-center '>
        <img src={img} alt="" className='w-screen' />
        <div className='backdrop-blur-[1px] lg:text-2xl  text-xs text-white w-1/2v absolute'>
          <h1 className='text-orange-300'>SAEINDIA</h1>
          <p>SAEINDIA is an affiliate society of SAE International, registered as an Indian non-profit 
            engineering and scientific society dedicated to the advancement of the mobility community in India.
            As an individual member driven society of mobility practitioners, SAEINDIA comprises members associated 
            with transforming the transportation industry - which includes engineers, executives from the industry,
            government officials, academics and students. Principal emphasis is placed on industries such as automotive
            , aerospace and commercial vehicles. SAEINDIA promotes and undertakes initiatives for knowledge dissemination
            and advancement in mobility technologies catering to land, sea, air and space. Out of many student centered
            events, BAJA SAEINDIA is one of the grandest event falling under the umbrella of SAEINDIA.</p>
            <br />
            <br />
          <a className='hover:bg-orange-700 bg-orange-600 border-white border-2 rounded-2xl p-2' href="/">Know More</a>
        </div>

        
      </div>
      
    </div>
  )
}

export default Team