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

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Routes, Route } from "react-router-dom";

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductdetailsPage from './pages/ProductdetailsPage';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <div className="App bg-slate-300">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignupPage/> } />
        <Route path="/cart" element={
          <Protected><CartPage/> </Protected> 
           } />
        <Route path="/checkout" element={ <Protected>
        <Checkout/> 
        </Protected>
        } />
        <Route path="/product-details/:id" element={ <ProductdetailsPage/> } />
      </Routes>
      
   {/* <Home/> */}
   {/* <LoginPage/> */}
   {/* <SignupPage/> */}
   
    </div>
  );
}

export default App;
