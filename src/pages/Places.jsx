import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/UI/Loader";
import { getPlaces } from "../scripts/requests";
import { gap } from "../styles/mixins";

const PlacesElement = styled.main`
  margin: 90px auto;
  @media screen and (max-width: 580px){
    &{
      margin: 40px auto;
    }
  }
`;
const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${gap("49px", "16px")}
  @media screen and (max-width: 720px){
    &{
      grid-template-columns: 1fr;
      ${gap("16px")}
    }
  }
`;

function Places () {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPlaces().then(data => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, []);

  return(
    <PlacesElement className="container">
      {isLoading ? <Loader/> : null}
      <List style={Array.isArray(places) ? null : {gridTemplateColumns: "1fr"}}>
        {places}
      </List>
    </PlacesElement>
  );
}

export default Places;