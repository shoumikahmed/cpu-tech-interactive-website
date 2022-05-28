import './App.css';
import Navber from './Pages/Shared/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Home/Purchase';
import MyPortfolio from './Pages/Home/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Blogs from './Pages/Home/Blogs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path='addreview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
          <Route path='admin' element={<RequireAuth><MakeAdmin></MakeAdmin></RequireAuth>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
