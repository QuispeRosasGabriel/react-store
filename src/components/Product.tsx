import React from 'react'
import { IProduct } from '../global/intefaces/IProduct'

const Product: React.FunctionComponent<{ product: IProduct, handleAddToCart: any }> 
= ({ product, handleAddToCart }:any) => {
    return (
        <div className="products-item">
            <img src={product.image} alt={product.title} />
            <div className="product-item-info">
                <h2>{product.title}
                    <span>{product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button" onClick={()=>handleAddToCart(product)}>Comprar</button>
        </div>
    )
}

export default Product;
