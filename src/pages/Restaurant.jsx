import React from "react";
import styled from "styled-components";
import RestaurantInfo from "../components/RestaurantInfo";

const RestaurantElement = styled.main`
  width: 100%;
`;

function Restaurant () {
  return(
    <RestaurantElement>
      <RestaurantInfo/>
    </RestaurantElement>
  );
}

export default Restaurant;