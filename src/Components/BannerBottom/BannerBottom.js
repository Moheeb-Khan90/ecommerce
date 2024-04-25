import banner from '../../Assets/bannerBottom.png'
import { FaEarthAsia, FaHeart, FaLock,  FaTag} from "react-icons/fa6";
const BannerBottom = () => {
    const image = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '38rem', // Adjust the height as needed
        position: 'relative',

    }
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity and color as needed
    };

    return (
        <>
            <section className="w-full my-4 flex justify-center items-center flex-wrap xsm:w-full xsm:h-auto md:h-auto  " >
                <div  style={image} className='md:w-full xsm:flex xsm:flex-wrap'>
                    <div style={overlayStyle}>
                        <div className='md:w-[50%] md:ml-32 pt-32 flex flex-wrap xsm:w-[100%] xsm:ml-0 xsm:flex-col xsm:flex-wrap xsm:p-6 xsm:pt-32 '>
                            <div>
                                <span className='md:font-bold md:text-2xl capitalize tracking-wide text-white xsm:text-xl'>Limited Time Offer</span>
                            </div>

                            <div className='my-6 xsm:my-2'>
                                <span className='md:text-6xl font-extrabold capitalize text-white tracking-normal xsm:text-4xl '
                                >Special Edition</span>
                            </div>
                            <div className='my-4 w-full'>
                                <span className='text-white w-full text-xl'>
                                    Unlock exclusive deals with our Limited Time Offer! Discover our Special Edition collection while stocks last
                                </span>
                            </div>
                            <div >
                                <span className='font-extrabold text-2xl capitalize  tracking-wide text-white xsm:text-xl md:text-2xl'
                                >Buy This T-shirt At 20% Discount, Use Code OFF20</span>
                            </div>
                            <div className=' my-6 flex justify-start'>
                                <button className=' bg-white py-2 px-6 text-orange-400 capitalize text-xl font-medium hover:rounded transition-all xsm:py-2'>shop now</button>
                            </div>
                        </div>

                    </div>

                </div>


                {/* section for element */}

                <div className='w-full xsm:h-auto  h-96 flex gap-2 py-16 px-4 capitalize flex-wrap justify-center'>
                    <div className='size-[20rem]  flex justify-center items-center flex-col'>
                        <div className='w-full flex justify-center my-2'>
                            <FaEarthAsia className='text-7xl text-orange-400' />
                        </div>
                        <div className='w-full flex justify-center my-2 '>
                            <span className='font-semibold text-orange-400'>Worldwide Shipping</span>
                        </div>
                        <div className='w-full flex justify-center align-center '>
                            <span className='font-semibold text-gray-600 p-2 text-center'>Get ready to shop from anywhere in the world! Enjoy hassle-free international shipping on all orders</span>
                        </div>
                    </div>
                    <div className='size-[20rem] flex justify-center items-center flex-col'>
                        <div className='w-full flex justify-center my-2'>
                            <FaHeart className='text-7xl text-orange-400' />
                        </div>
                        <div className='w-full flex justify-center my-2 '>
                            <span className='font-semibold text-orange-400'>Best Quality</span>
                        </div>
                        <div className='w-full flex justify-center align-center '>
                            <span className='font-semibold text-gray-600 p-2 text-center'>Experience the pinnacle of quality with our products. Crafted with precision and care, we pride ourselves on delivering excellence in every detail </span>
                        </div>
                    </div>
                    <div className='size-[20rem] flex justify-center items-center flex-col'>
                        <div className='w-full flex justify-center my-2'>
                            <FaTag className='text-7xl text-orange-400' />
                        </div>
                        <div className='w-full flex justify-center my-2 '>
                            <span className='font-semibold text-orange-400'>Best Offers</span>
                        </div>
                        <div className='w-full flex justify-center align-center '>
                            <span className='font-semibold text-gray-600 p-2 text-center'>Don't miss out on our best offer yet! Unleash unbeatable savings and exclusive deals for a limited time only</span>
                        </div>
                    </div>
                    <div className='size-[20rem]  flex justify-center items-center flex-col'>
                        <div className='w-full flex justify-center my-2'>
                            <FaLock className='text-7xl text-orange-400' />
                        </div>
                        <div className='w-full flex justify-center my-2 '>
                            <span className='font-semibold text-orange-400'>Secure Payments</span>
                        </div>
                        <div className='w-full flex justify-center align-center '>
                            <span className='font-semibold text-gray-600 p-2 text-center'>
                                Shop with confidence knowing your payments are secure. Our platform offers robust security measures to protect your sensitive information
                            </span>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default BannerBottom

