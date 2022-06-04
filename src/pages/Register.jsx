import { CheckBox } from "@material-ui/icons";
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
    url(${require("../assets/slider/model-5.jpeg")});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  padding: 50px;
  background-color: white;
  ${mobile({width: "100%", padding: "15px", backgroundColor: "#ffffff98"})}
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 35px;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${mobile({flexWrap: "nowrap", flexDirection: "column", gap: "0px"})}
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 20px;
  &::placeholder {
    font-size: 20px;
  }
  ${mobile({marginBottom: "5px"})}
`

const Agreement = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
`

const Button = styled(Link)`
  display: block;
  width: 50%;
  margin: 15px auto 0;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            <CheckBox style={{color: "teal"}} />  
            <span>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></span>
          </Agreement>
          <Button to="/not-found">REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;