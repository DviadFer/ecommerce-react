import { Search, ShoppingCartOutlined, AccountCircle, VpnKey } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom"

import { mobile } from '../responsive'

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
  ${mobile({ gap: "10px" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({flex: "2", textAlign: "left"})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${mobile({flex: "2", gap: "0" })}
`

//Contenido de la barra de navegación
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ borderRadius: "50%", marginLeft: "0", cursor: "pointer" })}
`

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ display: "none" })}
`
const Logo = styled(Link)`
  display: block;
  font-weight: bold;
  cursor: pointer;
  color: initial;
  font-size: 35px;
  text-decoration: none;
  ${mobile({ fontSize: "25px"})}
`

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: initial;
  font-size: initial;
  text-decoration: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
  ${mobile({ fontSize: "12px" })}
`
const ItemText = styled.p`
  margin-left: 10px;
  ${mobile({display: "none"})}
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
          {location.pathname !== "/login" && location.pathname !== "/register" ? (
            <MenuItem to="/login">
              <AccountCircle style={{color: "teal"}} />
              <ItemText>LOGIN</ItemText>
            </MenuItem>
          ): null}  
          {location.pathname !== "/login" && location.pathname !== "/register" ? (
            <MenuItem component={Link} to="/register">
              <VpnKey style={{color: "teal"}} />
              <ItemText>REGISTER</ItemText>
            </MenuItem>
          ): null}
          {location.pathname !== "/cart" ? (
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