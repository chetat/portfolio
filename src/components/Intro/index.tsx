import { Row, Col } from 'antd';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import introImage from '../../assets/images/intro-image.png'
import './styles.scss'
const Intro = () => {
    return (
        <div className="intro">
            <Row>
                <Col xl={10} className="intro-img">
                    <img src={introImage} alt="" />
                </Col>
                <Col xl={14} className="intro-description">
                    <Row className="intro-rating">
                        <Col xl={12} style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '4.5rem', fontWeight: 600, lineHeight: '62px', marginBottom: '0' }}>120+</span>
                            <span style={{ fontSize: '1.5rem', color: '#828282', fontWeight: 400, lineHeight: '36px' }}> Completed projects </span>
                        </Col>
                        <Col xl={12} style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '62px', marginBottom: '0' }}>
                                A+ {[1, 2, 3, 4, 5].map((item) => {
                                    return item == 5 ? <BsStarHalf style={{ fontSize: '2rem', color: '#F5BF75' }} /> : <BsStarFill style={{ color: '#F5BF75', fontSize: '2rem' }} />;
                                })}
                            </span>
                            <span style={{ fontSize: '1.5rem', color: '#828282' }}> Positive Review’s </span>
                        </Col>
                    </Row>
                    <div className="description">
                        <h1>Glad to Help You!</h1>
                        <p>
                            As a full-service digital designer, I work closely with my clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Intro;