import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    
`

const Circle = styled.div`
    
`

const Image = styled.img`
    
`

const Info = styled.div`
    
`

const Icon = styled.div`
    
`

const popularProduct = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={require('../assets/popularProducts/'+item.img+'.png')} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default popularProduct