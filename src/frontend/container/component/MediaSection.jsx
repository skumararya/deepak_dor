import React,{useState} from 'react'
import PhotoGallery from './PhotoGallery';
import MediaSecTab from './MediaSecTab';
import PublicationSec from './PublicationSec';
import EventsSec from './EventsSec';
import VideoGallery from './VideoGallery';

const MediaSection = () => {

const [activeTab, setActiveTab] = useState('events');

  return (
   <>



   <div class="media-section">
         <div class="container">
            <div class="row">
               <div class="col-12 col-sm-12 col-md-12 col-lg-4 media-bg">
                  <div class="media-heading">
                     <h6>In <span class="underline-in"></span></h6>
                     <h2 onClick={()=>setActiveTab('media')}>MEDIA</h2>
                  </div>
                  <ul class="parent">
                     {/* <li><a href="#">Press Release/Briefings</a></li>
                     <li><a href="#">FAQ</a></li> */}
                     <li><a href="javascript:void(0)" 
                     className={activeTab === 'publication' ? 'active' : ''}
                      onClick={()=>setActiveTab('publication')}>Publication</a></li>
                     <li><a href="javascript:void(0)" 
                      className={activeTab === 'events' ? 'active' : ''}
                     onClick={()=>setActiveTab('events')}>Events</a></li>
                     <li><a href="javascript:void(0)"
                      className={activeTab === 'photogallery' ? 'active' : ''}
                     onClick={()=>setActiveTab('photogallery')}>Photo Gallery</a></li>
                     <li><a href="javascript:void(0)"
                      className={activeTab === 'videogallery' ? 'active' : ''}
                     onClick={()=>setActiveTab('videogallery')}>Video Gallery</a></li>
                  </ul>
               </div>
               <div class="col-12 col-sm-12 col-md-12 col-lg-8 gallery">
                 {/* {activeTab === 'media' && <MediaSecTab/>}
                 {activeTab === 'publication' && <PublicationSec/>}
                 {activeTab === 'events' && <EventsSec/>}
                 {activeTab === 'photogallery' && <PhotoGallery/>}
                 {activeTab === 'videogallery' && <VideoGallery/>} */}

                 {activeTab==='media'?<MediaSecTab/>:activeTab==='publication'?<PublicationSec/>:activeTab==='events'?<EventsSec/>:activeTab==='photogallery'?<PhotoGallery/>:<VideoGallery/>}
               </div>
            </div>
         </div>
      </div>
   </>
  )
}

export default MediaSection
