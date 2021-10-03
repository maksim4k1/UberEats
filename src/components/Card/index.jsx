import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../styles/mixins";

const CardElement = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  background: var(--color-white);
  border: 1px solid var(--color-card-border);
  border-radius: 2px;
  &:hover{
    background: var(--color-white-hover);
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  ${gap("4px")}
`;
const Name = styled.h3`
  width: 100%;
  font-size: 16px;
`;
const Body = styled.p`
  width: 100%;
  color: var(--color-text-grey);
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Info = styled.h5`
  margin: auto 0 0;
  font-size: 16px;
  font-weight: 500;
`;
const Image = styled.img`
  width: 170px;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

function CardContent({name, body, info, image}){
  return(
    <CardElement>
      <Content>
        <Name>{name}</Name>
        <Body>{body}</Body>
        <Info>{info ? info : "30-40 мин"}</Info>
      </Content>
      {
        image
        ? <Image src={image} alt="name"/>
        : null
      }
    </CardElement>
  )
}

function Card (props) {
  return(
    <div>
      {
        props.link
        ? <NavLink to={props.link}>
            {CardContent(props)}
          </NavLink>
        : CardContent(props)
      }
    </div>
  );
}

export default Card;