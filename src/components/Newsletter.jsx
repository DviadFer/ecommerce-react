import { Send } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 25px;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize: "50px"})}
`

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 20px;
  }
`

const Button = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: teal;
  border: 1px solid teal;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid lightgray;
  }
  ${mobile({ flex: "2" })}
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button to="/not-found">
          <Send />
        </Button>
      </InputContainer>
    </Container>  
  )
}

export default Newsletter