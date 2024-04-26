import React from 'react'
import { FaTrash } from 'react-icons/fa'


const CartProduct = () => {
    return (
        <>
            <section className='md:w-full bg-slate-200 p-2 md:flex-row md:justify-center xsm:justify-center md:gap-2 xsm:flex xsm:flex-col-reverse xsm:gap-2 capitalize relative'>
                <div className="md:w-[65%] bg-white rounded-md flex p-6 md:flex-col md:gap-2 xsm:flex xsm:flex-col xsm:gap-4 xsm:w-full ">

                <h2 className='text-3xl font-bold text-orange-500 border-b p-5'>shopping bag</h2>


                    <div className='w-[100%]  flex justify-center align-middle p-5 gap-2 md:flex-row md:gap-2 xsm:flex xsm:w-full xsm:gap-2 border-b my-2'>
                        <div className='w-[20%] h-24 flex justify-center align-middle'>
                            <img className='object-cover w-full h-full rounded' src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='md:w-[50%] leading-4 xsm:w-[60%]'>
                            <div className="flex flex-wrap flex-col xsm:flex xsm:flex-wrap">
                                <p className="text-gray-600">mens</p>
                                <h2 className="md:text-lg xsm:text-sm font-semibold mb-2 text-orange-400">Mens Casual Premium Slim Fit T-Shirts</h2>
                                <p className="text-gray-700 mb-2">quantity:  <b>5</b></p>
                                <p className="text-gray-800">color: <b>brown</b></p>
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-center align-middle'>
                            <div className="flex flex-wrap flex-col text-center justify-center align-middle xsm:w-[20%]">
                                <h2 className="md:text-lg xsm:text-sm font-semibold mb-2 text-orange-400">price</h2>
                                <p className="text-gray-700 mb-2">$50.00</p>
                                <span className='text-center text-orange-400 flex justify-center'><FaTrash /></span>

                            </div>
                        </div>

                    </div>

                    <div className='w-[100%]  flex justify-center align-middle p-5 gap-2 md:flex-row md:gap-2 xsm:flex xsm:w-full xsm:gap-2 border-b my-2'>
                        <div className='w-[20%] h-24 flex justify-center align-middle'>
                            <img className='object-cover w-full h-full rounded' src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='md:w-[50%] leading-4 xsm:w-[60%]'>
                            <div className="flex flex-wrap flex-col xsm:flex xsm:flex-wrap">
                                <p className="text-gray-600">mens</p>
                                <h2 className="md:text-lg xsm:text-sm font-semibold mb-2 text-orange-400">Mens Casual Premium Slim Fit T-Shirts</h2>
                                <p className="text-gray-700 mb-2">quantity:  <b>5</b></p>
                                <p className="text-gray-800">color: <b>brown</b></p>
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-center align-middle'>
                            <div className="flex flex-wrap flex-col text-center justify-center align-middle xsm:w-[20%]">
                                <h2 className="md:text-lg xsm:text-sm font-semibold mb-2 text-orange-400">price</h2>
                                <p className="text-gray-700 mb-2">$50.00</p>
                                <span className='text-center text-orange-400 flex justify-center'><FaTrash /></span>

                            </div>
                        </div>

                    </div>



                </div>
                <div className=' md:w-[30%] md:h-56 xsm:w-full bg-white rounded-md p-4 flex flex-col gap-2 capitalize'>
                    <h6 className='font-bold text-2xl mt-3 text-orange-500'>Order Summary</h6>

                    <div className='flex justify-between'>
                        <span>Subtotal (Items 1)</span>
                        <span>Rs 223.96</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Shipping Fee</span>
                        <span>Rs 100</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Amount</span>
                        <span>Rs 323</span>
                    </div>

                    <div className='w-full flex text-center '>
                        <button className='w-full bg-orange-400 py-2 text-white font-semibold capitalize'>proccee to checkout </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CartProduct