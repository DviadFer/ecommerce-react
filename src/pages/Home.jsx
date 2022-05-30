import React from 'react'
import Carrousel from '../components/Carrousel'
import Navbar from '../components/Navbar'
import PromoBanner from '../components/PromoBanner'

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar />
      <Carrousel />
    </div>
  )
}

export default Home