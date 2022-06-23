import React from "react";
import { Link } from "react-router-dom";

export default function CardRestaurant({ element }) {
  return (
    <>
      <div className="w-60 h-72 shadow-xl rounded-md  m-auto my-2">
        {/* <div className='bg-green-300'>estado</div> */}
        <div>
          <img src={element.foto_est} className="rounded" alt="" />
        </div>
        <div
          className="h-3/5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/" className="text-lg">
            {element.nombre}
          </Link>
        </div>
      </div>
    </>
  );
}
