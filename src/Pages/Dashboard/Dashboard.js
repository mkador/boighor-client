import React from 'react'
import { Outlet } from 'react-router-dom'
import AddProduct from './AddProduct'

const Dashboard = () => {
  return (
    <div>
      <AddProduct></AddProduct>
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
