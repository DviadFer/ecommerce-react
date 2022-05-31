import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./PopularSingleProduct"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PopularProducts = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            //React usa unique keys para distinguir los diferentes objetos.
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default PopularProducts