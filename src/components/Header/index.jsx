import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/Logo";
import { gap } from "../../styles/mixins";

const HeaderElement = styled.header`
  width: 100%;
  height: 72px;
  background: var(--color-white);
  box-shadow: var(--main-box-shadow);
  z-index: 20;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  ${gap("16px")}
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 2px;
  transition: color 0.3s, background 0.3s, border-color 0.3s;
  &:hover{
    color: var(--color-white);
    background: var(--color-green);
    border-color: var(--color-green);
  }
`;
const SigninButton = styled(Button)`
  background: var(--color-white);
  border: 1px solid var(--color-btn-border);
`;
const RegisterButton = styled(Button)`
  color: var(--color-white);
  background: var(--color-black);
`;

function Header () {
  return(
    <HeaderElement>
      <Container className="container">
        <NavLink to="/"><Logo/></NavLink>
        <Buttons>
          <SigninButton>Sign In</SigninButton>
          <RegisterButton>Register</RegisterButton>
        </Buttons>
      </Container>
    </HeaderElement>
  );
}

export default Header;