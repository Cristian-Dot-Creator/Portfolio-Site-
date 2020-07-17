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
            <p> A recent graduate from the Road to Hire Program. A 6-month rigorous boot Camp, where I learned multiple coding Languages and expanded on my Professional Development skills.     
                I plan and code beautifully simple things, and I love what I do.</p>
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
                
                <h2>Languages:</h2>
                <p>Node.js, MySQL</p>
                <img src={NodeJS} alt="Node" className={style.Logos}/>

                </div>


                <div className={style.p_c_2}><h1>Front-end </h1>

                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h2>Languages:</h2>
                <p>HTML, CSS, Javascript, React, SASS</p>
                <img src={jsLogo} alt="js Logo" className={style.Logos}/>
                <img src={ReactJS} alt="js Logo" className={style.Logos}/>
                <img src={Sass} alt="js Logo" className={style.Logos}/>
                </div>
                


                <div className={style.p_c_3}><h1>Developer Tools Used</h1>
                <p>Essentials for every programer</p>
                
                <h2>Tools:</h2>
                <p>Github, Terminal</p>
                <img src={Terminal} alt="Node" className={style.Logos}/>
                <img src={Git} alt="Node" className={style.Logos}/>

                </div>
                </div>    
            </div>
            
            <div className={style.portfolios} id="projects">
                <div className={style.title_2}>
                    <h1>My Recent Work</h1>
                    <p>Here are a few Projects</p>
                </div>

                
{/* Bottom Section with Portfolio Project */}
                <div className={style.portfolio_container}>
                        <div className={style.portfolio_item}><h2>Travel Site</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/TravelSite">Github</a></button><button><a href="https://gatewaytravelsite.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Blog</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/BlogApp">Github</a></button><button><a href="https://geekblog.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>TicTacToe</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/tictacotoe2nd">Github</a></button><button><a href="https://tictactoegamexo.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>TodoList</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/TodoList">Github</a></button><button><a href="https://cmmtodolist.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Speech App</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/SpeechApp">Github</a></button><button><a href="https://cristians-speech-app.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Tool Store</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/ReactProjectProducts">Github</a></button><button><a href="https://cristian-tool-store.netlify.app/">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Crunch Tech</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/Project-Redesign-A-Website">Github</a></button><button><a href="https://crunchtech.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Hotel App</h2>  <button><a href="https://github.com/Cristian-Dot-Creator/Cristian-sHotelAPP ">Github</a></button><button><a href="https://cristians-hotel-app.netlify.app">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Github Cards</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/GithubCards">Github</a></button><button><a href="https://githubsearchcards.netlify.app/">Site</a></button></div>
                        <div className={style.portfolio_item}><h2>Nav Bar</h2>  <button>  <a href="https://github.com/Cristian-Dot-Creator/NavBar">Github</a></button><button><a href="https://cristians-navbar.netlify.app">Site</a></button></div>

                </div>
            </div>
            </div>
        
            </div>

    )
}
