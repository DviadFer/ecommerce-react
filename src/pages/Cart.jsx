import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
  props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
  ${mobile({width: "150px"})}
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  cursor: auto;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ margin: "5px 15px" })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 15px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = ({ cart, onEmptyCart, onUpdateCartQty, onRemoveFromCart }) => {

  const handleEmptyCart = () => onEmptyCart();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const renderEmptyCart = () => (
    <h1>No tienes items en el carro</h1>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag({cart.total_items})</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          {cart.line_items.map((lineItem) => (
            <>
              <Product>
                <ProductDetail>
                  <Image src={lineItem.image.url} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {lineItem.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {lineItem.id.slice(5)}
                    </ProductId>
                    {lineItem.selected_options?.length ? (
                      <ProductSize>
                        <b>Size:</b> {lineItem.selected_options[0].option_name}
                      </ProductSize>
                    ) : 
                      <ProductSize>
                        <b>Size:</b> NOT SELECTED. By default smallest size. 
                      </ProductSize>
                    }
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity - 1)} />
                    <ProductAmount>{lineItem.quantity}</ProductAmount>
                    <Add onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity + 1)} />
                  </ProductAmountContainer>
                  <Button style={{width: "80px", backgroundColor: "#942c2c"}} onClick={() => handleRemoveFromCart(lineItem.id)} >Remove</Button>
                  <ProductPrice>{lineItem.line_total.raw} €</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
            </>   
          ))}
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>{cart.subtotal.raw} €</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 3.00</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>{cart.subtotal.raw + 3} €</SummaryItemPrice>
          </SummaryItem>
          <Button onClick={handleEmptyCart} style={{marginBottom: "15px", backgroundColor: "#942c2c"}} >Empty Cart</Button>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </>
  )

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        { !cart.line_items.length ? renderEmptyCart() : renderCart() }
      </Wrapper>
      <Footer />
    </Container>
  )
};



export default Cart