import { Col, Row, Layout } from "antd";

const  { Content } = Layout;
const Hero = () => {
    return (
        <div className="hero-section">
            <Row>   
                <Col>
                    <span>Hey!</span>
                    <h2>
                        I'm Arien Rey.<br />
                        an UI/UX Designer.
                    </h2>
                </Col>
                <Col></Col>
            </Row>
        </div>
            
    )
}
export default Hero;