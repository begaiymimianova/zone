import React from 'react'
import css from './TeamSlider.module.css'
import IconRightBtn from '../../assets/TeamSlider/iconbase.svg';
import IconLeftBtn from '../../assets/TeamSlider/iconbase2.svg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import classNames from 'classnames';
import person1 from '../../assets/TeamSlider/IMG2.svg'
import person2 from '../../assets/TeamSlider/IMG1.svg'
import person3 from '../../assets/TeamSlider/IMG3.svg'





function TeamSlider() {

    const prevButton = (
        <button className={classNames(css.customPrevButton, css.sliderButton)}>
          <span className="visually-hidden">
            <img className={css.arrow} src={IconRightBtn} alt="" />
          </span>
        </button>
      );
      const nextButton = (
        <button className={classNames(css.customNextButton, css.sliderButton)}>
          <span className="visually-hidden">
            <img className={css.arrow} src={IconLeftBtn} alt="" />
          </span>
        </button>
      );



    return (
        <div className={css.wrapper}>
            <div className={css.cards}>
            <div className={css.left}>
                <span className={css.upperLeft}>
                <p className={css.team}>TEAM</p>
                <h1 className={css.meatYourTeam}>Meat our team</h1>
                <p className={css.text}>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
                </span>
                    <button className={css.leftButton}>
                        <img src={IconRightBtn} alt="" />
                    </button>
                    <button className={css.rightButton}>
                        <img src={IconLeftBtn} alt="" />
                    </button>
                <AliceCarousel className={css.slider}
                buttonsDisabled={true} // Disable default buttons
                renderPrevButton={() => prevButton} // Render custom prev button
                renderNextButton={() => nextButton} // Render custom next button
                > 
                </AliceCarousel>
            </div>
            
            
            <div>
            <div className={css.people}>
                    <div className={css.personOne}>
                        <img src={person1} alt="person" />
                      <div className={css.cardInfo}>
                        <h1 className={css.name}>Eleanor Pena</h1>
                        <p className={css.info}>UI Designer</p>
                      </div>
                    </div>
                    <div className={css.personTwo}>
                        <img src={person2} alt="person" />
                        <div className={css.cardInfo}>
                        <h1 className={css.name}>Ralph Edwards</h1>
                        <p className={css.info}>Project Manager</p>
                        </div>
                    </div>
                    <div className={css.personThree}>
                    <img src={person3} alt="person" />
                    <div className={css.cardInfo}>
                        <h1 className={css.name}>Marvin McKinney</h1>
                        <p className={css.info}>Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TeamSlider