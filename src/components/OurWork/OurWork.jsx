import React from 'react'
import css from './OurWork.module.css'
import foto from '../../accsets/image/topImg.png'
import foto2 from '../../accsets/image/bottomImg.png'
import icon from '../../accsets/icon/iconBottom.png'
import Title from '../Title/Title'

function OurWork() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <p className={css.top__txt}>Our Work</p>
                    <Title title="Case Studies" />
                </div>
                <div className={css.bottom}>
                    <div className={css.bottom__left}>
                        <div className={css.marketing}>
                            <div className={css.marketing__text}>
                                <p className={css.marketing__txt}>marketing</p>
                                <h6 className={css.marketing__title}>General Electric</h6>
                            </div>
                        </div>
                    </div>
                    <div className={css.bottom__center}>
                        <div className={css.center__top}>
                            <div className={css.top__main}>
                                <img className={css.top__img} src={foto} alt="" />
                                <div className={css.top__text}>
                                    <p className={css.main__txt}>branding</p>
                                    <h4 className={css.main__title}>Bank of America</h4>
                                    <p className={css.main__txt2}>Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul</p>
                                    <button className={css.more}>Lean more   ➜</button>
                                </div>
                            </div>
                            <div className={css.top__seo}>
                                <p className={css.seo__txt}>SEO</p>
                                <h6 className={css.seo__title}>Louis Vuitton</h6>
                            </div>
                        </div>
                        <div className={css.center__bottom}>
                            <div className={css.gillete}>
                                <p className={css.gillete__txt}>marketing</p>
                                <h6 className={css.gillete__title}>Gillette</h6>
                            </div>
                            <div className={css.bottom__main}>
                                <img className={css.top__img} src={foto2} alt="" />
                                <div className={css.bottom__text}>
                                    <p className={css.main__txt}>SOCIAL</p>
                                    <h4 className={css.main__title}>Louis Vuitton</h4>
                                    <p className={css.main__txt2}>Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul</p>
                                    <button className={css.more}>Lean more   ➜</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.bottom__right}>
                        <div className={css.web}>
                            <p className={css.web__txt}>WEB</p>
                            <h6 className={css.web__title}>Gillette</h6>
                        </div>
                    </div>
                </div>
                <div className={css.view}>
                    <button className={css.all}>View All <img className={css.icon} src={icon} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default OurWork