import React from 'react'
import css from './Contact.module.css'
import contact from '../../accsets/image/contact.png'
import location from '../../accsets/icon/location.png'
import link from '../../accsets/icon/link.png'
import mobile from '../../accsets/icon/mobile.png'
import email from '../../accsets/icon/email.png'
import clock from '../../accsets/icon/clock.png'
import line from '../../accsets/image/line.png'
import Title from '../Title/Title'

function Contact() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.information}>
                    <img className={css.img__infa} src={contact} alt="contact" />
                    <div className={css.visit}>
                        <img src={location} alt="location" />
                        <div className={css.information__text}>
                            <div className={css.text}>
                                <h6 className={css.information__title}>Visit us</h6>
                                <img className={css.link} src={link} alt="" />
                            </div>
                            <p className={css.information__txt}>508 Bridle Avenue Newnan, GA 30263</p>
                        </div>
                    </div>
                    <div className={css.call}>
                        <img src={mobile} alt="mobile" />
                        <div className={css.information__text}>
                            <h6 className={css.information__title}>Call us</h6>
                            <p className={css.information__txt}>(319) 555-0115</p>
                        </div>
                    </div>
                    <div className={css.talk}>
                        <img src={email} alt="email" />
                        <div className={css.information__text}>
                            <h6 className={css.information__title}>Talk to us</h6>
                            <p className={css.information__txt}>hello@example.com</p>
                        </div>
                    </div>
                    <div className={css.working}>
                        <img src={clock} alt="clock" />
                        <div className={css.information__text}>
                            <h6 className={css.information__title}>Working Hours</h6>
                            <p className={css.information__txt}>Mon-Fri: 9 am — 6 pm</p>
                        </div>
                    </div>
                </div>
                <div className={css.forma}>
                    <Title title="Ready To Get Started?" />
                    <div className={css.service}>
                        <p className={css.service__title}>Services</p>
                        <div className={css.chose}>
                            <div className={css.email}>
                                Email marketing
                            </div>
                            <div className={css.seo}>
                                SEO
                            </div>
                            <div className={css.social}>
                                Social Marketing
                            </div>
                            <div className={css.research}>
                                Research
                            </div>
                        </div>
                        <div className={css.name}>
                            <input className={css.firstName} type="text" placeholder='First Name' />
                            <input className={css.lastName} type="text" placeholder='Last Name' />
                        </div>
                        <input className={css.emailInp} type="email" placeholder='Email' />
                        <input className={css.number} type="number" placeholder='Phone number' />
                        <div className={css.company}>
                            <input className={css.compnany} type="text" placeholder='Company' />
                            <input className={css.website} type="text" placeholder='Website' />
                        </div>
                        <div className={css.budget}>
                            <p className={css.budget__title}>Your Budget</p>
                            <div className={css.slider}>
                                <input className={css.range} type="range" />
                            </div>
                        </div>
                        <div className={css.textArea}>
                            <textarea className={css.message} placeholder='Message'></textarea>
                        </div>
                    </div>
                    <button className={css.contact__btn}>Send Request</button>
                </div>
            </div>
        </div>
    )
}

export default Contact