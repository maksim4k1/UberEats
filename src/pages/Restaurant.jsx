import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import RestaurantDishes from "../components/RestaurantDishes";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenu from "../components/ResturantMenu";
import Loader from "../components/UI/Loader";
import { getDishes, getRestaurant } from "../requests";

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
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState(["Все блюда"]);
  const [dish, setDish] = useState(menu[0]);
  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getRestaurant(id).then(data => {
      setRestaurant(data);
      return data;
    }).then(data => {
      getDishes(id, data.currency).then(data => {
        const [dishes, menu] = data;
        setDishes(dishes);
        setMenu(menu);
        setDish(menu[0]);
        setIsLoading(false);
      });
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
        <RestaurantMenu menu={menu} setDish={setDish} dish={dish}/>
        <RestaurantDishes dishes={dishes} dish={dish}/>
      </>
      }
    </RestaurantElement>
  );
}

export default Restaurant;