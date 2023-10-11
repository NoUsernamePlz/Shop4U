import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/products/components/ProductList'

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList/>
      </Navbar>
     
    </div>
  )
}

export default Home
