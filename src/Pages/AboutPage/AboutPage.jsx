import React from 'react'
import CoreValues from '../../components/CoreValues/CoreValues'
import Footer from '../../components/Footer/Footer'
import Footer2 from '../../components/Footer2/Footer2'
import MarketingAbout from '../../components/MarketingAbout/MarketingAbout'
import OurClients from '../../components/OurClients/OurClients'
import OurStory from '../../components/OurStory/OurStory'
import OurVision from '../../components/OurVision/OurVision'
import SliderTest from '../../components/SliderTest/SliderTest'
import Team from '../../components/Team/Team'
import css from './AboutPage.module.css'

function AboutPage() {
  return (
    <div>
        <MarketingAbout/>
        <OurVision/>
        <CoreValues/>
        <OurStory/>
        <Team/>
        <SliderTest/>
        <OurClients/>
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default AboutPage