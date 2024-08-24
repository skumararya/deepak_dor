import { Route, Routes } from "react-router-dom";
import Layout from "./frontend/Layout";

function App() {
  return (
   <>
          {/* <Layout /> */}    
		  {/*this is my firsy commit */} 

      <Routes>
        <Route path="/*" element={<Layout/>}>
        </Route>
      </Routes>
   </>
  );
}

export default App;
