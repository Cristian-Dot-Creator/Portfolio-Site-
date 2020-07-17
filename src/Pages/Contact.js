import React from 'react'
import style from '../styles/contact.module.css'
import Git from '../images/svg/github-brands.svg';
import LinkIn from '../images/svg/linkedin-brands.svg';

export default function Contact() {
    return (
        <div className={style.contactContainer}>
            

            <div className={style.container}>
                        <p>Contact Me</p>   
            <div className={style.info}>
                <div className={style.info_container}>
                        <div className={style.info_img}></div>
                        <div className={style.info_links}>
                            <div className={style.info_links_Email}><h1><a href="mailto:cristianmmaquez@gmail.com">Email Me</a></h1></div>
                            <div className={style.info_links_phone}><h1>910-789-9686</h1></div>
                            <div className={style.info_links_linkin}><h1><a href="https://www.linkedin.com/mynetwork/">LINKEDIN</a></h1> </div>
                            <div className={style.info_links_GitHub}><h1><a href="https://github.com/Cristian-Dot-Creator">GITHUB</a></h1></div>
                            <div> <div className={style.logos}></div> <div className={style.logos}></div></div>
                        </div>
                </div>
            </div>
        
        </div>  

        </div>
    )
}
