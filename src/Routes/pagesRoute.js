import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from '../Pages/Home'
import SingleProduct from "../Pages/SingleProduct";
import EveryThing from "../Pages/EveryThing";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import CartProduct from "../Components/CartProduct/CartProduct";

const pagesRoute = createBrowserRouter([
    {
        path:'/',
        element: <Navbar/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                index:true
            },
            {
                path:'product/:id',
                element:<SingleProduct/>
            },
            {
                path:'/everything',
                element:<EveryThing/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/cart',
                element:<CartProduct/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]

    },
    
])

export default pagesRoute