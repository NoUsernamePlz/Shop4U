import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductDetails from '../features/products/components/productDetails'


const ProductdetailsPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails/>
      </Navbar>
     
    </div>
  )
}

export default ProductdetailsPage
