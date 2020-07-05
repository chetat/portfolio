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
import DevOps from '../SkillsCard/DevOps';

const Home = () => {
    const project = {
        title: "Eveno",
        image: image1,
        description: "This is a sample description of project app. We do a simple description",
        hashTags: "#Python #Flask #ReactJS "
    }
 
    const blog = {
        image: image1,
        title: "How to build Flask App",
        excerp: "This is a sample description of project app. We do a simple description,This is a sample description of project app. We do a simple description  "
    }
    return (
        <div className="main">
            <section className="section-1">
                <AboutCard />
                <ExperienceCard />
            </section>
            <section className="section-2">
                <div className="skills-section">
                        <FrontEnd />
                        <Backend />
                        <DevOps />
                </div>
                <Sectiontitle title="Projects" />
                <div>
                <ProjectsCard project={project} />
                </div>
                <Sectiontitle title="Blog Article" />
                <BlogsCard blog={blog} />
            </section>
        </div>
    )
}

export default Home;