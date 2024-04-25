// // import React, { useEffect, useState } from 'react'

// // const categoryItems = () => {
// //     const [category, setCategory] = useState([])
// //     const categorise = async () => {
// //         try {
// //             const data = await fetch(`https://dummyjson.com/products/categories`)
// //             const response = await data.json()
// //             setCategory(response)
// //         } catch (error) {
// //             console.log(error)
// //         }

// //     }
// //     useEffect(() => {
// //         categorise()
// //     }, [category])
// //     if (!category ) {
// //         return null
// //       }
// //     return (
// //         <>
// //             <div className=' md:w-[20%] mt-10 xsm:w-full px-8 flex flex-col gap-4 '>
// //                 <span className=' w-full capitalize text-3xl font-semibold text-orange-500 '>categories</span>
// //                 <div className='flex gap-3 flex-wrap md:flex-col   capitalize text-[1rem] xsm:flex-row'>
// //                     {
// //                         category && category.map((items) => (
// //                             <Link to={`/category/${items}`} key={items} className='text-orange-500 '>{items}</Link>
// //                         ))
// //                     }

// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default categoryItems
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const CategoryItems = () => {
//     const [category, setCategory] = useState([]);

//     const categorise = async () => {
//         try {
//             const data = await fetch(`https://dummyjson.com/products/categories`);
//             const response = await data.json();
//             setCategory(response);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         categorise();
//     }, []); // No need to include category in the dependency array

//     if (!category) {
//         return null;
//     }

//     return (
//         <>
//             <div className='md:w-[20%] mt-10 xsm:w-full px-8 flex flex-col gap-4'>
//                 <span className='w-full capitalize text-3xl font-semibold text-orange-500'>categories</span>
//                 <div className='flex gap-3 flex-wrap md:flex-col capitalize text-[1rem] xsm:flex-row'>
//                     {category.map((item) => (
//                         <button to={`/category/${item}`} key={item} className='text-orange-500'>{item}</button>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CategoryItems;
