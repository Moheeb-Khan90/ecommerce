import React from 'react'
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <footer className='w-full  flex gap-0 my-4 p-2 capitalize flex-wrap'>
            <div className='flex justify-center align-center w-80'>
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='flex justify-center align-middle w-96'>
                <div className='flex flex-col justify-center gap-1'>

                    <span className='text-2xl font-semibold my-2'>For Her</span>
                    <a href="" className='hover:text-orange-400 '>womens jeans</a>
                    <a href="" className='hover:text-orange-400 '>tops and shirts</a>
                    <a href="" className='hover:text-orange-400 '>women jackets</a>
                    <a href="" className='hover:text-orange-400 '>heels and flats</a>
                    <a href="" className='hover:text-orange-400 '>women accessories</a>
                </div>
            </div>
            <div className='flex justify-center align-middle w-96'>
                <div className='flex flex-col justify-center gap-1'>

                    <span className='text-2xl font-semibold my-2'>For him</span>
                    <a href="" className='hover:text-orange-400 '>mens jeans</a>
                    <a href="" className='hover:text-orange-400 '>mens shirts</a>
                    <a href="" className='hover:text-orange-400 '>mens jackets</a>
                    <a href="" className='hover:text-orange-400 '>mens shoes</a>
                    <a href="" className='hover:text-orange-400 '>mens accessories</a>
                </div>
            </div>

            <div className='w-full flex flex-wrap justify-center py-6'>
                <span className='py-4'>Copyright © 2024 my shop. Powered by my shop.</span>
            </div>
        </footer>
    )
}

export default Footer