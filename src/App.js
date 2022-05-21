import logo from './logo.svg';
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
