import React,{useRef ,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainBanner = () => {

   const sliderRef = useRef();

   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
   };

let previousslide = ()=>{
   sliderRef.current.slickPrev();
}

let nextslide = ()=>{
   sliderRef.current.slickNext();
}

//   useEffect = (() => { 
//    // componet mount
//   // console.log()

//       return () => {
//         console.log('Component will unmount');
//       };

//   },[])

   return (
      <>

         <div class="main-slider">
            <div class="container">
               <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 ">
                     {/* <div id="demo" class="carousel slide banner" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img src="images/slide1.jpg" class="banner-img" alt="Home slider" />
                           <div class="carousel-content">
                              <h2>The Securitisation & Reconstruction of Financial Assets</h2>
                              <div class="banner-btn mt-4">
                                 <a href="#" class="btn knowmore">Read More <span>
                                 <i class="fas fa-chevron-right"></i>
                                 </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="control-navigate">
                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon "></span>
                        </a>
                     </div>
                  </div> */}
                     <Slider ref={sliderRef} {...settings}>
                        <div className='banner-slide'>
                           <img src="images/slide1.jpg" class="banner-img" alt="Home slider" />
                           <div class="carousel-content">
                              <h2>The Securitisation & Reconstruction of Financial Assets 1</h2>
                              <div class="banner-btn mt-4">
                                 <a href="#" class="btn knowmore">Read More <span>
                                    <i class="fas fa-chevron-right"></i>
                                 </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className='banner-slide'>
                           <img src="images/slide1.jpg" class="banner-img" alt="Home slider" />
                           <div class="carousel-content">
                              <h2>The Securitisation & Reconstruction of Financial Assets 2</h2>
                              <div class="banner-btn mt-4">
                                 <a href="#" class="btn knowmore">Read More <span>
                                    <i class="fas fa-chevron-right"></i>
                                 </span>
                                 </a>
                              </div>
                           </div>
                        </div>

                     </Slider>
                     <div class="control-navigate">
                        <a class="carousel-control-prev" onClick={previousslide}>
                        <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" onClick={nextslide}>
                        <span class="carousel-control-next-icon "></span>
                        </a>
                     </div>
                  </div>
                  {/* <div class="col-12 col-sm-12 col-md-2 blue-bg">
                     <ul>
                        <li>
                           <a href="#">Cause List</a>
                        </li>
                        <li>
                           <a href="#">Case Search</a>
                        </li>
                        <li>
                           <a href="#">Case Status</a>
                        </li>
                        <li>
                           <a href="#">Daily Orders</a>
                        </li>
                     </ul>
                  </div> */}
               </div>
            </div>
         </div>
      </>
   )
}

export default MainBanner
