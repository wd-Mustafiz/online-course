import React from 'react';
import './Course.css'
const Course = (props) => {
    
    
    return (
        <div className="course">
            <img src={props.courseDetails.img} alt=""/>
            <div className="details m-4">
                <p className="font-weight-bold">Course Name : <span className="title">{props.courseDetails.name}</span></p>
                <p className="font-weight-bold">Price : {props.courseDetails.price}</p>
                <button className="btn btn-info" onClick={()=>props.addCart(props.courseDetails)}>Enroll now</button>
            </div>
        </div>
    );
};

export default Course;