import React from 'react';
import logo from './logo.svg';

import './App.css';
import ProductList from './features/products/components/ProductList';
import ProductDetails from './features/products/components/productDetails';
import Home from './pages/Home';
import Protected from './features/auth/component/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrders from './features/user/components/UserOrder';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/component/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/component/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Routes, Route,Link } from "react-router-dom";

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductdetailsPage from './pages/ProductdetailsPage';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user]);
  return (
    <div className="App bg-slate-300">
      <Routes>
        <Route path="/" element={ <Protected><Home/></Protected> } />
       

        <Route path="/admin" element={ <ProtectedAdmin><AdminHome/></ProtectedAdmin> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignupPage/> } />
        <Route path="/cart" element={
          <Protected><CartPage/> </Protected> 
           } />
        <Route path="/checkout" element={ <Protected>
        <Checkout/> 
        </Protected>
        } />
        
  
      

        <Route path='/admin/product-detail/:id' element={<ProtectedAdmin>
        <AdminProductDetailPage/>
      </ProtectedAdmin> } />
      <Route path='/product-details/:id'  element={ <Protected> <ProductdetailsPage/></Protected> } />
      <Route path='/admin/product-form'  element={ <Protected> <AdminProductFormPage/></Protected> } />
        <Route path='/admin/product-form/edit/:id' element={ <Protected><AdminProductFormPage/></Protected> } />
        <Route path='/admin/orders' element={ <Protected><AdminOrdersPage/></Protected> } />
        <Route path="/order-success/:id" element={ <OrderSuccessPage/> } />
        <Route path="/orders" element={<Protected> <UserOrdersPage/></Protected> } />
        <Route path="/profile" element={<Protected> <UserProfilePage/></Protected> } />
        <Route path="/logout" element={<Protected> <Logout/></Protected> } />
        <Route path="/forgot-password" element={<Protected> <ForgotPasswordPage/></Protected> } />
        <Route path="/*" element={ <PageNotFound/> } />
        
  
  
      </Routes>
      
   {/* <Home/> */}
   {/* <LoginPage/> */}
   {/* <SignupPage/> */}
   
    </div>
  );
}

export default App;
