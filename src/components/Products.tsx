import React from 'react'
import Product from './Product'
import {IProduct} from '../global/intefaces/IProduct';

const Products: React.FunctionComponent<{products: Array<IProduct>}>  = ({products}) => {
    return (
            <div className="Products">
                <div className="Products-items">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
    )
}

export default Products
