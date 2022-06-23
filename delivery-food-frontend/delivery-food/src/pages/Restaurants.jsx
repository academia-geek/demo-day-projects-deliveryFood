import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardRestaurant from "../components/CardRestaurant";
import { Maps } from "../components/Maps";
import { get } from "../services/getApi";

// const filterCategory = [
//   {
//     category: "Todos",
//     value: "all",
//   },
//   {
//     category: "Restaurante",
//     value: "restaurant",
//   },
//   {
//     category: "Bebidas",
//     value: "bebidas",
//   },
//   {
//     category: "Mercado",
//     value: "mercado",
//   },
// ];
// const filterOpen = [
//   {
//     state: "Todos",
//     value: "all",
//   },
//   {
//     state: "Activos",
//     value: "active",
//   },
//   {
//     state: "Inactivos",
//     value: "inActive",
//   },
// ];

export default function Restaurants() {
  const [establecimientos, setEstablecimientos] = useState(null);

  const getApi = async () => {
    const res = await get("establecimientos");
    const data = res.data;
    setEstablecimientos(data);
  };
  useEffect(() => {
    getApi();
  });
  const select = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-around items-center text-xl mt-5">
        <div></div>
      </div>
      <div className="">
        <Maps />
        <div className="grid grid-cols-3 my-8">
          {establecimientos?.map((e, i) => (
            <CardRestaurant key={i} element={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
