import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import CardRestaurant from '../components/CardRestaurant';
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
        <h2 className='text-3xl'>Establecimientos</h2>
      <div className='flex justify-around m-auto mb-20 mt-5'>
        <label className='flex border-solid border border-gray-400 w-80 rounded cursor-text ' htmlFor='search'>
          <SearchIcon className='h-10 w-10'/>
          <input type="text" placeholder='Buscar establecimiento...' className='outline-none' id='search'/>
        </label>
        <div>
          <select name="filter-establecimientos" id="" className='border-solid border border-gray-400 mr-5 rounded' onChange={select}>
            {
              filterCategory.map((e, i) => (
                <option key={i} value={e.value}>{e.category}</option>
              ))
            }
          </select>
          <select name="disponibles" id="" className='border-solid border border-gray-400 rounded' onChange={select}>
            {
              filterOpen.map((e, i) => (
                <option key={i} value={e.value}>{e.state}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-3'>
        <CardRestaurant />
                {/* {
          getApi()?.map((e, i) => (
            <CardRestaurant key={i}element={e}/>
            ))
          } */}
      </div>
    </div>
  )
}