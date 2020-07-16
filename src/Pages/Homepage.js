import React from 'react'
import style from '../styles/home.module.css'
import '../styles/home.css'
import jsLogo from '../images/svg/js-brands.svg';
import NodeJS from '../images/svg/node-brands.svg';
import ReactJS from '../images/svg/react-brands.svg';
import Sass from '../images/svg/sass-brands.svg';
import Terminal from '../images/svg/terminal-solid.svg'
import Git from '../images/svg/github-brands.svg';

export default function Homepage() {
    return (
        <div>
          
        <div className={style.body}>
            <div className={style.container}> 

            <div class="Hero_Section">
        <div class="Hero_Section_Item">
            <h1>Fullstack Developer</h1>
            <p>I plan and code beautifully simple things, and I love what I do.</p>
            <a href="#projects"><button>View my work</button></a> 
        </div>

        <div class="Hero_Section_Item"></div>

    </div>
            </div>




            <div className={style.parent}>
            <div className={style.child}>
                <div className={style.p_c_1}>
                    
                    <h1>Back-end</h1>
                
                <p>I like Backend beacuse It's working on the things that make the frontend run well.</p>
                
                <h2>Languages I speak:</h2>
                <p>Node.js, MySQL</p>
                <img src={NodeJS} alt="Node" className={style.Logos}/>

                </div>


                <div className={style.p_c_2}><h1>Front-end </h1>

                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h2>Languages I speak:</h2>
                <p>Html,CSS, Javascript.JS, React.JS, SASS</p>
                <img src={jsLogo} alt="js Logo" className={style.Logos}/>
                <img src={ReactJS} alt="js Logo" className={style.Logos}/>
                <img src={Sass} alt="js Logo" className={style.Logos}/>
                </div>
                


                <div className={style.p_c_3}><h1>Developer Tools Used</h1>
                <p>Essentials for every programer</p>
                
                <h2>Tools I use:</h2>
                <p>Github,Terminal</p>
                <img src={Terminal} alt="Node" className={style.Logos}/>
                <img src={Git} alt="Node" className={style.Logos}/>

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
                        <div className={style.portfolio_item}><h2>Travel Site</h2><button>Github</button>  <button>Site</button></div>
                        <div className={style.portfolio_item}><h2>Blog Site</h2><button>Github</button>  <button>Site</button></div>
                        <div className={style.portfolio_item}><h2>Tic-Tac-Toe</h2><button>Github</button>  <button>Site</button></div>
                        <div className={style.portfolio_item}><h2>Weather APP</h2><button>Github</button>  <button>Site</button></div>
                        <div className={style.portfolio_item}><h2>Econ Site</h2><button>Github</button>  <button>Site</button></div>
                        <div className={style.portfolio_item}><h2>Voice App</h2><button>Github</button>  <button>Site</button></div>

                </div>
            </div>
            </div>
        
            </div>

    )
}
