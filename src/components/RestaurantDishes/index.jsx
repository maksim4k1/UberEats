import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 22px;
  line-height: 34px;
  margin: 0 0 32px 0;
  @media screen and (max-width: 480px){
    & {
      position: relative;
      display: flex;
      justify-content: center;
      font-size: 22px;
      margin: 30px 0 56px 0;
    }
    &::after{
      content: "";
      position: absolute;
      bottom: -12px;
      left: calc(50% - 25px);
      width: 50px;
      height: 1px;
      background: #757575;
    }
  }
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 49px;
  grid-column-gap: 16px;
  @media screen and (max-width: 768px){
    &{
      grid-template-columns: 1fr;
      grid-row-gap: 32px;
      padding-bottom: 48px;
    }
  }
  @media screen and (max-width: 560px){
    &{
      grid-row-gap: 16px;
      padding-bottom: 40px;
    }
  }
`;

function RestaurantDishes ({dishes, dish}) {
  return(
    <section className="container">
      <Title>{dish}</Title>
      <List style={Array.isArray(dishes) ? null : {gridTemplateColumns: "1fr"}}>
        {
          Array.isArray(dishes)
          ? dishes.filter(el => el.props.category === dish)
          : dishes
        }
      </List>
    </section>
  );
}

export default RestaurantDishes;