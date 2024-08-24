import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './container/pages/Home'
import AboutPg from './container/pages/AboutPg';
import PageNotFound from './container/pages/PageNotFound';
import NoticesPg from './container/pages/NoticesPg';

const AppRouting = () => {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='aboutus' element={<AboutPg />}></Route>
      <Route path='notices' element={<NoticesPg />}></Route>


        <Route path="*" element={<PageNotFound/>}></Route>

    </Routes>
   </>
  )
}

export default AppRouting
