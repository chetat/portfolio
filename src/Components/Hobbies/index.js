import React from 'react';
import image2 from '../../Media/img/h12.jpg';
import udacity from '../../Media/img/udacity.png';


import './styles.css';


const Hobbies = () => {
    return (
        <div id="hobbies-card">
            <h1>Hobbies/Certificates</h1>
            <img src={image2} alt="Yeku Wilfred" />
            <h3 className="card-item-title">Reading</h3>
            <p>I Like Playing video games such PES20, Grand Theft Auto, God Of War</p>
            <div className="divider"></div>
            <img src={udacity} alt="Udacity Nanodegree" />
            <h3 className="card-item-title">Udacity Full Stack Nanodegree</h3>

            <p>Full Stack Nanodegree obtain from Udacity after 4 months studies and completion of real world projects.</p>
        </div>
    )
}

export default Hobbies;