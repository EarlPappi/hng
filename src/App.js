import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import UploadCV from "./Pages/Profile/UploadCV";

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/generate" element={ <UploadCV/> }/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
