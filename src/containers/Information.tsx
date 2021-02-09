import React from 'react'
import '../styles/components/Information.css';

const Information = () => {
    return (
        <div className="information">
            <div className="informatio-content">
                <div className="information-head">
                    Información de contacto
                    </div>
                <div className="information-form">
                    <form>
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
                        Regresar
                    </div>
                    <div className="information-next">
                        Pagar
                    </div>
                </div>
            </div>
            <div className="information-sidebar">
                <h3>Pedido:</h3>
                <div className="information-item">
                    <div className="information-element">
                        <h4>Item name</h4>
                        <span>10$</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;
