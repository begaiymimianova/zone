import React from 'react'
import css from './Services.module.css'
import foto1 from '../../accsets/image/luja.png'
import foto2 from '../../accsets/image/convert.png'
import foto3 from '../../accsets/image/find.png'
import icon from '../../accsets/icon/IconButton.png'
import foto4 from '../../accsets/image/say.png'
import Title from '../Title/Title'

function Services() {
  return (
    <div className='container'>
      <div className={css.wrapper}>
      <div className={css.top}>
        <p className={css.top__txt}>Our Services</p>
        <h2 className={css.title}>We Provide</h2>
        <p className={css.top__txt2}>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
      </div>
      <div className={css.bottom}>
        <div className={css.cards1}>
          <img className={css.cards1__img} src={foto1} alt="foto" />
          <h2 className={css.cards1__title}>SEO</h2>
          <p className={css.cards1__txt}>Nunc nonummy metus. Donec elit libero</p>
          <p className={css.strelka}>➜</p>
        </div>
        <div className={css.cards2}>
          <img className={css.cards2__img} src={foto2} alt="foto" />
          <h6 className={css.cards2__title}>Email Marketing</h6>
          <p className={css.cards2__txt}>Nunc nonummy metus. Donec elit libero</p>
          <p className={css.strelka}>➜</p>
        </div>
        <div className={css.cards3}>
          <img className={css.cards3__img} src={foto3} alt="foto" />
          <h6 className={css.cards3__title}>Search Engine Oprimization</h6>
          <p className={css.cards3__txt}>Nunc nonummy metus. Donec elit libero</p>
          <img className={css.icon} src={icon} alt="" />
          <img src={icon} alt="icon" />
        </div>
        <div className={css.cards4}>
          <img className={css.cards4__img} src={foto4} alt="icon" />
          <h6 className={css.cards4__title}> Social Marketing</h6>
          <p className={css.cards4__txt}>Nunc nonummy metus. Donec elit libero</p>
          <p className={css.strelka}>➜</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services