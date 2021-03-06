import React, { useState, useEffect } from 'react';
import { Add, ArrowLeft, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { commerce } from '../lib/commerce';

import { mobile } from "../responsive";

const animatePop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  75% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100vh;
  margin: auto;
  animation-duration: 1s;
  animation-name: ${animatePop};
  animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`

const Image = styled.img`
  display: block;
  flex: 1;
  width: 100%;
  object-fit: contain;
  object-position: top;
  ${mobile({ width: "70%", margin: "auto" })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterSizeOption = styled.div`
  padding: 5px;
  border: ${
      props => props.active ?
          "2px solid black" :
          "1px solid gray"
  };
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: auto;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: teal;
      color: white;
  }
`

const Divider = styled.hr`
    margin: 25px 0;
    height: 1px;
    outline: none;
    border: none;
    background-color: #3E3E3E;
`

const Back = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: fit-content;
  text-decoration: none;
  font-size: 15px;
  color: black;

  &:hover {
      font-weight: bold;
  }
  ${mobile({ marginBottom: "25px" })}
`

const Product = ({  onAddToCart }) => {


  const [chosen, setChosen] = useState();
  //Fetch de producto por id 
  const [productById, setProductById] = useState({});

  const fetchProductById = async (id) => {
    const { name, description, image, price, variant_groups } = await commerce.products.retrieve(id)
    setProductById({
      id, 
      name,
      description,
      src: image.url,
      price: price.raw,
      variant_groups
    })
  }
  
  useEffect(() => {
    const id = window.location.pathname.split("/")
    fetchProductById(id[2]);
  }, []);

  //Actualizar el producto con la variante selecionada
  const updateOptions = ({ id, variantId }) => {
    setProductById({
      ...productById,
      options: { 
        [variantId]: id ,
      },
    })
  }

  //Contador para a??adir x cantidad de productos al carrito
  const [counter, setCounter] = useState(1)
 
  const handleClickAdd = () => {
    setCounter(counter + 1)
  }
  
  const handleClickRemove = () => {
    setCounter(counter - 1)
  }

  return (
    <Container>
      <Wrapper>
        <Image src={productById.src} />
        <InfoContainer>
          <Title>{productById.name}</Title>
          <Desc dangerouslySetInnerHTML={{ __html: productById.description}}/>
          <Price>{productById.price} ???</Price>
          {productById.variant_groups?.length ? (
            <FilterContainer>
              <Filter>
                <FilterTitle>{productById.variant_groups[0].name}</FilterTitle>
                {productById.variant_groups[0].options.map((option, index) => (
                  <FilterSizeOption active={index === chosen ? true : null} onClick={() => {
                    updateOptions(
                      {
                        id: option.id,
                        variantId: productById.variant_groups[0].id,
                      }
                    ); setChosen(index)}
                  } >{option.name}</FilterSizeOption>
                ))}
              </Filter>
            </FilterContainer>
          ): null}
          <AddContainer>
            <AmountContainer>
              <Remove onClick={handleClickRemove} />
              <Amount>{counter}</Amount>
              <Add onClick={handleClickAdd} />
            </AmountContainer>
            <Button onClick={() => onAddToCart(productById.id, counter, productById.options)}>
              ADD TO CART
            </Button>
          </AddContainer>
          <Divider />
          <Back to="/shop">
            <ArrowLeft />  
            BACK TO SHOP
          </Back>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product

