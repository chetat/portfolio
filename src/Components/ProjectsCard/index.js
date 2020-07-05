import React from 'react';


const ProjectsCard = (props) => {
    const { title, image, description, hashTags } = props.project;
    console.log(props)
        return (
            <div className="card">
                <img src={image} alt="Projects description" />
                <h2>{hashTags}</h2>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
}

export default ProjectsCard;