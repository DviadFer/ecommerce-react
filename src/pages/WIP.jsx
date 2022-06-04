import styled from "styled-components"
import { Announcement } from "@material-ui/icons"
import { Link } from "react-router-dom"

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${require("../assets/slider/model-6.jpeg")});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({height: "80vh"})}
`

const Wrapper = styled.div`
  width: 50%;
  padding: 50px;
  ${mobile({width: "90%"})}
`

const Issue = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    margin-bottom: 35px;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

const Message = styled.p`
    margin-bottom: 35px;
    font-size: 25px;
    font-weight: 400;
`
const Button = styled(Link)`
  display: block;
  width: 25%;
  border: none;
  padding: 15px 25px;
  background-color: teal;
  border: 2px solid teal;
  color: white;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`

const WIP = () => {
    return (
        <Container>
          <Wrapper>
            <Issue>
               <Announcement style={{transform: "scale(2.0)", color: "teal"}}/>
               <Title>Maintenaince Issue:</Title>
            </Issue>
            <Message>We are currently working on implementing this feature in the near future. Forgive any inconveniences.</Message>
            <Message>Kind regards, <b>ECOMMERCE. online shop team</b>.</Message>
            <Button to="/">BACK</Button>
          </Wrapper>
        </Container>
      )
}

export default WIP