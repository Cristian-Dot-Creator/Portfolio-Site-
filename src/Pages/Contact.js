import React from 'react'
import style from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={style.contactContainer}>
            <div className={style.container2}></div>
            <div className={style.container}>
                        <p>Contact Me</p>   
            <div className={style.Login}>
                <input type="text" className={style.input} placeholder="Your Name"/>
                <input type="text" className={style.input} placeholder="Your Email"/>
            </div>
            <div className={style.subject}></div>
                <input type="text" className={style.input} placeholder="Subject"/>

                <div className={style.msg}>
            <textarea className={style.area} placeholder="Leave a Message"></textarea>
        </div>
        <div className={style.btn}>Send Message</div>

        
        </div>  

        </div>
    )
}
