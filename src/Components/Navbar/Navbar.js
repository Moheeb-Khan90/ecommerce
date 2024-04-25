import React from 'react'
import logo from '../../Assets/logo.png'
import { Link, Outlet } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'



const Navbar = () => {
    return (
        <>
            <nav className='w-[100%] border py-1 flex flex-wrap xsm:w-full'>
                <div className='flex mx-auto max-w-4xl py-1 flex-wrap xsm:flex-col sm:flex-col sm:w-full md:flex-row' >
                    <div className=' w-[15%] xsm:w-full xsm:flex xsm:justify-center xsm:items-center md:w-[15%]'>
                        <Link to="/">
                            <img src={logo} alt="logo"  className='w-[10rem]' />
                        </Link>
                    </div>
                    <div className=' w-[70%] flex items-center justify-center gap-6 capitalize font-semibold text-orange-300 text-lg flex-wrap xsm:text-sm xsm:w-full md:w-[70%] md:text-lg'>

                        <Link to="/everything">products</Link>
                        <Link to="/about">about us</Link>
                        <Link to="/contact">contact us</Link>
                        <Link to="/cart"><FaCartPlus className='text-3xl'/></Link>
                        
                    </div>
                    <div className='w-[15%] flex items-center justify-center gap-6 capitalize xsm:w-full 
                    xsm:my-3
                    md:w-[15%]
                    '>
                        <button className='w-44  
                        outline 
                        outline-1
                         outline-orange-300
                          text-orange-300 
                          py-1 
                          px-[0.5rem] t
                          ext-center
                          rounded 
                           capitalize
                            hover:text-orange-500
                             hover:outline-orange-500 
                             transition-all
                        xsm:w-28
                        '>signup</button>
                        <button className='w-44  outline outline-1 outline-orange-300 bg-orange-400 text-white py-1 px-[0.5rem] text-center rounded capitalize hover:text-white hover:outline-orange-500 transition-all
                        xsm:w-28
                        '>signin</button>
                    </div>
                </div>


            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar