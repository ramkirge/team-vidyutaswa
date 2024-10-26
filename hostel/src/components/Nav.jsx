import React from 'react'
import Picture1 from '../assets/Picture1.png';
import { IoMenuSharp } from "react-icons/io5";



function Nav() {
  return (
    <div className=' z-50 backdrop-blur-lg flex bg-black fixed w-screen justify-between p-2 lg:h-2'>
        <div className='flex space-x-0 h-2 '>
          <img className="h-20 m-1 w-20  lg:w-28 " alt='img1' src={Picture1}/>
          <span className='pt-4 text-xl lg:text-4xl text-white font-bold items-center'>TEAM VIDYUTASHWA</span>
        </div>
        <div className=' p-3 lg:hidden'>
          <IoMenuSharp className=' h-14 w-14' />
        </div>
        <div className='hidden lg:flex p-4 items-center text-xl text-white font-semibold space-x-20'>
          <ul> <a className='hover:text-orange-600' href="/">Home</a></ul>
          <ul> <a className='hover:text-orange-600' href="/">Team</a></ul>
          <ul> <a className='hover:text-orange-600' href="/">Achievements</a></ul>
          <ul> <a className='hover:text-orange-600' href="/">Parteners</a></ul>
          <ul> <a className='hover:bg-orange-700 bg-orange-600 border-white border-2 rounded-2xl p-2' href="/">Contact</a></ul>

        </div>
    </div>
  )
}

export default Nav