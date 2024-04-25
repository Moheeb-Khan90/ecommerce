import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from '../Pages/Home'
import SingleProduct from "../Pages/SingleProduct";

import EveryThing from "../Pages/EveryThing";


import About from "../Pages/About";
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
            }
        ]

    },
    
])

export default pagesRoute