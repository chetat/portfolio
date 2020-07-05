import React from 'react';
import './styles.css';

const ProjectsCard = (props) => {
    const { title, image, description, hashTags } = props.project;
    return (
        <div id="project-card">
            <img src={image} alt="Projects description" />
            <div className="project-content">
                <h4 className="hashTags">{hashTags}</h4>
                <h2 className="project-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard;