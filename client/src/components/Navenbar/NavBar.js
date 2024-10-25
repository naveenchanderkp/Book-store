import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooks } from '../../Store/user'

export default function NavBar() {
  const dispatch = useDispatch()

  const getMyBooks = () => {
    dispatch(getBooks())
  }
  return (
    <div className='flex justify-between mt-5 mx-10'>
      <div className='text-xl text-wide'>
        {/* <span className='font-bold text-wide'><img className='h-40 w-40' src={logo}></img></span> */}
      </div>
      <div className='flex'>
        <ul className='flex space-x-7 text-zinc-400'>
            <li className='hover:text-white hover:bg-green-700 px-3 rounded-lg duration-200 ease-in'><Link to="/collections" onClick={getMyBooks}>Collections</Link></li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Home</a></li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Store</a></li>
            <li className='hover:text-white hover:bg-blue-700 px-3 rounded-lg duration-200 ease-in'><a href='#'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
