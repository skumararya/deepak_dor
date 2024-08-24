import React from 'react'

const WhatsNew = () => {
  return (
   <>
    <div class="whats-new">
         <div class="container">
            <div class="whats-new-cont">
               <div class="news-control">
                  <h2>What’s New</h2>
                  <div class="pause-btn">
                     <i class="fas fa-pause"></i>
                  </div>
               </div>
               <div class="whhats-new-slider">
                  <div id="whtnew" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item">
                           <a href="#">Amendment to Rule-8 of RCT(Procedure) Rules 1989 regarding places for filing claim application</a>
                        </div>
                        <div class="carousel-item active">
                           <a href="#">Rules 1989 regarding places for filing claim application</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="archiev-btn">
                  <a href="" class="btn readmore">View All</a>
               </div>
            </div>
         </div>
      </div>
   </>
  )
}

export default WhatsNew
