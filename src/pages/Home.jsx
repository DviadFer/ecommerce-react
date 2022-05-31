import React from 'react'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import PromoBanner from '../components/PromoBanner'

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar />
      <Carrousel />
      <Categories />
    </div>
  )
}

export default Home