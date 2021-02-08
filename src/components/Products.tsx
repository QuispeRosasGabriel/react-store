import React from 'react'
import Product from './Product'
import {IProduct} from '../global/intefaces/IProduct';
import '../styles/components/Products.css';

const Products: React.FunctionComponent<{products: Array<IProduct>}>  = ({products}) => {
    return (
            <div className="products">
                <div className="products-items">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
    )
}

export default Products
