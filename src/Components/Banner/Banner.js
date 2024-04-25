import React from 'react'
import banner from '../../Assets/banner.png'

const Banner = () => {
    return (
        <section className='
        flex 
        mx-auto 
        max-w-4xl 
        py-1 
        flex-wrap 
        border
         rounded-lg 
         my-4
         xsm:w-full
         xsm:flex-col-reverse
         md:flex-row
         md:mx-auto 
         md:max-w-4xl 
         
         '>
            <div className='
            w-[60%] 
            flex-col 
            p-5
            xsm:w-full
            md:w-[60%]
            
            '>
                <div>
                    <span
                        className='font-extrabold 
                    text-2xl
                    capitalize 
                    tracking-wide
                    text-orange-300
                    
                     '
                    >treditional collection</span>
                </div>
                <div className='my-4'>
                    <span
                        className='
                    text-5xl
                    font-extrabold
                    capitalize
                    text-gray-700
                    tracking-normal
                    
                    '
                    >explore summer collection</span>
                </div>
                <div className='my-2'>
                    <span className='
                    text-gray-600
                    
                    '>
                        Step into summer with our vibrant collection! From breezy fabrics to sun-kissed hues, find your perfect look for the season
                    </span>
                </div>

                <div className='
                my-4 
                flex
                justify-start
                '>
                    <button className='
                    bg-orange-300
                    py-2
                    px-6
                    text-white
                    capitalize
                    text-xl
                    font-medium
                    hover:bg-orange-600
                    hover:rounded
                    transition-all
                    '

                    >shop now</button>
                </div>
            </div>
            <div className='
            w-[40%]
            xsm:w-full
            md:w-[40%]
            '>
                <img src={banner} alt="" className='w-[48rem]' />
            </div>
        </section>
    )
}

export default Banner