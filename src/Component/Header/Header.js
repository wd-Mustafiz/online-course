import React from 'react';
import Udemy from '../../logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="d-flex py-4 px-5 bg-light header">
            <div className="logo d-flex align-items-center"> 
                <img src={Udemy} height="60px" alt=""/>
                <h3 className="font-italic">Udemy</h3>
            </div>
            <nav className="ml-auto d-flex align-items-center">
                <a href="#home">Home</a>
                <a href="#home">About</a>
                <a href="#course">Course</a>
                <a href="#cart">Cart</a>
                <a href="#course">Blog</a>
                <a href="#cart">Coutact</a>
            </nav>
        </div>
    );
};

export default Header;