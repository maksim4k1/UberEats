import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { getPlaces } from "../requests";
import { gap } from "../styles/mixins";

const PlacesElement = styled.div`
  margin: 90px auto;
  @media screen and (max-width: 580px){
    &{
      margin: 40px auto;
    }
  }
`;
const List = styled.ul`
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

  useEffect(() => {
    getPlaces().then(data => setPlaces(data));
  }, []);

  return(
    <PlacesElement className="container">
      <List>
        {
          places.map(place => {
            return <Card key={place.id} name={place.name} body={place.cuisine} link={`/restaurant/${place.id}`} />
          })
        }
      </List>
    </PlacesElement>
  );
}

export default Places;