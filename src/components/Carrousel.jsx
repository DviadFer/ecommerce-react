import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import { useState } from "react"
import { Link } from "react-router-dom"
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
    width: 60px;
    height: 60px;
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
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    // La propiedad transform se modificará con UseState para hacer scroll.
    transform: translate(${props => props.slideId * -100}vw);
    transition: all 1.5s ease;
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
    height: 100%;

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
const Button = styled(Link)`
    border: 1px solid black;
    color: black;
    text-decoration: none;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: black;
        color: white;
    }
`



const Carrousel = () => {

  //Hook de React UseState:
    const [slideId, setSlideId] =useState(0)
  
  //Función para modificar la propiedad transform de Wrapper
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideId(slideId > 0 ? (slideId - 1) : 2)
        } else {
            setSlideId(slideId < 2 ? (slideId + 1) : 0)
        }      
    }  

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeft style={{transform:"scale(1.8)"}}/>
        </Arrow>
        <Wrapper slideId={slideId}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={require('../assets/slider/'+item.img+'.png')} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button to='/shop'>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRight  style={{transform:"scale(1.8)"}}/>
        </Arrow>
    </Container>
  )
}

export default Carrousel