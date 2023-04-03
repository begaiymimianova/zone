import React from 'react'
import css from './OurVision.module.css'
import play from '../../accsets/icon/play2.png'

function OurVision() {
  return (
    <div className=" container">
      <div className={css.wrapper}>
        <h2 className={css.title}>Our Vision</h2>
        <img className={css.icon} src={play} alt="" />
        <h4 className={css.txt}>Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada. </h4>
      </div>
    </div>
  )
}

export default OurVision