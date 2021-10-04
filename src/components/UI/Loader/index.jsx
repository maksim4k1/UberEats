import React from "react";
import styled from "styled-components";

const LoaderElement = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

function Loader () {
  return(
    <LoaderElement>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </LoaderElement>
  );
}

export default Loader;