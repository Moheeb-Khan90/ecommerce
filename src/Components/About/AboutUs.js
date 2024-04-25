import React from 'react'
import aboutBanner from '../../Assets/aboutBanner.jpeg'
import aboutCart from '../../Assets/aboutCard.jpg'
import aboutBottom from '../../Assets/aboutBottom-2.jpg'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa6'

const AboutUs = () => {
  
  return (
    <>
      <section className='md:w-full xsm:w-full '>
        <div style={image} className='xsm:w-full xsm:h-[18rem]'>
          <div style={overlayStyle}>
            <div >
              <h1 className='md:text-6xl font-extrabold text-center uppercase text-white tracking-normal xsm:text-4xl'
              >ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-slate-200 md:flex md:flex-wrap md:justify-center md:p-8 md:align-middle'>
        <div className='md:w-[45%]  bg-white flex align-middle justify-center xsm:w-full xsm:text-center'>
          <div className='h-full w-full flex justify-center align-middle flex-col p-6 gap-2'>
            <h1 className='text-4xl font-bold '>Who We Are</h1>
            <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo totam, ea ab quidem, odit cupiditate quisquam, qui aliquid quos ipsum illo excepturi aperiam animi ex. Unde, dolore quae vitae corporis alias obcaecati nulla minus odio suscipit corrupti ducimus. Labore, qui sed.</p>
          </div>
        </div>
        <div className='md:w-[45%] bg-white xsm:w-full'>
          <img src={aboutCart} alt="" className='h-full' />
        </div>
      </section>
      <section className='w-full flex justify-center' style={bottomImage}>
        <div style={overlayStyle2}>

          <div className='w-[42rem] bg-white h-full flex justify-center align-middle flex-col p-6 gap-2 capitalize'>
            <span className='text-5xl font-bold text-center'>follow us</span>
            <div className='flex justify-center gap-20 text-2xl my-4 flex-wrap'>
              <FaTwitter className='cursor-pointer hover:text-orange-400 ' />
              <FaFacebook className='cursor-pointer hover:text-orange-400 ' />
              <FaInstagram className='cursor-pointer hover:text-orange-400 ' />
              <FaGoogle className='cursor-pointer hover:text-orange-400 ' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs

const bottomImage = {
  backgroundImage: `url(${aboutBottom})`,
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
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const image = {
  backgroundImage: `url(${aboutBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  width: '100%',
  height: '38rem', // Adjust the height as needed
  position: 'relative',

}
const overlayStyle2 = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
