import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProduct = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/categories`)
      const data = await response.json()
      setSelectedCategory(data)
      setLoading(false)
    } catch (error) {

      setLoading(false)
    }
  };

  useEffect(() => {
    fetchCategories();
    setFilteredProducts(products || []); // Initialize filteredProducts with products or empty array
  }, [products])

  const filterProductsByCategory = (category) => {
    if (category === '') {
      setFilteredProducts(products)
    } else {
      const filtered = Array.isArray(products) ? products.filter(product => product.category === category) : []
      setFilteredProducts(filtered)
    }
  };

  if (loading) {
    return  null
  }

  return (
    <>
      <section className='w-full flex mx-auto max-w-7xl flex-wrap rounded-lg my-4 xsm:flex-col xsm:w-full md:flex-row md:mx-auto md:max-w-7xl'>
        <div className='md:w-[20%] mt-10 xsm:w-full px-8 flex flex-col gap-4  bg-white'>
          <span className='w-full capitalize text-3xl font-semibold text-orange-500'>Categories</span>
          <div className='flex gap-3 flex-wrap md:flex-col capitalize text-[1rem] xsm:flex-row '>
            <button onClick={() => filterProductsByCategory('')} className='text-orange-500'>All</button>
            {selectedCategory.map((item) => (
              <button onClick={() => filterProductsByCategory(item)} key={item} className='text-orange-500'>{item}</button>
            ))}
          </div>
        </div>

        <div className=' md:w-[80%] my-6 flex flex-wrap justify-center items-center gap-5 p-2 xsm:gap-2 xsm:p-1 md:p-2 md:gap-4'>
          {filteredProducts.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className='border w-[8rem] h-auto flex flex-col xsm:w-[10rem] xsm:h-auto md:w-[12rem] md:h-[20rem]'>
                <div className='md:h-[12rem] xsm:h-[10rem]'>
                  <img src={item.thumbnail} alt="" className='w-full md:h-[12rem] xsm:h-[8rem]' />
                </div>
                <div className='my-1 w-full flex flex-col capitalize gap-1 p-1'>
                  <span className='font-semibold text-lg text-orange-400'>{item.title}</span>
                  <span className='font-thin'>{item.category}</span>
                  <span className='font-normal text-lg'>{`$${item.price}.00`}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProduct;
