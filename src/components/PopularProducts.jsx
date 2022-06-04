import { ShoppingBasket } from "@material-ui/icons"
import { Link } from "react-router-dom"

import styled, { keyframes }  from "styled-components"
import { popularProducts } from "../data"
import Product from "./PopularSingleProduct"

import { mobile } from "../responsive";

const Scroll = keyframes`
  from {margin-left: 0%}
  to {margin-left: -90%}
`

const Wrapper = styled.div`
  position: relative;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease;
  z-index: 3;
  padding: 15px 30px;
  background-color: white;
  color: black;
  font-size: 24px;
  pointer-events: none;
  ${mobile({opacity: "1", width: "180px", boxShadow: "2px 2px 5px 2px grey"})}
`

const Container = styled.div`
  padding: 20px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  animation: ${Scroll} 80s infinite linear;
  transition: all 1s ease;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
    filter: brightness(80%);
  }

  &:hover + ${Button} {
    opacity: 1;
  }
  ${mobile({animationDuration: "20s"})}
`


const PopularProducts = () => {
  return (
    <Link to="/shop">
      <Wrapper>
        <Container>
          {popularProducts.map(item => (
              //React usa unique keys para distinguir los diferentes objetos.
              <Product item={item} key={item.id} />
          ))}
        </Container>
        <Button>
          <ShoppingBasket />
          SHOP NOW
        </Button>
      </Wrapper>
    </Link>
  )
}

export default PopularProducts