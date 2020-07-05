import React from 'react';


const BlogsCard = (props) => {
    const {excerp, title, image } = props.blog;
    return (
        <div className="card">
            <img src={image} alt="Projects description" />
            <h2>{title}</h2>
            <p>{excerp}</p>
        </div>
    )
}

export default BlogsCard;