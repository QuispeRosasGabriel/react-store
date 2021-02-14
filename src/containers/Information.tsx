import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { IProduct } from '../global/intefaces/IProduct';
import '../styles/components/Information.css';

const Information = () => {

    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef<any>(null);

    const { cart }: any = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'dpto': formData.get('dpto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone')
        }

        addToBuyer(buyer);
    }

    return (
        <div className="information">
            <div className="informatio-content">
                <div className="information-head">
                    Información de contacto
                    </div>
                <div className="information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo..." name="name" />
                        <input type="text" placeholder="Correo electrónico" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Departamento" name="dpto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="País" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Código postal" name="cp" />
                        <input type="text" placeholder="Teléfono" name="phone" />
                    </form>
                </div>
                <div className="information-buttons">
                    <div className="information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                        <div className="information-next">
                            <button type="button" onClick={handleSubmit}>
                                Pagar
                            </button>
                        </div>
                </div>
            </div>
            <div className="information-sidebar">
                <h3>Pedido:</h3>
                {cart?.map((item: IProduct, idx: number) => (
                    <div className="information-item" key={idx * Math.random() + Date.now().toString()}>
                        <div className="information-element">
                            <h4>{item.title}</h4>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Information;
