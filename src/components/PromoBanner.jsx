import { LocalShipping } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const PromoBanner = () => {
  return (
    <Container>
        <LocalShipping style={{fontSize: 20}} />
        Season sale! Free Shipping on orders over 50€
        <LocalShipping style={{fontSize: 20}} />
    </Container>
  )
}

export default PromoBanner