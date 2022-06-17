import React from 'react';
import { Link } from "react-router-dom";

export default function CardRestaurant({element}) {
  return (
    <div className='bg-green-300 w-44 h-72 shadow-xl rounded-md border-4 border-solid border-green-300 m-auto'>
      <div className='bg-green-300'>estado</div>
      {/* <div className='bg-green-300'>{element.estado}</div> */}
      <div>
        <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1648678917/cld-sample.jpg" className='rounded' alt="" />
      </div>
      <div className='h-2/5 bg-green-300'>
        <h4>Nombre</h4>
        {/* <h4>{element.nombre}</h4> */}
        {/* <button  className='p-2 bg-green-600 rounded '>Ver Menú</button> */}
        <Link to='/' className='p-2 bg-green-600 rounded text-white'>Ver más</Link>
      </div>
    </div>
  )
}