import React from 'react';
import fakeData from '../../fakeData/fakeData'
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Main = () => {
    
    const[course , setCourse] = useState(fakeData);
    const [cart , setCart] = useState([]);

    const addCourse = (item) => {
        console.log('cart' , item);
        
        const newCart = [...cart , item];
        setCart(newCart);
    } 
    //console.log("price",cart.price);
    return (
        <div className="container">
            <h3 style={{color: 'black'}}>Our Top Courses</h3>
            <div className="row">
                <div className="col-md-10 d-flex flex-wrap">
                    
                    {
                        course.map(c => <Course courseDetails={c} addCart={addCourse}></Course>)
                    }
                </div>
                <div className="col-md-2">
                    <Cart enrolled={cart}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Main;