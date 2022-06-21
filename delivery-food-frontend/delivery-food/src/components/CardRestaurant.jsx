import React from 'react';
import { Link } from "react-router-dom";

export default function CardRestaurant({element}) {
  return (
    <>
      <div className='w-60 h-72 shadow-xl rounded-md  m-auto my-2'>
        {/* <div className='bg-green-300'>estado</div> */}
        <div>
          <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1648678917/cld-sample.jpg" className='rounded' alt="" />
        </div>
        <div className='h-3/5' style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <Link to='/' className='text-lg'>{element.nombre}</Link>
        </div>
      </div>
    </>
  )
}