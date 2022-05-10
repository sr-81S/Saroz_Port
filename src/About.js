import React from 'react'
import Common from './Common'
import aboutim from '../src/image/pics.jpg'

const About = () => {
  return (
    <>
     <Common
      head='I am'
      brand='Saroz Savar'
      desceiption='Iam a Student of MCA & MERN Stack Developer'
      link='https://github.com/sr-81S'
      bn='GitHub ->'
      imgsc={aboutim}
     />
    </>
  )
}

export default About