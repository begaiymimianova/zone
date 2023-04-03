import React from 'react'
import Title from '../Title/Title'
import css from './OurVision.module.css'
import play from '../../accsets/icon/play2.png'

function OurVision() {
  return (
    <div className=" container">
      <div className={css.wrapper}>
        <Title title='Our Vision' color='#FFFFFF' />
        <img src={play} alt="play" />
        <h4 className={css.txt}>Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada. </h4>
      </div>
    </div>
  )
}

export default OurVision