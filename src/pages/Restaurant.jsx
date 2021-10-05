import React, { useEffect, useReducer } from "react";
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

function reducer(state, {type, payload}){
  switch(type){
    case "SET_RESTAURANT": {
      return {
        ...state,
        restaurant: payload
      };
    } case "SET_DISHES": {
      return {
        ...state,
        dishes: payload
      };
    } case "SET_LOADING": {
      return {
        ...state,
        isLoading: payload
      };
    } case "SET_MENU": {
      return {
        ...state,
        menu: payload
      };
    } case "SET_DISH": {
      return {
        ...state,
        dish: payload
      };
    } default: {
      return state
    }
  }
}

const initialState = {
  restaurant: {},
  dishes: [],
  isLoading: false,
  menu: ["Все блюда"],
  dish: "Все блюда",
}

function Restaurant () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {id} = useParams();

  useEffect(() => {
    dispatch({type: "SET_LOADING", payload: true});
    getRestaurant(id).then(data => {
      dispatch({type: "SET_RESTAURANT", payload: data});
      return data;
    }).then(data => {
      getDishes(id, data.currency).then(data => {
        const [dishes, menu] = data;
        dispatch({type: "SET_DISHES", payload: dishes});
        dispatch({type: "SET_MENU", payload: menu});
        dispatch({type: "SET_DISH", payload: menu[0]});
        dispatch({type: "SET_LOADING", payload: false});
      });
    });
  }, [id]);

  return(
    <RestaurantElement>
      {state.isLoading
      ? <Loader/>
      : typeof(state.restaurant) === "string"
      ? <div className="container">{state.restaurant}</div>
      : <>
        <RestaurantInfo restaurant={state.restaurant}/>
        <RestaurantMenu menu={state.menu} setDish={(value) => dispatch({type: "SET_DISH", payload: value})} dish={state.dish}/>
        <RestaurantDishes dishes={state.dishes} dish={state.dish}/>
      </>
      }
    </RestaurantElement>
  );
}

export default Restaurant;