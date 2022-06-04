import { SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const animatePop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`

const Wrapper = styled.div`
    animation-duration: 0.5s;
    animation-name: ${animatePop};
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
    transition: all 0.5s ease;
    &:hover {
        box-shadow: 2px 2px 2px 2px lightgrey;
    }
    &:hover ${Info}{
        opacity: 1;
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    z-index: 2;
`

const Tag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 15px;
`

const Title = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
`

const Price = styled.p`
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 2px;
`

const Icon = styled(Link)`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
color: black;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const ProductCard = ({ product }) => {
    return (
        <Wrapper>
            <Container>
                <Image src={product.image.url} />
                <Info>
                    <Icon to={`/single-product/${product.id}`}>
                        <SearchOutlined />
                    </Icon>
                    <Icon to="/not-found">
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
            <Tag>
                <Title to={`/single-product/${product.id}`}>{product.name}</Title>
                <Price>{product.price.raw} €</Price>
            </Tag>
        </Wrapper>
    )
}

export default ProductCard