import { LocalShipping } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 2000;
`

const PromoBanner = () => {
  return (
    <Container>
        <LocalShipping style={{fontSize: 20}} />
        Season sale! Free Shipping on orders over 50€
    </Container>
  )
}

export default PromoBanner