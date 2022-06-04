import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const FooterContainer = styled.div`
    padding: 25px 50px 50px;
    background-color: #1C1C1C;
    color: white;
`

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 50px;
    ${mobile({ flexDirection: "column", gap: "25px"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Logo = styled.h1`
    letter-spacing: 2px;
`

const Desc = styled.p`
  margin-bottom: 20px;
  line-height: 24px;
  text-align: justify;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #1C1C1C;
  }
`

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-size: 24px;
  text-align: center;
`

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Column = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const ListItem = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Right = styled.div`
  flex: 1;
  width: 100%;
`

const ContactItem = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Payment = styled.img`
    width: 200px;
    display: block;
    margin: auto;
`
const Divider = styled.hr`
    margin: 25px 0;
    height: 1px;
    outline: none;
    border: none;
    background-color: #3E3E3E;
`

const Author = styled.p`
    font-size: 16px;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Left>
                    <Divider />
                    <Logo>ECOMMERCE.</Logo>
                    <Divider />
                    <Desc>
                        This is a <b>template UI for an ecommerce website</b>. React base technology. It was done as part of the final proyect for Web Development applications course. Copyright law provides for the principle, commonly called "fair use" that the reproduction of copyright works for <b>educational purposes only</b>, such as this proyect, does not constitute copyright infringement.
                    </Desc>
                    <SocialContainer>
                        <SocialIcon onClick={(e) => {
                            e.preventDefault();
                            window.open('http://facebook.com', '_blank')
                        }}>
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon onClick={(e) => {
                            e.preventDefault();
                            window.open('http://instagram.com', '_blank')
                        }}>
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon onClick={(e) => {
                            e.preventDefault();
                            window.open('http://twitter.com', '_blank')
                        }}>
                            <Twitter />
                        </SocialIcon>
                        <SocialIcon onClick={(e) => {
                            e.preventDefault();
                            window.open('http://pinterest.com', '_blank')
                        }}>
                            <Pinterest />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Divider />
                    <Title>Useful Links</Title>
                    <Divider />
                    <List>
                        <Column>
                            <ListItem to="/not-found">Legal Advise</ListItem>
                            <ListItem to="/not-found">Cookie Policy</ListItem>
                            <ListItem to="/not-found">Privacy Policy</ListItem>
                            <ListItem to="/not-found">Shipping</ListItem>
                        </Column>
                        <Column>
                            <ListItem to="/not-found">My Account</ListItem>
                            <ListItem to="/not-found">Order Tracking</ListItem>
                            <ListItem to="/not-found">Wishlist</ListItem>
                            <ListItem to="/not-found">Terms</ListItem>
                        </Column>
                    </List>
                </Center>
                <Right>
                    <Divider />
                    <Title>Contact</Title>
                    <Divider />
                    <ContactItem>
                        <Room style={{marginRight:"10px"}}/> C/ Ribadavia, 4 - 15007 - A Coruña
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/> +44 623 456 678
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px"}} /> contact@ecommerce.dev
                    </ContactItem>
                    <Payment src={require("../assets/misc/payment.png")} />
                </Right>
            </Container>
            <Divider />
            <Author>CREATED BY: <b>Diego Viador Ferreira</b></Author>
        </FooterContainer>
    )
}

export default Footer;