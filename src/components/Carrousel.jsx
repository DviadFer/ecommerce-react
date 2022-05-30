import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
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
`

//Estructura de cada pestaña
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
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

const Title = styled.h1``
const Description = styled.p``
const Button = styled.button``



const Carrousel = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeft/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src="https://i.ibb.co/DG69bQ4/2.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>DON'T COMPROMISE ON STYLE! GET FLAT 20% OFF FOR NEW ARRIVALS.</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Carrousel