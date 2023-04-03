import React from 'react'
import Title from '../Title/Title'
import Txt from '../Txt/Txt'
import css from './Team.module.css'
import girl from '../../accsets/image/teamGirl.png'
import girl2 from '../../accsets/image/girl2.png'
import boy from '../../accsets/image/teamBoy.png'
import boy2 from '../../accsets/image/boy2.png'
import boy3 from '../../accsets/image/boy3.png'
import girl3 from '../../accsets/image/girl3.png'
import boy4 from '../../accsets/image/boy4.png'
import girl4 from '../../accsets/image/girl4.png'
import social from '../../accsets/image/social.png'
import facebook from '../../accsets/icon/facebook.png'
import instagram from '../../accsets/icon/instagram.png'
import inSocial from '../../accsets/icon/in.png'
import twitter from '../../accsets/icon/twitter.png'

function Team() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <Title title='Great Team Is The Key' />
                    <Txt txt="Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases" />
                </div>
                <div className={css.bottom}>
                    <div className={css.bottom__top}>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={girl} alt="" />
                                <div className={css.social}>
                                    <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={boy} alt="boy" />
                                <div className={css.social}>
                                <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>   
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={girl2} alt="girl2" />
                                <div className={css.social}>
                                <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={boy2} alt="boy2" />
                                <div className={css.social}>
                                    <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.bottom__bottom}>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={boy3} alt="boy3" />
                                <div className={css.social}>
                                <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={girl3} alt="girl3" />
                                <div className={css.social}>
                                    <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img className={css.imgBoy} src={boy4} alt="boy4" />
                                <div className={css.social}>
                                <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                        <div className={css.teamCard}>
                            <div className={css.img_wrapper}>
                                <img src={girl4} alt="girl4" className={css.girl4} />
                                <div className={css.social}>
                                <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU" target={'_blank'}> <img src={facebook} alt="" /> </a>
                                    <a href="https://www.instagram.com/khabib_nurmagomedov/?hl=ru" target={'_blank'}> <img src={instagram} alt="" /> </a>
                                    <a href="https://www.linkedin.com/" target={'_blank'}> <img src={inSocial} alt="" /></a>
                                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'}> <img src={twitter} alt="" /></a>
                                </div>
                            </div>
                            <div className={css.text}>
                                <h6 className={css.title}>Eleanor Pena</h6>
                                <p className={css.txt}>Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team