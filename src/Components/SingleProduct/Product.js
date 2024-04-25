import React, { useState } from 'react'

const Product = ({ product }) => {
    const [cartQuantity, setCartQuantity] = useState(0)
    const [cartMessage, setCartMessage] = useState()
    const [image,setImage] = useState(product.images[0])

    const handleDecrement = () => {
        cartQuantity < 1 ? setCartQuantity(1) : setCartQuantity((prev) => prev - 1)
    }

    const handleIncrement = () => {
        const isOutOfStock = product.stock <= cartQuantity;
    
        if (isOutOfStock) {
            setCartMessage('out of stock') 
         
        } else {
            setCartMessage('') 
            setCartQuantity(prevQuantity => prevQuantity + 1);
           
        }
    }
   
    return (
        <>
            <section className='w-full h-[32rem] my-5 flex flex-wrap mx-auto gap-2 justify-center xsm:flex-col md:flex-row xsm:h-auto sm:h-auto'>
                <div className='md:mx-0 xsm:mx-auto p-2 md:w-[30%] md:h-[80%] xsm:w-[50%] xsm:h-[20%]'>
                    <img className='h-full w-full' src={image} alt={image} />
                </div>

                <div className='w-[40%] flex flex-col capitalize p-4 xsm:w-full xsm:flex-col-reverse sm:w-full md:w-[40%] md:flex-col' >
                    <div className='flex flex-col gap-4 w-full'>
                        <span className=' font-semibold text-2xl '>{product.category}</span>
                        <span className='font-bold text-4xl '>{product.title}</span>
                        <span className='font-thin text-2xl'>${product.price}.00</span>
                        <span className='font-thin '>{product.description}</span>
                    </div>
                    <div className='flex my-4 w-full xsm:w-full gap-2 capitalize'>
                        <button className='border px-2' onClick={handleDecrement}>-</button>
                        <input readOnly type="number" className='border w-11 text-center' value={cartQuantity} />
                        <button className='border px-2' onClick={handleIncrement}>+</button>

                        <button className=' w-full bg-orange-400 py-2 text-white hover:bg-orange-500 transition-all capitalize'>add to cart</button>
                    </div>
                    <div className='w-full flex gap-2'>
                        {
                            product.images.map((item) => (
                                <div className='size-14 border cursor-pointer' key={item}>
                                    <img 
                                    className='w-full h-full' 
                                    src={item} 
                                    alt={item} 
                                    onClick={()=>setImage(item)}

                                    />
                                </div>
                            ))
                        }
                    </div>


                    {cartMessage &&
                        <div className='my-3 text-center bg-red-500 text-white p-2'>
                            {cartMessage}
                        </div>
                    }


                </div>
            </section>
        </>
    )
}

export default Product