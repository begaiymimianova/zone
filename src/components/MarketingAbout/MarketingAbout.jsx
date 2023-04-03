import React from 'react'
import css from './MarketingAbout.module.css'
import team from '../../accsets/image/teams.png'
import team_icon from '../../accsets/icon/team_icon.png'
import Title from '../Title/Title'
import progress from '../../accsets/icon/progress.png'
import Txt from '../Txt/Txt'
import champion from '../../accsets/icon/champion.png'
import project from '../../accsets/icon/projects.png'
import person from '../../accsets/icon/person.png'

function MarketingAbout() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <img className={css.img_top} src={team} alt="" />
                    <div className={css.top_text}>
                        <Title title="Who We Are?" />
                        <p className={css.top__txt}>Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.

                            <span>  Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius.</span>
                        </p>
                        <button className={css.top__btn}>Check Our Work <img className={css.btn__img} src={team_icon} alt="" /></button>
                    </div>
                </div>
                <div className={css.bottom}>
                    <div className={css.card1}>
                        <img className={css.iocn} src={progress} alt="" />
                        <h2 className={css.bottom__title}>12</h2>
                        <Txt txt="Years of experience" />
                    </div>
                    <div className={css.card2}>
                        <img className={css.iocn} src={champion} alt="" />
                        <h2 className={css.bottom__title}>20</h2>
                        <Txt txt="Awards" />
                    </div>
                    <div className={css.card3}>
                        <img className={css.iocn} src={project} alt="" />
                        <h2 className={css.bottom__title}>150</h2>
                        <Txt txt="Projects" />
                    </div>
                    <div className={css.card4}>
                        <img className={css.iocn} src={person} alt="" />
                        <h2 className={css.bottom__title}>32k</h2>
                        <Txt txt="Happy clients"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingAbout