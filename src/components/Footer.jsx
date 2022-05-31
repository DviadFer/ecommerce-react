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

const Container = styled.div`
    background-color: #1C1C1C;
    color: white;
    
`

const Left = styled.div`

`

const Logo = styled.h1`

`

const Desc = styled.p`

`

const SocialContainer = styled.div`

`

const SocialIcon = styled.div`

`

const Center = styled.div`

`

const Title = styled.h3`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

const Right = styled.div`

`

const ContactItem = styled.div`

`

const Payment = styled.img`

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ECOMMERCE.</Logo>
                <Desc>
                    This is a template UI for an ecommerce website. React base technology. It was done as part of the final proyect for Web Development applications course. Copyright law provides for the principle, commonly called "fair use" that the reproduction of copyright works for educational purposes only, such as this proyect, does not constitute copyright infringement.
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
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
                </ContactItem>
                <Payment src={require("../assets/misc/payment.png")} />
            </Right>
        </Container>
    )
}

export default Footer;