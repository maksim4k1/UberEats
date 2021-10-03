import React from "react";
import styled from "styled-components";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenu from "../components/ResturantMenu";

const RestaurantElement = styled.main`
  width: 100%;
`;

function Restaurant () {
  return(
    <RestaurantElement>
      <RestaurantInfo/>
      <RestaurantMenu/>
    </RestaurantElement>
  );
}

export default Restaurant;