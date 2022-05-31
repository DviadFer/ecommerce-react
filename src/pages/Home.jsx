import React from 'react'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import PopularProducts from '../components/PoupularProducts'
import PromoBanner from '../components/PromoBanner'

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar />
      <Carrousel />
      <Categories />
      <PopularProducts />
    </div>
  )
}

export default Home