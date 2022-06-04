import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`

const Title = styled.h1`
  margin: 35px 20px 20px;
`

const Divider = styled.hr`
  margin: 25px 0;
  height: 1px;
  outline: none;
  border: none;
  background-color: #3E3E3E;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 35px;
`



const Shop = ({ products }) => {
  return (
    <Container>
      <Title>Shoping Products</Title>
      <Divider />
      <Wrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Shop;