import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: salmon;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Carrousel = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeft/>
        </Arrow>
        <Arrow>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Carrousel