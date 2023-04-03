import React from 'react'
import css from './LatestPost.module.css'
import rightArr from '../../assets/LatestPost/rightarr.svg'
import leftArr from '../../assets/LatestPost/leftarr.svg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import classNames from 'classnames';
import plane from '../../assets/LatestPost/ic_plan_basic03.svg'
import profile1 from '../../assets/LatestPost/img.svg';
import profile2 from '../../assets/LatestPost/profilePic2.svg'
import profile3 from '../../assets/LatestPost/profilePic3.svg'



function LatestPosts() {
        const prevButton = (
        <div className={css.prevP}>
        <button className={classNames(css.customPrevButton, css.sliderButton)}>
          <span className="visually-hidden">
            <img className={css.arrow} src={leftArr} alt="" />
          </span>
        </button>
        </div>
      );
      const nextButton = (
        <div className={css.nextP}>
        <button className={classNames(css.customNextButton, css.sliderButton)}>
          <span className="visually-hidden">
            <img className={css.arrow} src={rightArr} alt="" />
          </span>
        </button>
        </div>
      );
    
  return (
    <div>
    <div className={css.main}>
    <div className={css.wrapper}>
    <div className={css.title}><h1>Latest Posts</h1></div>
          <AliceCarousel className={css.AliceCarousel}
            buttonsDisabled={true} // Disable default buttons
            renderPrevButton={() => prevButton} // Render custom prev button
            renderNextButton={() => nextButton} // Render custom next button
          >
        <div className={css.boxes}>
            <div className={css.firstBox}>
                <div className={css.headerFirst}>
                    <span className={css.topText}>15 Dec 2020 ∙ 8 min read </span>
                    <h1 className={css.firstText}>Any mechanical keyboard <br />
                        enthusiasts in design?</h1>
                </div>
                <div className={css.user}>
                    <img className={css.profile1} src={profile1} alt="" />
                    <h1 className={css.name}>Maddox Fletcher</h1>
                </div>

            </div>
            <div className={css.secondBox}>
            <div className={css.headerSecond}>
                <span className={css.topText}>04 Jul 2021 ∙ 8 min read</span>
                <h1 className={css.secondText}>How to design a product <br />
                    that can grow itself 10x in <br />
                     year:</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile2} src={profile2} alt="" />
                    <h1 className={css.name2}>Cruz Truong</h1>
                </div>
            </div>
            <div className={css.thirdBox}>
            <div className={css.headerThird}>
                <span className={css.topText}>19 Apr 2019 ∙ 8 min read</span>
                <h1 className={css.thirdText}>Any mechanical keyboard <br />
                    enthusiasts in design?</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile3} src={profile3} alt="" />
                    <h1 className={css.name}>Margaret Donnelly</h1>
                </div>
            </div>
        </div>
        {/* <img src={plane} alt="" className="sliderimg" />
        <img src={plane} alt="" className="sliderimg" /> */}
        <div className={css.boxes}>
            <div className={css.firstBox}>
                <div className={css.headerFirst}>
                    <span className={css.topText}>15 Dec 2020 ∙ 8 min read </span>
                    <h1 className={css.firstText}>Any mechanical keyboard <br />
                        enthusiasts in design?</h1>
                </div>
                <div className={css.user}>
                    <img className={css.profile1} src={profile1} alt="" />
                    <h1 className={css.name}>Maddox Fletcher</h1>
                </div>

            </div>
            <div className={css.secondBox}>
            <div className={css.headerSecond}>
                <span className={css.topText}>04 Jul 2021 ∙ 8 min read</span>
                <h1 className={css.secondText}>How to design a product <br />
                    that can grow itself 10x in <br />
                     year:</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile2} src={profile2} alt="" />
                    <h1 className={css.name2}>Cruz Truong</h1>
                </div>
            </div>
            <div className={css.thirdBox}>
            <div className={css.headerThird}>
                <span className={css.topText}>19 Apr 2019 ∙ 8 min read</span>
                <h1 className={css.thirdText}>Any mechanical keyboard <br />
                    enthusiasts in design?</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile3} src={profile3} alt="" />
                    <h1 className={css.name}>Margaret Donnelly</h1>
                </div>
            </div>
        </div>
        <div className={css.boxes}>
            <div className={css.firstBox}>
                <div className={css.headerFirst}>
                    <span className={css.topText}>15 Dec 2020 ∙ 8 min read </span>
                    <h1 className={css.firstText}>Any mechanical keyboard <br />
                        enthusiasts in design?</h1>
                </div>
                <div className={css.user}>
                    <img className={css.profile1} src={profile1} alt="" />
                    <h1 className={css.name}>Maddox Fletcher</h1>
                </div>

            </div>
            <div className={css.secondBox}>
            <div className={css.headerSecond}>
                <span className={css.topText}>04 Jul 2021 ∙ 8 min read</span>
                <h1 className={css.secondText}>How to design a product <br />
                    that can grow itself 10x in <br />
                     year:</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile2} src={profile2} alt="" />
                    <h1 className={css.name2}>Cruz Truong</h1>
                </div>
            </div>
            <div className={css.thirdBox}>
            <div className={css.headerThird}>
                <span className={css.topText}>19 Apr 2019 ∙ 8 min read</span>
                <h1 className={css.thirdText}>Any mechanical keyboard <br />
                    enthusiasts in design?</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile3} src={profile3} alt="" />
                    <h1 className={css.name}>Margaret Donnelly</h1>
                </div>
            </div>
        </div>
        <div className={css.boxes}>
            <div className={css.firstBox}>
                <div className={css.headerFirst}>
                    <span className={css.topText}>15 Dec 2020 ∙ 8 min read </span>
                    <h1 className={css.firstText}>Any mechanical keyboard <br />
                        enthusiasts in design?</h1>
                </div>
                <div className={css.user}>
                    <img className={css.profile1} src={profile1} alt="" />
                    <h1 className={css.name}>Maddox Fletcher</h1>
                </div>

            </div>
            <div className={css.secondBox}>
            <div className={css.headerSecond}>
                <span className={css.topText}>04 Jul 2021 ∙ 8 min read</span>
                <h1 className={css.secondText}>How to design a product <br />
                    that can grow itself 10x in <br />
                     year:</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile2} src={profile2} alt="" />
                    <h1 className={css.name2}>Cruz Truong</h1>
                </div>
            </div>
            <div className={css.thirdBox}>
            <div className={css.headerThird}>
                <span className={css.topText}>19 Apr 2019 ∙ 8 min read</span>
                <h1 className={css.thirdText}>Any mechanical keyboard <br />
                    enthusiasts in design?</h1>
            </div>
                <div className={css.user}>
                    <img className={css.profile3} src={profile3} alt="" />
                    <h1 className={css.name}>Margaret Donnelly</h1>
                </div>
            </div>
        </div>
          </AliceCarousel>
          </div>
        </div>
    </div>

  )

  
}

export default LatestPosts