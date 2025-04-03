import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import toast, { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
    <div><Toaster/></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default Layout;