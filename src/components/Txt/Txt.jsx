import React from 'react'
import css from './Txt.module.css'

function Txt(props) {
  return (
    <div className={css.txt}>
        {props.txt}
    </div>
  )
}

export default Txt