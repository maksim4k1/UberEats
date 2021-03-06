import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";

const RestaurantInfoSection = styled.section`
  width: 100%;
  padding: 80px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 480px){
    &{
      height: 255px;
      padding: 0;
    }
  }
`;
const Content = styled.div`
  display: inline-block;
  padding: 38px;
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: 0px 0px 16px var(--color-card-border);
  @media screen and (max-width: 480px){
    &{
      width: 100%;
      padding: 23px 0;
      text-align: center;
      margin: 131px 0 0 0;
    }
  }
`;
const Name = styled.h1`
  font-size: 36px;
  margin: 0 0 54px 0;
  @media screen and (max-width: 480px){
    &{
      font-size: 24px;
      margin: 0 0 40px 0;
    }
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${gap("40px")}
  @media screen and (max-width: 480px){
    &{
      display: block;
    }
  }
`;
const Price = styled.div`
  color: var(--color-text-grey);
  font-size: 14px;
  @media screen and (max-width: 480px){
    &{
      margin: 0 0 16px 0;
    }
  }
`;
const Button = styled.button`
  padding: 8px 16px;
  color: var(--color-white);
  font-size: 13px;
  background: var(--color-black);
  border-radius: 100px;
  transition: background 0.3s;
  &:hover{
    background: var(--color-green);
  }
`;

function RestaurantInfo ({restaurant}) {
  const {name, cuisine, currency, img} = restaurant;

  return(
    <RestaurantInfoSection style={{backgroundImage: `url(${img})`}}>
      <div className="container">
        <Content>
          <Name>{name}</Name>
          <Info>
            <Price>{currency} • {cuisine}</Price>
            <Button type="button">40 - 50 Min</Button>
          </Info>
        </Content>
      </div>
    </RestaurantInfoSection>
  );
}

export default RestaurantInfo;