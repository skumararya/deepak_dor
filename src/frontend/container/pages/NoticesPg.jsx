import React,{useState} from 'react'
import BreadCrum from '../component/BreadCrum'

const NoticesPg = () => {

    const [content, setContent] = useState(''); 
    let  handleclick = ()=> { 
     setContent('content from breadcrumb page') ; 
   }

  return (
    <>
        <BreadCrum pgtitle="Notices" handleclickprop={handleclick} ></BreadCrum>
        <div class="main-contnt-area">
        <div class="container">
            <div class="row">
            {/* <div class="col-12 col-12 col-md-12 col-lg-3 rightSidebar wow fadeInUp">
                    <div class="inner-right-menu">
                        <ul class="ryt-menu">
                            <li>
                                <a href="about-pg.html">About RCT</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Our Objective</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Vision and Mission</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Organizational Structure</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Board Members</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">About Chairperson</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">About Secretary</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Former TDB Secretaries</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">TDB Directory</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">TDB Success Stories</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Acts and Rules</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="main-content-inner">
        <div class="inner-title">
        <div style={{color:"#000"}}>{content}</div>
                            <h4 class="httxt blue-ln-ht">Table <span class="yellow-txt"> Heading</span></h4>
                        </div>
                        <div class="inner-title-des">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Name / Designation</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Shri Rajesh Kumar Pathak, Secretary</td>
                                            <td><a href="javascript:void(0)" class="custm-anc">secretary@tdb.gov.in</a></td>
                                            <td>011-26511187</td>
                                        </tr>
                                        <tr>
                                            <td>Shri Rajesh Kumar Pathak, Secretary</td>
                                            <td><a href="javascript:void(0)" class="custm-anc">secretary@tdb.gov.in</a></td>

                                            <td>011-26511187</td>
                                        </tr>
                                        <tr>
                                            <td>Shri Rajesh Kumar Pathak, Secretary</td>
                                            <td><a href="javascript:void(0)" class="custm-anc">secretary@tdb.gov.in</a></td>

                                            <td>011-26511187</td>
                                        </tr>
                                        <tr>
                                            <td>Shri Rajesh Kumar Pathak, Secretary</td>
                                            <td><a href="javascript:void(0)" class="custm-anc">secretary@tdb.gov.in</a></td>

                                            <td>011-26511187</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div></div></div></div>
    </>
  )
}

export default NoticesPg
