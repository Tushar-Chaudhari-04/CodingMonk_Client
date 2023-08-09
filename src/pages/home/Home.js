import React from 'react'
import "./Home.scss"
import Navbar from '../../components/navbar/Navbar'
import LPHeroSection from '../../components/lp-hero-section/LPHeroSection'
import Footer from '../../components/footer/Footer'
import CourseHighlight from '../../components/course-highlight/CourseHighlight'
import ProgramBenefits from '../../components/program-benefits/ProgramBenefits'
import TopTech from '../../components/top-tech-section/TopTech'
import Courses from '../../components/courses/Courses'
import FAQS from '../../components/faqs/FAQS'

const Home = () => {
  return (
    <>
        <Navbar/>
        <LPHeroSection/>
        <CourseHighlight/>
        <ProgramBenefits/>
        <TopTech/>
        <Courses/>
        <FAQS/>
        <Footer/>
    </>
  )
}

export default Home