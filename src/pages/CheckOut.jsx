import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  height: 60vh;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
`
const Output = styled.div`
  text-align: center;
  font-size: 20px;
`

const CheckOut = ({ cart }) => {
  
  console.log(cart)

  return (
    <Container>
        <Title>Cart output to manage in Back-end created!</Title>
        <Output>Check your cart by inspecting the page and <b>observing the array that appears as output in the console.</b></Output>
    </Container>
  )
}

export default CheckOut