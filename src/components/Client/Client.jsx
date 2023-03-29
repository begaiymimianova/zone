import React from 'react'
import css from './Client.module.css'
import spotify from '../../accsets/icon/spotify.png'
import slack from '../../accsets/icon/brand_slack.png'
import netflix from '../../accsets/icon/brand_netflix.png'
import heroku from '../../accsets/icon/brand_heroku.png'
import vimeo from '../../accsets/icon/brand_vimeo.png'
import air from '../../accsets/icon/brand_airbnb.png'

function Client() {
  return (
    <div className='container'>
    <div className={css.wrapper}>
        <img src={spotify} alt="" />
        <img src={slack} alt="" />
        <img src={netflix} alt="" />
        <img src={heroku} alt="" />
        <img src={vimeo} alt="" />
        <img src={air} alt="" />
    </div>
    </div>
  )
}

export default Client