import React from 'react'
import { Link } from 'react-router-dom'


const FeaturedProduct = ({ products }) => {
    if (!products || !products.products) {
        return null; // or any loading indicator
    }
    return (
        <>
            <section className='flex  mx-auto  max-w-7xl py-1  flex-wrap   rounded-lg  my-4 xsm:w-full md:flex-row md:mx-auto  md:max-w-7xl '>
                <div className='w-full mt-10 flex justify-center'>
                    <span className='
                pb-6
                text-4xl
                font-bold
                text-orange-400
                '>
                        Featured Products
                    </span>
                </div>
                <div className=' w-full my-6 flex flex-wrap justify-center items-center gap-5 p-2 xsm:gap-2 xsm:p-1 md:p-2 md:gap-4 '>
                    {
                        products.products.map((item) => (
                            <Link to={`/product/${item.id}`} key={item.id}>
                                <div className='border w-[8rem] h-[20rem] flex flex-col xsm:w-[10rem] xsm:h-[18rem] md:w-[12rem] md:h-[22rem]'>
                                    <div className='md:h-[12rem] xsm:h-[12rem]'>
                                        <img src={item.thumbnail} alt="" className='w-full md:h-[12rem] xsm:h-[8rem]' />
                                    </div>
                                    <div className='my-1 w-full flex flex-col capitalize gap-1 p-1'>
                                        <span className='font-semibold text-lg text-orange-400'>{item.title}</span>
                                        <span className='font-thin'>{item.category}</span>
                                        <span className='font-normal text-lg'>{`$${item.price}.00`}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </section>
        </>
    )
}

export default FeaturedProduct