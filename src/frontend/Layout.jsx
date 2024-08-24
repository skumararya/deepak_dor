import React from 'react'
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'
import AppRouting from './AppRouting'

const Layout = () => {
  return (
    <>
       <Header />
         <AppRouting/>
       <Footer/>
    </>
  )
}

export default Layout
