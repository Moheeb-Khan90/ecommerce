import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import FeaturedProduct from '../Components/FeaturedProduct/FeaturedProduct'

import BannerBottom from '../Components/BannerBottom/BannerBottom'


const Home = () => {

  const [products, setProduct] = useState([])
  const singleProduct = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/product?skip=5&limit=15`)
      const response = await data.json()
      setProduct(response)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    singleProduct()
  }, [])


  return (
    <>
      <Banner />
      <FeaturedProduct products={products} />
      <BannerBottom />

    </>
  )
}

export default Home