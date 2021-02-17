import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IProduct } from '../global/intefaces/IProduct';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart }: any = state;

    return (
        <div className="payment">
            <div className="payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item: IProduct) => (
                    <div className="payment-item" key={item.title}>
                        <div className="payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="payment-button">Boton de pago con Paypal</div>
            </div>
            <div></div>
        </div>
    );
};

export default Payment;