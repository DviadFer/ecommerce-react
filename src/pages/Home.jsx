import React from 'react'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
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
      <Newsletter />
    </div>
  )
}

export default Home