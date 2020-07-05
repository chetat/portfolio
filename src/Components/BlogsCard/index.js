import React from 'react';
import './styles.css';

const BlogsCard = (props) => {
    const { title, excerp, image, url } = props.article;
    return (
        <div id="blog-card">
            <img src={image} alt="Projects description" />
            <div className="blog-content">
                <h2>{title}<br /></h2>
                <p>{excerp}</p>
            </div>
            <div className="btn-section">
                <a href={url} className="read-btn">Read more...</a>
            </div>
        </div>
    );
}

export default BlogsCard;