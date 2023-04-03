import React from 'react'
import Title from '../Title/Title'
import css from './CoreValues.module.css'
import like from '../../accsets/icon/like.svg'
import tranparency from '../../accsets/icon/ic_transparency.svg'
import reputation from '../../accsets/icon/ic_popularity.svg'
import cooperation from '../../accsets/icon/ic_agreement.svg'

function CoreValues(props) {

    function Card(props) {
        <div className={css.card}>
            <img src={props.img} alt="icon" />
            <div className={css.card_text}>
                <h5 className={css.card__title}>df</h5>
                <p className={css.card__txt}>gddfg</p>
            </div>
        </div>
    }

  return (
    <div className={css.wrapper}>
        <Title title="Our Core Values"/>
        <div className={css.cards}>
            <div className={css.card}>
                <img src={like} alt="like" />
                <div className={css.card_text}>
                    <h5 className={css.card__title}>Customer Satisfaction</h5>
                    <p className={css.card__txt}>Aenean urna dictum adipiscing nec, cras quisque.</p>
                </div>
            </div>  
            <div className={css.card}>
                <img src={tranparency} alt="tranparency" />
                <div className={css.card_text}>
                    <h5 className={css.card__title}>Transparency</h5>
                    <p className={css.card__txt}>Aenean urna dictum adipiscing nec, cras quisque.</p>
                </div>
            </div>  
            <div className={css.card}>
                <img src={reputation} alt="reputation" />
                <div className={css.card_text}>
                    <h5 className={css.card__title}>Reputation</h5>
                    <p className={css.card__txt}>Aenean urna dictum adipiscing nec, cras quisque.</p>
                </div>
            </div>  
            <div className={css.card}>
                <img src={cooperation} alt="cooperation" />
                <div className={css.card_text}>
                    <h5 className={css.card__title}>Cooperation</h5>
                    <p className={css.card__txt}>Aenean urna dictum adipiscing nec, cras quisque.</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default CoreValues