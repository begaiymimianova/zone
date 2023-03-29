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
        <Title title='Our Clients'/>
        <div className={css.items}>
            <div className={css.item_top}>
                <img src={spotify1} alt="" />
                <img src={slack1} alt="" />
                <img src={shape} alt="" />
                <img src={microsoft1} alt="" />
            </div>
            <div className={css.item_bottom}>
              <img src={vimeo} alt="" />
              <img src={airbnb} alt="" />
              <img src={google} alt="" />
              <img src={tripadvisor} alt="" />
            </div>
        </div>
    </div>
  )
}

export default OurClients