import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const FooterContainer = styled.div`
    padding: 50px;
    background-color: #1C1C1C;
    color: white;
`

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 100px;
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
  margin: 20px 0px;
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

const ListItem = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Right = styled.div`
  flex: 1;
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
                    <Logo>ECOMMERCE.</Logo>
                    <Desc>
                        This is a <b>template UI for an ecommerce website</b>. React base technology. It was done as part of the final proyect for Web Development applications course. Copyright law provides for the principle, commonly called "fair use" that the reproduction of copyright works for <b>educational purposes only</b>, such as this proyect, does not constitute copyright infringement.
                    </Desc>
                    <SocialContainer>
                        <SocialIcon>
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon>
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon>
                            <Twitter />
                        </SocialIcon>
                        <SocialIcon>
                            <Pinterest />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <Column>
                            <ListItem>Legal Advise</ListItem>
                            <ListItem>Cookie Policy</ListItem>
                            <ListItem>Privacy Policy</ListItem>
                            <ListItem>Shipping</ListItem>
                        </Column>
                        <Column>
                            <ListItem>My Account</ListItem>
                            <ListItem>Order Tracking</ListItem>
                            <ListItem>Wishlist</ListItem>
                            <ListItem>Terms</ListItem>
                        </Column>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
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
            <Author>CREATED BY: <b>Diego Vidor Ferreira</b></Author>
        </FooterContainer>
    )
}

export default Footer;