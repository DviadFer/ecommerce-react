import React from 'react'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import PopularProducts from '../components/PoupularProducts'

const Home = () => {
  return (
    <div>
      <Carrousel />
      <Categories />
      <PopularProducts />
      <Newsletter />
    </div>
  )
}

export default Home