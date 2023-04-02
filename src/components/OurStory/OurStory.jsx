import React from 'react'
import Title from '../Title/Title'
import Txt from '../Txt/Txt'
import css from './OurStory.module.css'



function OurStory() {
    return (
        <div className={css.wrapper + ' container'}>
            <div className={css.top}>
                <Title title="Our Story" />
                <p className={css.top__txt}>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
            </div>
            <div className={css.bottom}>
                <div className={css.bottom_right}>
                    <div className={css.space}></div>
                    <div className={css.active}>
                        <div className={css.border}>
                            <div className={css.line}>
                            </div>
                        </div>
                        <div className={css.active_text}>
                            <p className={css.number}>2021</p>
                            <h4 className={css.title}>Business Conception</h4>
                            <p className={css.txt}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                        </div>
                    </div>
                </div>
                <div className={css.bottom_left}>
                    <div className={css.active}>
                        <div className={css.active_textLeft}>
                            <p className={css.number2}>2020</p>
                            <h4 className={css.title}>Legal Rewiew</h4>
                            <p className={css.txt__left}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                        </div>
                        <div className={css.border2}>
                            <div className={css.line}>
                            </div>
                        </div>
                    </div>
                    <div className={css.space}>
                    </div>
                </div>
                <div className={css.bottom_right}>
                    <div className={css.space}></div>
                    <div className={css.active}>
                        <div className={css.border3}>
                            <div className={css.line}>
                            </div>
                        </div>
                        <div className={css.active_text}>
                            <p className={css.number3}>2019</p>
                            <h4 className={css.title}>Infrastucture Design</h4>
                            <p className={css.txt}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                        </div>
                    </div>
                </div>
                <div className={css.bottom_left}>
                    <div className={css.active}>
                        <div className={css.active_textLeft}>
                            <p className={css.number4}>2018</p>
                            <h4 className={css.title}>Company Established</h4>
                            <p className={css.txt__left}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                        </div>
                        <div className={css.border4}>
                            <div className={css.line}>
                            </div>
                        </div>
                    </div>
                    <div className={css.space}>
                    </div>
                </div>
            </div>
            <div className={css.minibottom}>
                <div className={css.active}>
                    <div className={css.border}>
                        <div className={css.line}>
                        </div>
                    </div>
                    <div className={css.active_text}>
                        <p className={css.number}>2021</p>
                        <h4 className={css.title}>Business Conception</h4>
                        <p className={css.txt}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                    </div>
                </div>
                <div className={css.active}>
                    <div className={css.border2}>
                        <div className={css.line}>
                        </div>
                    </div>
                    <div className={css.active_text}>
                        <p className={css.number2}>2020</p>
                        <h4 className={css.title}>Legal Rewiew</h4>
                        <p className={css.txt}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                    </div>
                    
                </div>
                <div className={css.active}>
                        <div className={css.border3}>
                            <div className={css.line}>
                            </div>
                        </div>
                        <div className={css.active_text}>
                            <p className={css.number3}>2019</p>
                            <h4 className={css.title}>Infrastucture Design</h4>
                            <p className={css.txt}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                        </div>
                </div>
                <div className={css.active}>
                    <div className={css.border4}>
                            <div className={css.line}>
                            </div>
                        </div>
                        <div className={css.active_text}>
                            <p className={css.number4}>2018</p>
                            <h4 className={css.title4}>Company Established</h4>
                            <p className={css.txt}>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default OurStory