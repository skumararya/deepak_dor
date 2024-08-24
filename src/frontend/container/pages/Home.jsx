import MainBanner from "../component/MainBanner";
import MediaSection from "../component/MediaSection";
import WelcomeSection from "../component/WelcomeSection";
import WhatsNew from "../component/WhatsNew";

const Home = () =>{

    return(
        <>
        <MainBanner/>
        <WhatsNew/>
       <WelcomeSection/>
       <MediaSection/>

        </>
    )
}

export default Home;