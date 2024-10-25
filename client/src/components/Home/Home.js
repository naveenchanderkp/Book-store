import React from "react";
import { Link } from "react-router-dom";
import books from '../../Utils/Images/bg2.jpg'
import image from '../../Utils/Images/laptop.jpg'

function Home() {
  return (
  <div className="container min-h-screen bg-center bg-cover px-28 py-5 relative" style={{backgroundImage:`url(${books})`}}>
    <nav className="flex items-center justify-center w-full">
        {/* <img src={books}> */}
        <ul className="flex text-center">
            <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white">Home</a></li>
            <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white">Store</a></li>
            <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white">Contact</a></li>
            <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white">Add</a></li>
        </ul>
        {/* <img src={books}/> */}
    </nav>
    <div className="text-white mt-1 max-w-lg">
        <h1 className="text-6xl font-semibold leading-normal">"Books <br/>have the power to level up your knowledge."</h1>
        {/* <p className="font-bold text-lg">"Books That Speak to Your Soul"</p> */}

        <div className="mt-10 flex justify-center gap-10">
            <Link to='login' className="bg-blue-500 hover:bg-transparent hover:border-blue-600 hover:border hover:text-white duration-200 border border-transparent rounded-2xl inline-block font-medium py-4 px-8">Login</Link>
            <Link to='signup' className="bg-red-500 hover:bg-transparent hover:border-red-600 hover:border hover:text-white duration-200 border border-transparent rounded-2xl inline-block font-medium py-4 px-8">Signup</Link>
        </div>
        {/* <img src={image} className="w-full xl:w-1/2 xl:absolute bottom-0 right-20"/> */}
    </div>
  </div>
  );
}

export default Home;
