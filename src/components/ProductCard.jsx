import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
background-color: #f5fbfd;
position: relative;
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image = styled.img`
height: 75%;
z-index: 2;
`
const Title = styled(Link)`
  display: block;
  width: fit-content;
  margin: 10px auto;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
`

const Icon = styled(Link)`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
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

const ProductCard = ({ item }) => {
    return (
        <Wrapper>
            <Container>
                <Circle />
                <Image src={require('../assets/popularProducts/'+item.img+'.png')} />
                <Info>
                    <Icon to="/single-product">
                    <SearchOutlined />
                    </Icon>
                </Info>
            </Container>
            <Title to="/single-product">Test Title</Title>
        </Wrapper>
    )
}

export default ProductCard