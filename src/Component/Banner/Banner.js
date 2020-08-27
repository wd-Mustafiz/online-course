import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container banner">
            <div className="banner-box">
                <h1>Sale ends today</h1>
                <h3>Skills activated for as low as $9.99. Ends tonight.</h3>
                <div className="search d-flex" >
                    <input type="text" placeholder="search any thing" className="form-control w-75"/>
                    <button className="btn btn-success ml-1" >Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;