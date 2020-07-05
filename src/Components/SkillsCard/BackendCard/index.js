import React from 'react';
import '../styles.css';
import {ReactComponent as Logo} from '../../../Media/img/flask.svg';


const BackendCard = () => {
    return (
        <div className="skills-card">
            <h2> Back-End &amp; Databases Skills </h2>
            <div className="skills-icon">
                <i className="devicon-django-plain-wordmark icon colored"></i>
                <i className="devicon-postgresql-plain-wordmark icon colored"></i>
                <i className="devicon-mongodb-plain-wordmark icon colored"></i>
                <i className="devicon-redis-plain-wordmark icon colored"></i>
                <Logo className="flask-icon"/>

            </div>

        </div>
    )
}

export default BackendCard;