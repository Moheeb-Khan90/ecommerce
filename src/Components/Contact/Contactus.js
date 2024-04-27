import React from 'react'

const Contactus = () => {
    return (
        <>
            <section className='w-full bg-slate-100' >
                <div className='w-full text-center md:py-8 xsm:py-2 capitalize'>
                    <h6 className='font-semibold md:text-xl xsm:text-sm'>Have any queries?</h6>
                    <h2 className='font-semibold md:text-4xl xsm:text-2xl'>We're here to help.​</h2>
                </div>
                <div className='md:flex md:flex-nowrap xsm:flex xsm:flex-wrap w-full gap-4 p-2 capitalize'>
                    <div className='md:w-[25%] xsm:w-full border text-center flex py-6  flex-col bg-white rounded-md shadow-md'>
                        <h3 className='font-semibold text-3xl'>sale</h3>
                        <p className='p-2'>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className='text-orange-500 font-medium text-xl'>123 456 78</p>
                    </div>
                    <div className='md:w-[25%] xsm:w-full border text-center flex py-6  flex-col bg-white rounded-md shadow-md'>
                        <h3 className='font-semibold text-3xl'>Complaints</h3>
                        <p className='p-2'>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className='text-orange-500 font-medium text-xl'>1900 223 8899</p>
                    </div>
                    <div className='md:w-[25%] xsm:w-full border text-center flex py-6  flex-col bg-white rounded-md shadow-md'>
                        <h3 className='font-semibold text-3xl'>Returns</h3>
                        <p className='p-2'>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className='text-orange-500 font-medium text-xl'>returns@mail.com</p>
                    </div>
                    <div className='md:w-[25%] xsm:w-full border text-center flex py-6  flex-col bg-white rounded-md shadow-md'>
                        <h3 className='font-semibold text-3xl'>Marketing</h3>
                        <p className='p-2'>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className='text-orange-500 font-medium text-xl'>1700 444 5578</p>
                    </div>

                </div>

                <div className='md:flex md:flex-row xsm:flex xsm:flex-col w-full py-16'>
                    <div className='md:flex md:flex-col md:justify-start md:pt-40 align-middle md:w-[50%] xsm:w-full xsm:text-center xsm:p-2'>
                        <p className='font-semibold'>Don't be a stranger!</p>
                        <h2 className='text-5xl font-semibold mb-6 text-orange-500'>You tell us. We listen.</h2>
                        <p className='text-slate-600'>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                    </div>
                    <div className='bg-white md:w-[50%] p-8 capitalize xsm:w-full' >
                        <form action="" className='flex flex-col gap-5' autoComplete='off'>
                            <div className='w-full'>
                                <input className='w-full focus:outline-orange-400 border placeholder:pl-1 h-12' type="text" placeholder='Name' autoComplete='off' />
                            </div>
                            <div>
                                <input className='w-full focus:outline-orange-400  border p-1 placeholder:pl-1 h-12 capitalize' type="text" placeholder='subject' />
                            </div>
                            <div>
                                <input className='w-full focus:outline-orange-400 md:focus:border-0  border p-1 placeholder:pl-1 h-12' type="text" placeholder='Email' />
                            </div>
                            <div>
                                <textarea className='w-full focus:outline-orange-400 md:focus:border-0 border p-1 placeholder:pl-1' cols='20' rows='18' placeholder='Message'></textarea>
                            </div>
                            <div>
                                <button className='bg-orange-400 p-4 capitalize text-white'>send message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus