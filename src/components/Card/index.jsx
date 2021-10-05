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
  transition: background 0.3s;
  &:hover{
    background: var(--color-white-hover);
  }
  &:hover div > p{
    opacity: 1;
  }
  @media screen and (max-width: 480px){
    &{
      height: 102px;
      border: none;
      border-bottom: 1px solid var(--color-card-border);
      border-radius: 0;
      &:hover{
        background: var(--color-white);
      }
    }
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
  @media screen and (max-width: 480px){
    &{
      padding: 0 0 16px 0;
    }
  }
`;
const Name = styled.h3`
  width: 100%;
  font-size: 16px;
  @media screen and (max-width: 480px){
    &{
      font-size: 14px;
    }
  }
`;
const Body = styled.p`
  width: 100%;
  color: var(--color-text-grey);
  font-size: 13px;
  line-height: 21px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0;
  transition: opacity 0.3s;
  @media screen and (max-width: 480px){
    &{
      -webkit-line-clamp: 2;
    }
  }
`;
const Info = styled.h5`
  margin: auto 0 0;
  font-size: 15px;
  font-weight: 500;
`;
const Image = styled.img`
  min-width: 170px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: 480px){
    &{
      min-width: 102px;
      max-width: 102px;
    }
  }
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