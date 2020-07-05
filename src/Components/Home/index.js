import React from 'react';
import AboutCard from '../AboutCard';
import ExperienceCard from '../ExperienceCard';
import BlogsCard from '../BlogsCard';
import ProjectsCard from '../ProjectsCard';
import FrontEnd from '../SkillsCard/FrontendCard';
import Backend from '../SkillsCard/BackendCard';
import Sectiontitle from '../SectionTitleCard';
import image1 from '../../Media/img/0.jpg'

import './styles.css';

const Home = () => {
    const project = {
        title: "Eveno",
        image: image1,
        description: "This is a sample description of project app. We do a simple description",
        hashTags: "#Python #Flask #SQLalchemy #PostgreSQL #ReactJS "
    }
    const experience = {
        role: "Full Stack Developer",
        image: image1,
        description: "This is a sample description of project app. We do a simple description",
        date: "05/06/2019"
    }
    const blog = {
        image: image1,
        title: "How to build Flask App",
        excerp: "This is a sample description of project app. We do a simple description,This is a sample description of project app. We do a simple description  "
    }
    return (
        <div className="main">
            <AboutCard />
            <Sectiontitle title="Projects"/>
            <ExperienceCard experience={experience} />
            <BlogsCard blog={blog} /> 
            <ProjectsCard project={project} />
            <FrontEnd />
            <Backend/>
        </div>
    )
}

export default Home;