import React from 'react'
import style from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={style.contactContainer}>
            <div className={style.container2}>

               <div className={style.ReachContainer}>
                  <div><h1>Reach Out !</h1></div>
                    <p>Thanks for taking the time to reach out. Drop me a line below and I will personally respond as soon as possible.</p>
                   <div><h2>Email:<a href="mailto:cristianmmaquez@gmail.com">Send Email</a></h2></div> 
                   <div><h2>GitHub:<a href="https://github.com/Cristian-Dot-Creator">Repo</a></h2></div>
                   <div><h2>Phone:<a>910-789-9686</a></h2></div>
               </div>

            
                <h2></h2>



            </div>


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
