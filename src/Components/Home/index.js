import React, { useState, useEffect } from 'react';
import AboutCard from '../AboutCard';
import ExperienceCard from '../ExperienceCard';
import BlogsCard from '../BlogsCard';
import ProjectsCard from '../ProjectsCard';
import FrontEnd from '../SkillsCard/FrontendCard';
import Backend from '../SkillsCard/BackendCard';
import Sectiontitle from '../SectionTitleCard';
import image1 from '../../Media/img/0.jpg';
import image2 from '../../Media/img/1.jpg';
import image3 from '../../Media/img/2.jpg';

import './styles.css';
import DevOps from '../SkillsCard/DevOps';

const articles = [
    {
        title: "How to setup",
        excerp: "I am working on this article. It will be available Soon. Thanks for Checking",
        image: image1
    },
    {
        title: "How to setup",
        excerp: "I am working on this article. It will be available Soon. Thanks for Checking",
        image: image2
    },
    {
        title: "How to setup",
        excerp: "I am working on this article. It will be available Soon. Thanks for Checking",
        image: image3,
        url: "/#"
    },
    {
        title: "How to setup",
        excerp: "I am working on this article. It will be available Soon. Thanks for Checking",
        image: image1,
        url: "/#"
    }
]


const portfolio = [
    {
        hashTags: "#Python #Flask #ReactJS",
        title: "Eveno",
        description: "Eveno is an event booking app the helps users organize events in different\
         location around the world. Users can View or get registered to an event in a choosen location\
       In this project I used Flask, SqlAlchemy and PostgreSQL to build the backend and REST APIs. For the Frontend,\
       I used ReactJs, React-Redux, and axios to consume API from the backend.",
       url: "http://eveno.yekuwilfred.com/",
       image: image1,
       category: ["all","reactjs", "python","flask"]
    },
    {
        hashTags: "#Python #Flask #ReactJS",
        title: "Fyyur",
        description: "Eveno is an event booking app the helps users organize events in different\
         location around the world. Users can View or get registered to an event in a choosen location\
       In this project I used Flask, SqlAlchemy and PostgreSQL to build the backend and REST APIs. For the Frontend,\
       I used ReactJs, React-Redux, and axios to consume API from the backend.",
       url: "http://eveno.yekuwilfred.com/",
       image: image2,
       category: ["all","reactjs", "django","python"]
    },
    {
        hashTags: "#Python #Flask #ReactJS",
        title: "Bookmarker",
        description: "Eveno is an event booking app the helps users organize events in different\
         location around the world. Users can View or get registered to an event in a choosen location\
       In this project I used Flask, SqlAlchemy and PostgreSQL to build the backend and REST APIs. For the Frontend,\
       I used ReactJs, React-Redux, and axios to consume API from the backend.",
       url: "http://eveno.yekuwilfred.com/",
       image: image1,
       category: ["all","javascript", "bootstrap"]
    }
]


const Home = () => {

    const [filter, setFilter] = useState('all');

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        setProjects(portfolio);
    }, [])
    
    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(
            project => ({
                ...project, filtered: project.category.includes(filter)
            })
        )
        setProjects(filtered);
    
    }, [filter])


    return (
        <div className="main">
            <section className="section-1">
                <AboutCard />
                <ExperienceCard />
            </section>
            <section className="section-2">
                <div className="skills-section">
                    <FrontEnd className="skill" />
                    <Backend className="skill" />
                    <DevOps className="skill" />
                </div>
                <div className="filter">
                    <h3>Projects ({projects.length})</h3>
                    <a href="/#" active={filter === 'all'} onClick={() => setFilter('all')}>All</a>
                    <a href="/#" active={filter === 'reactjs'} onClick={() => setFilter('reactjs')}>#ReactJs</a>
                    <a href="/#" active={filter === 'flask'} onClick={() => setFilter('flask')}>#Flask</a>
                    <a href="/#" active={filter === 'bootstrap'} onClick={() => setFilter('bootstrap')}>#Bootstrap</a>
                </div>
                <div className="project-section">
                    {projects && projects.length > 0 ? projects.map( item =>
                        item.filtered === true ? (
                            <ProjectsCard project={item} />
                        ): ''
                    ) : ''}
                    
                </div>
                <Sectiontitle title={`Blog Articles (${articles.length})`} />
                <div className="blog-section">
                    {articles && articles.length > 0 ? articles.map((article, index) => {
                        return <BlogsCard article={article} />

                    }) :
                        <h2>No Article Available Yet</h2>
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;