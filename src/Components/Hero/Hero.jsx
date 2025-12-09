import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Vikaash" />
      <h1><span>I'm Vikaash ,</span> Front - End Developer in Coimbatore.</h1>
      <p>I am a frontend developer from Coimbatore with 6 months of experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1uhdUv_vbFkKr5BVmKgf3GRWcrgdvtUpg/view?usp=sharing">My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero