import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/' element={ <Home/> }/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
