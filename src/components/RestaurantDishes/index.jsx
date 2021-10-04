import React, { useEffect, useState } from "react";
import Loader from "../UI/Loader";
import styled from "styled-components";
import { getDishes } from "../../requests";
import { useParams } from "react-router";

const Title = styled.h2`
  font-size: 22px;
  line-height: 34px;
  margin: 0 0 32px 0;
`;
const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 49px;
  grid-column-gap: 16px;
  padding-bottom: 80px;
`;

function RestaurantDishes () {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getDishes(id, "$").then(data => {
      setDishes(data);
      setIsLoading(false);
    });
  }, [id]);
  return(
    <section className="container">
      <Title>Закуски</Title>
      {isLoading ? <Loader/> : null}
      <List>
        {dishes}
      </List>
    </section>
  );
}

export default RestaurantDishes;