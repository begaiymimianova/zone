import React from 'react'
import css from './Main.module.css'
import play from '../../accsets/icon/play.png'
import ilustrator from '../../accsets/image/fotka.png'

function Main() {
  return (
    <div className={css.wrapper}>
    <div className={css.container}>
        <div className={css.right}>
            <p className={css.right__txt}>DIGITAL MARKETING</p>
            <h1 className={css.right__title}>Boosts Your Website Traffic</h1>
            <p className={css.right__txt2}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </p>
            <div className={css.active}>
                <button className={css.act__btn}>Try For Free</button>
                <img src={play} alt="icon" />
                <p className={css.act__txt}>See Our Work</p>
            </div>
        </div>
        <div className={css.left}>
          <img src={ilustrator} alt="icon" />
        </div>
    </div>
</div>
  )
}

export default Main