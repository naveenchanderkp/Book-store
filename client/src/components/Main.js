import React from 'react'
import Book from '../Utils/Images/new.jpg'

function Main() {
  return (
    <div className='grid grid-cols-2 px-5 md:px-16'>
      <div className='flex flex-col h-screen justify-center'>
        <h1 className='text-4xl font-bold leading-10 tracking-wider'>Knowledge <br/>Matters</h1>
        <p className='text-lg text-light'>Grow your Knowledge with us and add your favourite books here</p>
        <button className='text-white bg-green-600 hover:bg-green-700 px-3 rounded-lg p-1 h-10 w-36'>Add +</button>
      </div>
      <div className='flex flex-col justify-center items-center h-screen place-content-center'>
            <img src={Book} alt=''/>
        </div>
    </div>
  )
}

export default Main
