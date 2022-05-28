import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from './Dashboard'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/login' element={
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        }/>
        <Route path='/register' element={
          <PublicRoutes>
            <Register/>
          </PublicRoutes>
        }/>

        <Route path='/*' element={
          <PrivateRoutes>
            <Dashboard/>
          </PrivateRoutes>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
