import React from 'react';
import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #1f1f20;
`