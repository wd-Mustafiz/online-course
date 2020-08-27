import React from 'react';

const Cart = (props) => {
    const cart = props.enrolled;
    console.log(props);
    const totalPrice = cart.reduce((total , item) => total + item.price , 0);
    //const totalPrice = props.enrolled.reduce((total , item) => total + item.price , 0);
    
    
    return (
        <div>
            <h5 className="bg-info text-white p-2">Total Enrol : {props.enrolled.length}</h5>
            <h5 className="bg-success text-white p-2">Total  : {totalPrice}</h5>
        </div>
    );
};

export default Cart;