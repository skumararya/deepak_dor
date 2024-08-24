import React,{useState, useEffect} from 'react'
import BreadCrum from '../component/BreadCrum'
import axios from 'axios' 

const AboutPg = () => {

//   // get api code

// const [pdata,setPdata] = useState()
// const fetchData = async () => {
//     try {
//       const response =  await axios.get('https://jsonplaceholder.typicode.com/posts');
     
//       setPdata(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
// };

// useEffect(() => {
//     fetchData(); 
//   }, []);

//   console.log(pdata)

 
// post api start
const formData ={
    description: "New Slider 3 description",
    file: "my image url",
    title: "New Slider 3"
}
const postData = async () => {
    try {
      await axios.post('http://localhost:8080/api/slider/addslider', formData);
     
    //   setPdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};



  return (
    <>
   <BreadCrum pgtitle="About Us"></BreadCrum>
   <div class="main-contnt-area">
        <div class="container">
            <div class="row">
                
           

                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="main-content-inner">
                        <div class="inner-title">
                            <h4 class="httxt blue-ln-ht">About <span class="yellow-txt"> Railway Claims Tribunal </span></h4>
                        </div>
                       

            <ul class="inner-title-des">

            <button onClick={postData}>click here for post data</button>
                {/* {
                 pdata && pdata.map((item,index)=>(
                    <div class="card" >
            <div class="card-body">
                <h5 class="card-title">{item.userId}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.title}</h6>
                <p class="card-text">{item.body}</p>
                
            </div>
            </div>
                    ))
                } */}
                </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPg
