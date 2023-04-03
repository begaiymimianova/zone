import React from 'react'
import Title from '../Title/Title'
import css from './OurClients.module.css'
import spotify1 from '../../accsets/icon/spotify1.png'
import slack1 from '../../accsets/icon/slack1.png'
import shape from '../../accsets/icon/Shape.png'
import microsoft1 from '../../accsets/icon/microsoft1.png'
import vimeo from '../../accsets/icon/vimeo.png'
import airbnb from '../../accsets/icon/airbnb.png'
import google from '../../accsets/icon/google.png'
import tripadvisor from '../../accsets/icon/tripadvisor.png'

function OurClients() {
  return (
    <div className={css.wrapper}>
        <h2 className={css.title}>Our Clients</h2>
        <div className={css.items}>
            <div className={css.item_top}>
                <img src={spotify1} alt="icon" />
                <img src={slack1} alt="icon" />
                <img src={shape} alt="icon" />
                <img src={microsoft1} alt="icon" />
            </div>
            <div className={css.item_bottom}>
              <img src={vimeo} alt="icon" />
              <img src={airbnb} alt="icon" />
              <img src={google} alt="icon" />
              <img src={tripadvisor} alt="icon" />
            </div>
        </div>
    </div>
  )
}

export default OurClients