import React from 'react';
import style from '../styles/Resume.module.css'
import resume from '../images/Cristian - - Marquez Resume -1.jpg'

export default function Resume() {
    return (
        <div>
           <div className={style.resumeContainer}>
           <div className={style.ReachContainer}>
                <img src={resume} alt="resume" className={style.res}/>
               </div>

           </div>

        </div>
    )
}
