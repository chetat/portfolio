import { Button, Col, Row } from "antd";
import { BsInstagram, BsYoutube, BsDribbble, BsDownload, BsMailbox } from 'react-icons/bs';
import  { MdOutlineMail } from 'react-icons/md';
import  { HiDownload } from 'react-icons/hi';
import { ReactComponent as Logo } from '../../assets/shapes/LineVector.svg';
import  { ReactComponent as Points } from '../../assets/shapes/BulletPoints.svg';
import  profilepic from '../../assets/images/Image.png';


import './styles.scss'

const Hero = () => {
    return (
        <div className="hero-section">
            <Row>   
                <Col xl={12} className="text-section">
                    <span style={{fontSize: '1.5rem', color: '#828282', fontWeight: 500 }}>Hey!</span>
                    <h3 className="intro-heading">
                        I'm <span> Arien Rey </span>.<br />
                        an UI/UX Designer.
                    </h3>
                    <Logo style={{marginLeft: '17%'}} />
                    <p className="intro-text">
                        UX Designer based in Jakarta, Indonesia.<br />
                        I am designing with a minimal and beautiful design<br /> in mind.
                    </p>
                    
                    <div className="social">
                        <span style={{fontSize: '1.25rem'}}>Follow Me</span>  <span><BsInstagram className="s-icon" /> <BsYoutube className="s-icon" /> <BsDribbble className="s-icon" /> </span>
                    </div>
                    
                    <div className="cta-btns">
                        <Button className="cta-btn"> <MdOutlineMail className="btn-icon" /> <span>Mail Me</span></Button>
                        <Button className="cta-btn"> <HiDownload className="btn-icon" /> <span>Download CV </span></Button>
                    </div>
                </Col>
                <Col xl={11} className="img-section">
                    <div className="circle"></div>
                    <div className="bullet-points">
                        <Points style={{fontSize: '5rem'}} />
                    </div>
                    <div className="hero-image">
                        <img src={profilepic} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Hero;