import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    ${mobile({width: "100vw"})}
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    ${mobile({ height: "40vh"})}
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px;
`

const Button = styled(Link)`
    border: none;
    padding: 8px 18px;
    background-color: white;
    border: 2px solid white;
    color: gray;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        border: 2px solid gray;
    }
`

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={require('../assets/categories/'+item.img+'.jpeg')} />
        <Info>
            <Title>{item.title}</Title>
            <Button to="/shop">SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem