import React from 'react'
import { Hero } from '../components/Hero'
import Portfolio from '../components/Portfolio'

const Work = () => {
  return (
    <div>
        <Hero heading='My work'
        message='You can checkout my work while i am hiking around Texas'/>
        <Portfolio/>
    </div>
  )
}

export default Work