import { Layout } from "antd";
import { Button } from "antd";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import NavMenu from "../../components/Nav";
import Project from "../../components/Project";
import portfolio from '../../assets/images/portfolio.png';
import portfolio2 from '../../assets/images/portfolio2.png'


import './styles.scss'

const { Content } = Layout;

const projects = [
    {
        id: 1,
        name: "UI Portfolio",
        image: portfolio,
        description: 'This is a desctip'
    },
    {
        id: 1,
        name: "UI Portfolio",
        image: portfolio2,
        description: 'This is a desctip'
    },
]

const Home = () => {

    return (
        <div className="container">
            <Layout>
                <NavMenu />
                <Content className="">
                    <Hero />
                    <Intro />
                    <div className="">
                        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className="section-title">Recent Projects</h1>
                            <div>
                                <Button className="cta-btn"> <span>View More</span></Button>
                            </div>
                        </div>
                        <div className="projects-list">
                            {projects.map((project) => <Project {...project} />)}
                        </div>
                    </div>
                    
                </Content>
            </Layout>
        </div>
    )
}

export default Home;