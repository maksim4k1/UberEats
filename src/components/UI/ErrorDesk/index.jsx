import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Desk = styled.p`
  font-size: 18px;
`;
const Link = styled.span`
  color: var(--color-green);
  margin: 0 0 0 5px;
  font-weight: 500;
  text-decoration: underline;
  &:hover{
    text-decoration: none;
  }
`;

function ErrorDesk ({children}) {
  return(
    <Desk>{children}<Link><NavLink to="/" style={{color: "inherit"}}>Main page</NavLink></Link></Desk>
  )
}
export default ErrorDesk;