import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WhiteLogo from "../../assets/WhiteLogo";
import { gap } from "../../styles/mixins";

const FooterElement = styled.footer`
  width: 100%;
  height: 234px;
  padding: 68px 0 52px;
  background: var(--color-black);
  z-index: 20;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  ${gap("40px")}
`;
const Line = styled.hr`
  width: 100%;
  min-height: 1px;
  background: var(--color-white);
  opacity: 0.4;
`;
const License = styled.div`
  color: var(--color-white);
  font-size: 11px;
`;

function Footer () {
  return(
    <FooterElement>
      <Container className="container">
        <NavLink to="/">
          <WhiteLogo/>
        </NavLink>
        <Line/>
        <License>© 2017 Uber Technologies Inc.</License>
      </Container>
    </FooterElement>
  );
}

export default Footer;