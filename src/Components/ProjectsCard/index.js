import React from 'react';
import './styles.css';
import image1 from '../../Media/img/0.jpg';

const ProjectsCard = (props) => {

    const { title, image, description, url, hashTags } = props.project

    return (
            <div id="project-card">
                <img src={image} alt="Projects description" />
                <div className="project-content">
                    <h2 className="hashTags">{hashTags}</h2>
                    <h2 className="project-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
    )
}

export default ProjectsCard;