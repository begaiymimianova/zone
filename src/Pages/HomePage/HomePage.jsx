import React from 'react'
import Client from '../../components/Client/Client'
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess'
import OurWork from '../../components/OurWork/OurWork'
import Header from '../../components/Header/Header'

function HomePage() {
  return (
    <div>
      <Header/>
        <Main/>
        <Client/>
        <About/>
        <Services/>
        <WorkingProcess/>
        <OurWork/>
    </div>
  )
}

export default HomePage