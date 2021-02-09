import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header-title">Store Merch</h1>
            </Link>
            <div className="header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket"></i>
                </Link>
            </div>
        </div>
    )
}

export default Header;
