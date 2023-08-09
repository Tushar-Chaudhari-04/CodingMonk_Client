import React from 'react'
import "./LPHeroSection.scss"
import LPHeroImg from "../../assets/LP-Hero-Img.svg"
import Laptop from "../../assets/Laptop.webp";
import MobileImg from "../../assets/mobile.webp";
import ProgressImg from "../../assets/ProgressImg.webp";


const LPHeroSection = () => {
    const currDate=new Date();
    const day=currDate.getDate();
    const month=currDate.getMonth();
    const mon=currDate.getMonth();
    console.log(currDate,day,month,mon)
  return (
    <div className='container'>
        <div className='hero-section-left'>
            <h1>Learn with Tushar Chaudhari</h1>
            <h1 className='hero-heading'><span className='hero-heading-prime'>Prime</span>Program is now Open for Enrollments</h1>
            <h2 className='hero-head-two'>The Ultimate Guide To Ace SDE Interviews.</h2>
            <h3 className='hero-subheading'>A Program to make you Job Ready for your Dream Company 🚀</h3>
            <button className='btn-primary enroll-btn'>Enroll Now
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg> */}
            </button>
            <p className='hero-para'>This batch starts from <span className='hero-para-sub'>30th August</span></p>
        </div>
        <div className='hero-section-right'>
        <div className='hero-section-si'>
            <img className='laptop-img vert-move' src={Laptop} alt=""/>
            <img className='progress-img vert-move' src={ProgressImg} alt=""/>
            <img className='mobile-img vert-move' src={MobileImg} alt=""/>
            
        </div>
        <div className='hero-section-hi'>
        <img className='lpheroimg' src={LPHeroImg} alt="LPHeroImg"/>
        </div>   
           
        </div>

        
    </div>
  )
}

export default LPHeroSection