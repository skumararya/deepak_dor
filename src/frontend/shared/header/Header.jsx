import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../container/pages/Home'

const Header = () => {
  return (
    <>
        <div class="logo-sec-wraper">
         <div class="container">
            <div class="d-flex justify-content-between flex-wrap align-items-center">
               <div class="col-12 col-sm-12 col-md-12 col-lg-4 logo-sec">
                  <a href="#" class="logo-align">
                     <img src="images/emblem-dark.png" alt="emblem"/>
                     <div class="brand-text">
                        <h4>Railway Claims Tribunal <span>Online Court services of RCT</span>
                        </h4>
                     </div>
                  </a>
               </div>
               <div class="col-12 col-sm-12 col-md-12 col-lg-8 d-flex justify-content-end navbar-section">
                  <nav class="navbar navbar-expand-lg navbar-light custom-nav  w-100">
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                           <li class="nav-item active">
                              <Link class="nav-link" to={'/'}>
                              <i class="fas fa-home"></i>
                              </Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to={'/aboutus'}>About Us</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to={'notices'}>Notices/Circulars</Link>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="cause-list.html">Services</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">Case Management System</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">Uploads</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#"> Contact</a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Header
