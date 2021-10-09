import { Layout } from "antd";
import Hero from "../../components/Hero";
import NavMenu from "../../components/Nav";

import  './styles.scss'

const { Content } = Layout;

const Home = () => {

    return (
        <div className="container">
            <Layout>                
                <NavMenu />
                <Content className="">
                    <Hero />
                </Content>
            </Layout>
        </div>  
    )
}

export default Home;