import React from 'react'
import css from './WorkingProcess.module.css'
import sketch from '../../accsets/image/sketch.png'
import icon from '../../accsets/icon/iconbase.png'
import icon2 from '../../accsets/icon/iconbase2.png'
import search from '../../accsets/image/search.png'
import optimization from '../../accsets/image/optimization.png'
import icon3 from '../../accsets/icon/iconbase3.png'
import analysis from '../../accsets/image/analysis.png'
import Title from '../Title/Title'


function WorkingProcess() {
    return (
        <div className='container'>
        <div className={css.wrapper}>
            <div className={css.top}>
                <p className={css.top__txt}>Work Flow</p>
                <Title title="Working Process" />
                <p className={css.top__txt2}>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
            </div>
            <div className={css.bottom}>
                <div className={css.card1}>
                    <img className={css.card1__img} src={sketch} alt="" />
                    <div className={css.btn}>
                        <button className={css.button}>Planning    <img className={css.btn__icon} src={icon} alt="" /></button>
                    </div>
                </div>
                <div className={css.card2}>
                    <div className={css.container}>
                        <img className={css.card2__img} src={search} alt="" />
                        <div className={css.btn2}>
                            <button className={css.button2}>Research <img className={css.btn__icon2} src={icon2} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className={css.card3}>
                    <div className={css.container}>
                        <img className={css.card3__img} src={optimization} alt="" />
                        <div className={css.btn3}>
                            <button className={css.button3}>Optimizing <img className={css.btn__icon3} src={icon3} alt="strelka" /></button>
                        </div>
                    </div>
                </div>
                <div className={css.card4}>
                    <div className={css.container}>
                        <img className={css.card4__img} src={analysis} alt="" />
                        <p className={css.card4__txt}>Results</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WorkingProcess