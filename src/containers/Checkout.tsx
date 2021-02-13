import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import { IProduct } from '../global/intefaces/IProduct';

const Checkout = () => {

    const { state, removeFromCart } = useContext(AppContext);
    const { cart }: any = state;

    const handleRemove = (product: any) => removeFromCart(product);

    const handleSumTotal = () => {
        const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className="checkout">
            <div className="checkout-content">
                <h3>{cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos'}</h3>
                {cart.map((item: IProduct, idx: number ) => (
                    <div className="checkout-item" key={idx * Math.random() + Date.now().toString()}>
                        <div className="checkout-element">
                            <h4>{item?.title}</h4>
                            <span>{item?.price}</span>
                        </div>
                        <button type="button" onClick={() => handleRemove(item)}>
                            <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                        </button>
                    </div>
                ))}
            </div>
            {
                cart.length > 0 && (
                    <div className="checkout-sidebar">
                        <h3>{`Precio total: ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar pedido</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout;
