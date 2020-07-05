import React from 'react';
import image from '../../Media/pic.png'
import './styles.css';


const AboutCard = () => {
    return (
        <div id="about-card">
            <img src={image} alt="Yeku Wilfred" />
            <h3 className="card-item-title">Yeku Wilfred Chetat</h3>
            <h4>Full Stack Developer</h4>
            <p><span></span>yekuwilfred@gmail.com</p>
            <p><span></span> +237671357962 </p>

            <p>I am a Freelance Full Stack Developer based in Douala,
                 Cameroon. I am passionate about Software Engineering,
                  and I love building randoms stuff. I work on my skills every day in other to acquire more knowledge and keep myself updated in the fast-growing tech industry.</p>
        </div>
    )
}

export default AboutCard;