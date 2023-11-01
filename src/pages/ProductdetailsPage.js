import NavBar from "../features/Navbar/Navbar";
import ProductDetail from "../features/products/components/productDetails";
import Footer from "../features/common/Footer";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;