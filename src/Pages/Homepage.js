import React from 'react'
import style from '../styles/home.module.css'
import '../styles/home.css'
import jsLogo from '../images/svg/js-brands.svg';

export default function Homepage() {
    return (
        <div>
          
        <div className={style.body}>
            <div className={style.container}> 

            <div class="Hero_Section">
        <div class="Hero_Section_Item">
            <h1>FULL STACK DEVEOLPER</h1>
            <p>I plan and code beautifully simple things, and I love what I do.</p>
            <a href="#projects"><button>View my work</button></a> 
        </div>

        <div class="Hero_Section_Item"></div>

    </div>
            </div>




            <div className={style.parent}>
            <div className={style.child}>
                <div className={style.p_c_1}>
                    
                    <h1>Back-end Developer</h1>
                
                <p>I like Backend beacuse it's cool to be actually working on the things that make the frontend run well.</p>
                
                <h2>Languages I speak:</h2>
                <p>Node.js, MySQL</p>
                

                </div>


                <div className={style.p_c_2}><h1>Front-end Developer</h1>

                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h2>Languages I speak:</h2>
                <p>Html,CSS, Javascript.JS, React.JS, SASS</p>
                <img src={jsLogo} alt="js Logo" className={style.javaScriptLogo}/>
                </div>
                


                <div className={style.p_c_3}><h1>Developer Tools Used</h1>
                <p>Essentials for every programer</p>
                
                <h2>Languages I speak:</h2>
                <p>Github,Terminal</p>

                </div>
                </div>    
            </div>
            
            <div className={style.portfolios} id="projects">
                <div className={style.title_2}>
                    <h1>My Recent Work</h1>
                    <p>Here are a few Designs Projects</p>
                </div>

                
{/* Bottom Section with Portfolio Project */}
                <div className={style.portfolio_container}>
                        <div className={style.portfolio_item}>Travel Site</div>
                        <div className={style.portfolio_item}>Blog Site</div>
                        <div className={style.portfolio_item}>Tic-Tac-Toe</div>
                        <div className={style.portfolio_item}>Weather APP</div>
                        <div className={style.portfolio_item}>Econ Site</div>
                        <div className={style.portfolio_item}>Voice App</div>

                </div>
            </div>
            </div>
        
            </div>

    )
}
