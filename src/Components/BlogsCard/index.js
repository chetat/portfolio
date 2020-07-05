import React from 'react';
import './styles.css';

const BlogsCard = (props) => {
    const {excerp, title, image } = props.blog;
    return (
        <div id="blog-card">
            <img src={image} alt="Projects description" />
            <h2>{title}</h2>
            <p>{excerp}</p>
        </div>
    );
}

export default BlogsCard;