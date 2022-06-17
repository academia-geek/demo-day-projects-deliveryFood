import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { HeaderMenu } from '../components/HeaderMenu'
import Menu from './Menu'
import Restaurants from './Restaurants'

export default function ViewProducts() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
      </Routes>
      <Footer />
    </>
  )
}
