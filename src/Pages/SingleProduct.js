import { useParams } from "react-router-dom"
import Product from "../Components/SingleProduct/Product"
import { useEffect, useState } from "react"


const SingleProduct = () => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  const singleProduct = async (id) => {
    try {
      const data = await fetch(`https://dummyjson.com/products/${id}`)
      const response = await data.json()
      setProduct(response)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }

  }
  useEffect(() => {
    singleProduct(id)
  }, [product,id])


  return (

    <>
      {loading ? (
        <div className='h-[100vh] w-full flex justify-center align-middle my-6 capitalize'>
          <span className='text-3xl text-orange-400'> loading...</span>
        </div>
      ) :
        <Product product={product} />
      }
    </>
  )
}

export default SingleProduct