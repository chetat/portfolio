import React from 'react';
import './styles.css'



const ExperienceCard = () => {

    return (
        <div id="exp-card">
            <h2>Experience</h2>
            <div className="card-content">
                <div className="work-description">
                    <p>June 2017 - Jan 2018</p>
                    <h3>Python Full Stack Freelacer @ Upwork</h3>
                     <p>I have helped a good number of companies around the world to improve their business by:</p>
                     <ul>
                         <li>Maintaining existing sites and projects</li>
                         <li>Fix any existing bug</li>
                         <li>Develop backend APIs</li>
                     </ul>
                    Profile Link: <b><a href="https://www.upwork.com/fl/yekuwilfred">Upwork</a> </b>
                </div>
                <hr className="divider" />
                <div className="work-description">
                    <p>January 2020 - April 2020</p>
                    <h3>Independent Consulting @ Udacity</h3>
                    <p>
                    As a consultant to educational platforms, such as Udacity, I utilize my specialized knowledge in 
                    the field of Full Stack Development
                    and my strong communication skills to provide project reviews and other student support services.
                    </p>
                </div>
                <hr className="divider" />
                <div className="work-description">
                    <p>March 2019 - February 2020</p>
                    <h3>Customer Support @ Intelcia Cameroon</h3>
                    <ul>
                        <li>Handled Inbound and outbound calls </li>
                        <li> Identified customers needs, and responded to various customers query </li>
                        <li> provided solutions/alternatives to internet or landline phone issues</li>
                    </ul>
                </div>
                <hr className="divider" />

                <div className="work-description">
                    <p>June 2017 - January 2018</p>
                    <h3>Web Developer Intern @ OC Selection Cameroun</h3>
                    <p>OC Selection is a company which is specialized in marketing and communication based in Cameroon and France.<br />
                        During my internship period, I Redesigned the company website to reflect the company's domain which helped
                        the company to gain more visibility of their products and services on the Internet.</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;