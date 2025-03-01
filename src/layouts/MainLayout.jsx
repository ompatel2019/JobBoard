import React from 'react'
import Navbar from '../components/Navbar'
import ViewAllJobs from '../components/ViewAllJobs'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default MainLayout