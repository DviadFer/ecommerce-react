import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    font-weight: 500;
`

const PromoBanner = () => {
  return (
    <Container>
        Season sale! Free Shipping on Order Over 50€
    </Container>
  )
}

export default PromoBanner