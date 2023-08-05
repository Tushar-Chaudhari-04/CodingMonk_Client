import React from 'react'
import "./Home.scss"
import Navbar from '../../components/navbar/Navbar'
import LPHeroSection from '../../components/lp-hero-section/LPHeroSection'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <>
        <Navbar/>
        <LPHeroSection/>
        <Footer/>
    </>
  )
}

export default Home