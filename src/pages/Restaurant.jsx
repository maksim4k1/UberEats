import React from "react";
import styled from "styled-components";
import RestaurantDishes from "../components/RestaurantDishes";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenu from "../components/ResturantMenu";

const RestaurantElement = styled.main`
  width: 100%;
  margin: 0 0 78px;
  @media screen and (max-width: 480px){
    &{
      margin: 0 0 40px;
    }
  }
`;

function Restaurant () {
  return(
    <RestaurantElement>
      <RestaurantInfo/>
      <RestaurantMenu/>
      <RestaurantDishes/>
    </RestaurantElement>
  );
}

export default Restaurant;