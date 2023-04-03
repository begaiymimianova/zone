import React from 'react'
import css from './About.module.css'
import img from '../../accsets/image/IMG.png'
import Title from '../Title/Title'

function About() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <img className={css.img} src={img} alt="icon" />
                </div>
                <div className={css.bottom}>
                    <div className={css.right}>
                        <p className={css.bottom__txt2}>About Us</p>
                        <Title title="Who We Are" />
                        <p className={css.bottom__txt}>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p className={css.bottom__txt3}>Lean more ➜</p>
                    </div>
                    <div className={css.left}>
                        <div className={css.card}>
                            <div className={css.cards}>
                                <div className={css.cards__num}>
                                    <h2 className={css.cards__title}>150</h2>
                                    <p className={css.plus}>+</p>
                                </div>
                                <p className={css.cards__txt}>PROJECTS</p>
                            </div>
                            <div className={css.cards2}>
                                <p className={css.cards2__txt}>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                            </div>
                        </div>
                        <div className={css.card}>
                            <div className={css.cards}>
                                <div className={css.cards__num}>
                                    <h2 className={css.cards__title}>32k</h2>
                                    <p className={css.plus}>+</p>
                                </div>
                                <p className={css.cards__txt}>Happy CLIENTS</p>
                            </div>
                            <div className={css.cards2}>
                                <p className={css.cards2__txt}>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
                            </div>
                        </div>
                        <div className={css.card}>
                            <div className={css.cards}>
                                <div className={css.cards__num}>
                                    <h2 className={css.cards__title}>20</h2>
                                    <p className={css.plus}>+</p>
                                </div>
                                <p className={css.cards__txt}>YEARS OF EXPERIENCE</p>
                            </div>
                            <div className={css.cards2}>
                                <p className={css.cards2__txt}>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About