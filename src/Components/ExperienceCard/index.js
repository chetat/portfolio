import React from 'react';


const ExperienceCard = (props) => {
    const { title, image, date, description } = props.experience;
    console.log(props)
    return (
        <div className="card">
            <img src={image} alt="Projects description" />
            <h2>{date}</h2>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ExperienceCard;