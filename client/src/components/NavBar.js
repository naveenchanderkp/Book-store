import React from 'react'
import logo from '../Utils/Images/remover.png'

export default function NavBar() {
  return (
    <div className='flex justify-between mt-5 mx-10'>
      <div className='text-xl text-wide'>
        {/* <span className='font-bold text-wide'><img className='h-40 w-40' src={logo}></img></span> */}
      </div>
      <div className='flex'>
        <ul className='flex space-x-7 text-zinc-400'>
            <li className='hover:text-white hover:bg-green-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Collections</a></li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Home</a></li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Store</a></li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
