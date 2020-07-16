import React from 'react';
import style from '../styles/footer.module.css';
import LinkIn from '../images/svg/linkedin-brands.svg';
import Github from '../images/svg/github-brands.svg'

export default function Footer() {
    return (
        <div>
            <div className={style.foot}>
                <div className={style.foot_container}>
                    <div className={style.copyright}><h1>© Cristian's Portfolio 2020 | All Rights Reserved.</h1></div>
                    <div className={style.social_icons}><img src={LinkIn} alt="link" className={style.Logos}/>  <img src={Github} alt="link" className={style.Logos}/>     </div>
                </div>
            </div>
 
        </div>
    )
}
