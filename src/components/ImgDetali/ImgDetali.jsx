import React from 'react' 
import css from './ImgDetali.module.css' 
// import back from '../../images/mainImg.svg' 
import arrow from "../../assets/Details/rightArrow.svg" 
 
function ImgDetail() { 
  return ( 
    <div className={css.wrapper}> 
        <div className={css.back}> 
 
        </div> 
        <div className={css.pages}> 
            <p>Home</p> 
            <img src={arrow} alt="" /> 
            <p>blog</p> 
            <img src={arrow} alt="" /> 
            <p className={css.greyText}>The Complete Digital Marketing Course - 12 Courses in 1 
            {/* responsive The Complete Digital Marketing... */} 
            </p> 
        </div> 
        <hr className={css.topHR}/> 
    </div> 
  ) 
} 
 
export default ImgDetail