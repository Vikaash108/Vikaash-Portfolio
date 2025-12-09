import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about_section">
        <div className="about-left">
          <img src={about_profile} alt="profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate Frontend Developer dedicated to creating clean and responsive web experiences.</p>
            <p>I love building modern interfaces and continuously improving my skills to deliver impactful solutions.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill"> <p>HTML & CSS</p> <hr style={{ width: "80%" }} /> </div>
            <div className="about-skill"> <p>React JS</p> <hr style={{ width: "60%" }} /> </div>
            <div className="about-skill"> <p>Javascript</p> <hr style={{ width: "60%" }} /> </div>
            <div className="about-skill"> <p>MySQL</p> <hr style={{ width: "90%" }} /> </div>
            <div className="about-skill"> <p>Power-BI</p> <hr style={{ width: "70%" }} /> </div>
          </div>
        </div>
      </div>
      <div className="about-Achievements">
        <div className="about-Achievement">
          <h1>6</h1>
          <p>Months of Experience</p>
        </div>
        <hr />
        <div className="about-Achievement">
          <h1>3</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
