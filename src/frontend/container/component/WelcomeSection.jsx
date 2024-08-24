import { Link } from 'react-router-dom'

const WelcomeSection = () => {

   return (
      <>
         <div class="about-bg">
            <div class="container">
               <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                     <div class="about-content">
                        <h6>Welcome to</h6>
                        <h2>Railway Claims Tribunal (RCT)</h2>
                        <div class="underline"></div>
                        <p>In 1890, an enactment known as the Indian Railway Act was legislated and passed by British Parliament. This piece of legislation was aimed at various matters concerning railways. After independence, it was felt that some changes be brought in the Act to fulfill needs of people in the present day. So maintaining some provisions of Act of 1890, rendering some provisions redundant and replacing new provisions, a new legislation named as The Railways Act, 1989 was enacted, which came into force from 1st July, 1990.</p>
                        <p>Broad features of this Act are that Railways were re-constituted in zones with a General Manager for each zone. Central Government had power to fix the rates of carriage of passengers and goods. Provision for compensation by Railways on account of loss, damage of goods etc. </p>
                        <Link to={"/aboutus"} class="btn readmore2 mt-2">Read More <span>
                           <i class="fas fa-long-arrow-alt-right"></i>
                        </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default WelcomeSection