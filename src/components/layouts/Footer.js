import React from "react";
import styled from 'styled-components';
import facebooklogo from '../../facebook.png';

const Footer = () => {
    return (
        <FooterContainer>
            <p style={{color: "#fff", top: "10px", left: "10px", position: "relative"}}>
                Kênh truyền thông khoa Công Nghệ Thông Tin, trường Đại học Bách Khoa - Đại học Đà Nẵng.
            </p>
            <span style={{left: "10px", position: "relative"}}>
                <a href="https://www.facebook.com/itmediadut" target="_blank">
                    <img style={{width: '40px'}} src={facebooklogo} alt="logo facebook"/>
                </a>
            </span>
        </FooterContainer>
    )
}


export default Footer

//footer container
const FooterContainer = styled.footer`
    background: var(--dark-green);
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;
