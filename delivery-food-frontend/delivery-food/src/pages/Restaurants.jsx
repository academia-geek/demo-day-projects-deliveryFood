import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import CardRestaurant from '../components/CardRestaurant';
import Maps from '../components/Maps';
import { get } from '../services/getApi';

const filterCategory = [
  {
    category: 'Todos',
    value: 'all' 
  },
  {
    category: 'Restaurante',
    value: 'restaurant' 
  },
  {
    category: 'Bebidas',
    value: 'bebidas' 
  },
  {
    category: 'Mercado',
    value: 'mercado' 
  }
];
const filterOpen = [
  {
    state: 'Todos',
    value: 'all' 
  },
  {
    state: 'Activos',
    value: 'active' 
  },
  {
    state: 'Inactivos',
    value: 'inActive' 
  },
]

export default function Restaurants() {

  const getApi = async() => {
    return await get('establecimientos');
  };
  const select = (e) => {
    console.log(e.target.value)
  }
  return (
    <div>
      <div className='flex justify-around items-center text-xl mt-5'>
        <h2 className='text-3xl'>Establecimientos</h2>
        <span>Busca lo mejor para ti </span>
      </div>
      <div className='flex justify-around items-center m-auto mb-20 mt-16'>
        <label className='flex border-solid border border-gray-400 w-80 rounded cursor-text ' htmlFor='search'>
          <SearchIcon className='h-10 w-10'/>
          <input type="text" placeholder='Buscar establecimiento...' className='outline-none' id='search'/>
        </label>
        <div>
          <span>Categorias: </span>
          <select name="filter-establecimientos" id="" className='border-solid border border-gray-400 mr-10 rounded' onChange={select}>
            {
              filterCategory.map((e, i) => (
                <option key={i} value={e.value}>{e.category}</option>
              ))
            }
          </select>
          <span>Abierto/Cerrado: </span>
          <select name="disponibles" id="" className='border-solid border border-gray-400 rounded' onChange={select}>
            {
              filterOpen.map((e, i) => (
                <option key={i} value={e.value}>{e.state}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className=''>
        {/* <CardRestaurant /> */}
                {/* {
          getApi()?.map((e, i) => (
            <CardRestaurant key={i}element={e}/>
            ))
          } */}
          <Maps/>
      </div>
    </div>
  )
}