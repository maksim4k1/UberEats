import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
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
  const places = [{"id":"4g4joeu70","name":"Трактир \"Пушкин\"","cuisine":"Европейская","currency":"₽","img":"https://images.unsplash.com/photo-1554998171-89445e31c52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1710&q=80"},{"id":"41111kkd71","name":"Fit slim","cuisine":"Здоровое питание","currency":"сом","img":"https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1790&q=80"},{"id":"21hyGGDet2","name":"Сamomile coffee","cuisine":"Итальянская, французская","currency":"сом","img":"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"id":"JDruhj47hf","name":"Сamomile coffee","cuisine":"Eвропейская, средне-азиатская","currency":"сом","img":"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}];

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