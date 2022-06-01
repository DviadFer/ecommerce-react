import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom"

const Container = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 30px;
  height: 60px;
  background-color: white;
  z-index: 2000;
  -webkit-box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
`
// Divisor de la barra de navegación
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`

//Contenido de la barra de navegación
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`
const Logo = styled(Link)`
  display: block;
  font-weight: bold;
  cursor: pointer;
  color: initial;
  font-size: 35px;
  text-decoration: none;
`

const MenuItem = styled(Link)`
  display: block;
  font-size: 14px;
  cursor: pointer;
  color: initial;
  font-size: initial;
  text-decoration: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`

const Navbar = () => {

  const location = useLocation()

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">ECOMMERCE.</Logo>
        </Center>
        <Right>
          {location.pathname != "/login" && location.pathname != "/register" ? (
            <MenuItem to="/register">REGISTER</MenuItem>
          ): null}  
          {location.pathname != "/login" && location.pathname != "/register" ? (
            <MenuItem component={Link} to="/login">SIGN IN</MenuItem>
          ): null}
          {location.pathname != "/cart" ? (
            <MenuItem to="/cart">
              <Badge badgeContent={8} color="primary">
                  <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          ): null}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar