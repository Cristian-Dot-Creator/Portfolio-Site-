import React from 'react'
import style from '../styles/footer.module.css'
export default function Footer() {
    return (
        <div>
            <div className={style.foot}>
                <div className={style.foot_container}>
                    <div className={style.copyright}><h1>© Cristian's Portfolio 2020 | All Rights Reserved.</h1></div>
                    <div className={style.social_icons}><p>icon icon2 icon3</p></div>
                </div>
            </div>
 
        </div>
    )
}
