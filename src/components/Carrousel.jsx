import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    // Se modifíca el CSS en función de las propiedades del componente React <Arrow>
    left: ${props => props.direction === "left" && "10px"}; 
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

//Estructura de cada pestaña
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

//Contenido de cada pestaña
const Image = styled.img`
    height: 80%;

`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`



const Carrousel = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeft/>
        </Arrow>
        <Wrapper>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right">
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Carrousel