import { Link } from "react-router-dom";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${require("../assets/slider/model-4.png")});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 50px;
  background-color: white;
  ${mobile({width: "100%", padding: "15px", backgroundColor: "#ffffff98"})}
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 35px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 20px;
  &::placeholder {
    font-size: 20px;
  }
`

const Button = styled(Link)`
  width: 50%;
  border: none;
  padding: 15px 25px;
  background-color: teal;
  border: 2px solid teal;
  color: white;
  cursor: pointer;
  margin: 15px 0;
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

const Related = styled(Link)`
  font-size: 12px;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button to="/not-found">LOGIN</Button>
          <Related to="/not-found">DO NOT YOU REMEMBER THE PASSWORD?</Related>
          <Related to="/register">CREATE A NEW ACCOUNT</Related>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;