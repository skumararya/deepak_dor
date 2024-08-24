import React from 'react'
import { useState } from "react"


const BreadCrum = ({pgtitle ,handleclickprop}) => {
    

    // const [content, setContent] = useState(""); 
    //    let  handleclick = ()=> { 
    //       setContent('Deepak change value') ;
    //     }
  // setContent("Deepak change value")
  return (
    <>
         <div class="breadcrum-area">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li class="breadcrumb-item active" aria-current="page">{pgtitle}</li>
                        </ol>
                        {/* <button onClick={handleclickprop}  >click Here</button> */}
                       
                      </nav>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BreadCrum
