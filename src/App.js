import './App.css';
import Footer from './Compoments/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Compoments/Home';

function App() {
  return (
    <div className="md:container md:mx-auto">
      

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='contact' element={ <Contact/> }/>
      </Routes>


      <Footer />
    </div>

  );
}

export default App;
