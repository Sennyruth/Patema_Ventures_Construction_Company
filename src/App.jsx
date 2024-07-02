import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      </Routes>
    
    <Footer/>
    
    </BrowserRouter>
   
    </>
  )
}

export default App
