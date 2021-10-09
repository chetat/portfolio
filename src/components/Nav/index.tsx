import { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";

import './styles.scss'

const { Header } = Layout;


const NavMenu = () => {
    const [menuMode, setMenuMode] = useState('horizontal');
    const menu = (
        <Menu className="menu" mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="projects">Projects</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
    )
    return (
        <Header className="header">
            <Row>
                <Col xl={15} lg={8} md={8} sm={24} xs={24}>
                    <div className="logo">Arlene Rey</div>
                </Col>
                <Col xl={9} lg={16} md={16} sm={0} xs={0}>
                    <div className="header-meta">
                        {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
                    </div>
                </Col>
            </Row>
        </Header>
    )
}

export default NavMenu;