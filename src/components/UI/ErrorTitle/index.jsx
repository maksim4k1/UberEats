import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 48px;
  font-weight: 500;
`;

function ErrorTitle ({children}) {
  return(
    <Title>{children}</Title>
  );
}

export default ErrorTitle;