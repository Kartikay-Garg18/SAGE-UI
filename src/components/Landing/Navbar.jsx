import React, {useState} from 'react'
export default function Navbar(){
    const [isOpen, setIsOpen]=useState(false);
    return(
        <nav className="w-full bg-white fixed top top-0 left-0 z-50  shadow-md" >
            <div className='max-w-[1312px ] mx-auto flex items-center justify-between px-[40]px py-[20px]'>
            <a href='#' className='text-2xl font-semibold text-blue-600 ml-6'>
                <span className='text-gray-900'>SAGE</span>
            </a>

            {/* Menu */}
            <div className='hidden md:flex items-center space-x-8 text-gray-700 font-medium  '>
                <a href='#' className='hover:text-blue-600 border-b-2 border-blue-600 pb-1 '> Home </a>
                <a href='#' className='hover:text-blue-600 border-b-2 border-blue-600 pb-1 '> About Us </a>
                <a href='#' className='hover:text-blue-600 border-b-2 border-blue-600 pb-1 '> Features </a>
                <a href='#' className='hover:text-blue-600 border-b-2 border-blue-600 pb-1 '> Support </a>

                {/* More Dropdown */}
                {/* <div className='relative group'>
                    <button className='flex items-center space-x-1 hover:text-blue-600 transition duration-300'>
                        <span>
                            More
                        </span>
                    </button>
                    <div>
                        <a href='#' className=' block px-4 py-2 hover:bg-gray-100 '>Careers</a>
                        <a href='#' className=' block px-4 py-2 hover:bg-gray-100 '>Support</a>
                    </div>
                </div> */}
            </div>


            {/* sigin and sigin out Buttons */}
            <div className='hidden md:flex items-center space-x-3 mr-6'>
            <button className='px-6 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition duration-300'>
                Sign In 
            </button>
            <button className='px-6 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition duration-300'>
                Sign Up
            </button>
            </div>

            {/* mobile Menu */}
            <button
            className='md:hidden focus:outline-none text-gray-700'
            onClick={()=>setIsOpen(!isOpen)}
            >
            {
                isOpen ? (
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6112 12" />
                    </svg>
                ):(
                    <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg> 

                )
            }
            </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col space-y-3 py-4 px-6 text-gray-700">
                        <a href="#" className="hover:text-blue-600">Home</a>
                        <a href="#" className="hover:text-blue-600">About Us</a>
                        <a href="#" className="hover:text-blue-600">Features</a>
                        <a href="#" className="hover:text-blue-600">Support</a>
                    <div className="flex space-x-2 mt-4">
                        <button className="w-1/2 bg-gray-100 py-2 rounded-md text-gray-800 hover:bg-gray-200">Sign In</button>
                        <button className="w-1/2 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800">Sign Up</button>
                    </div>
                    </div>
                </div>
            )}
        </nav>

    )
}