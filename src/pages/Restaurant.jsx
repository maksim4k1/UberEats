import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import RestaurantDishes from "../components/RestaurantDishes";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenu from "../components/ResturantMenu";
import Loader from "../components/UI/Loader";
import { getRestaurant } from "../requests";

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
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getRestaurant(id).then(data => {
      setRestaurant(data);
      setIsLoading(false);
    });
  }, [id]);

  return(
    <RestaurantElement>
      {isLoading
      ? <Loader/>
      : typeof(restaurant) === "string"
      ? <div className="container">{restaurant}</div>
      : <>
        <RestaurantInfo restaurant={restaurant}/>
        <RestaurantMenu/>
        <RestaurantDishes currency={restaurant.currency}/>
      </>
      }
    </RestaurantElement>
  );
}

export default Restaurant;