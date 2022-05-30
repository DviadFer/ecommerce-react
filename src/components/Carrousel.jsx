import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: salmon;
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
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};;
    margin: auto;
    cursor: pointer;
`

const Carrousel = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeft/>
        </Arrow>
        <Arrow direction="right">
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Carrousel