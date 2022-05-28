import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Assignment/Footer/Footer';
import Header from './Assignment/Home/Header';
import Home from './Assignment/Home/Home.js/Home';
import Purchase from './Assignment/Purchase/Purchase';
import Login from './Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Review/Review';
import BusinessSummary from './Assignment/BusinessSummary/BusinessSummary';
import AllProducts from './Assignment/AllProducts/AllProducts';
import Dashboard from './Assignment/Dashboard/Dashboard';
import UpdateItem from './Assignment/UpdateItem/UpdateItem';
import NotFound from './NotFound/NotFound';
import Blogs from './Assignment/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='businessSummary' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='updateItem' element={<UpdateItem></UpdateItem>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/AllProducts" element={<AllProducts></AllProducts>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
