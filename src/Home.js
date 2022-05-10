import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/image/home.svg'
import '../src/index.css'
import Common from './Common'

const Home = () => {
  return (
    <>
       <Common
        head='Hello from'
        brand='Saroz'
        desceiption='Connect For web Solution'
        link='https://www.linkedin.com/in/saroj-sabar-84a996220/'
        bn='LinkedIn ->'
        imgsc={web}
       />
    </>
  )
}

export default Home