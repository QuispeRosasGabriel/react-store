import React, {useContext} from 'react'
import Product from './Product'
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products: React.FunctionComponent<{}>  = () => {
    const {state, addToCart} = useContext(AppContext);
    const {products}: any = state;

    const handleAddToCart = (product: any) => addToCart(product);
    
    return (
            <div className="products">
                <div className="products-items">
                    {products.map((product: any) => (
                        <Product key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
    )
}

export default Products
