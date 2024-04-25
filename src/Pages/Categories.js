import React, { useEffect, useState } from 'react'
import Category from '../Components/Category/Category'
import { useParams } from 'react-router-dom'


const Categories = () => {

    const { categories } = useParams()
    const [products, setProduct] = useState([])
    const singleProduct = async () => {
        try {
            const data = await fetch(`https://dummyjson.com/products/category/${categories}`)
            const response = await data.json()
            setProduct(response)
            console.log(response)
        } catch (error) {
            console.log(error) 
        }

    }
    useEffect(() => {
        singleProduct()
    }, [])
    return (
        <>
            <Category products={products} />
        </>
    )
}

export default Categories