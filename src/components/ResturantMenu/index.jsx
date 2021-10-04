import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";

const Menu = styled.menu`
  height: 80px;
  margin: 0 0 56px 0;
  border-bottom: 1px solid var(--color-card-border);
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-card-border);
    border-radius: 10px;
  }
  @media screen and (max-width: 640px) {
    &{
      overflow: auto;
    }
  }
  @media screen and (max-width: 480px) {
    &{
      display: none;
    }
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  ${gap("40px")}
  align-items: center;
`;
const Button = styled.button`
  line-height: 18px;
  white-space: nowrap;
  transition: color 0.3s;
  &:hover{
    color: var(--color-green);
  }
`;

function RestaurantMenu () {
  return(
    <Menu>
      <Container className="container">
        <Button className="active">Закуски</Button>
        <Button>Салаты</Button>
        <Button>Супы</Button>
        <Button>Горячие блюда</Button>
        <Button>Гарниры</Button>
        <Button>Десерты</Button>
      </Container>
    </Menu>
  );
}

export default RestaurantMenu;