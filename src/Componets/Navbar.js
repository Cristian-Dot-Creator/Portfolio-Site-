import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar() {

    return (
        <div>
                    <header class="main-header">
                <div class="logo">
                    <a href="#">Cristian Marquez</a>
                </div>
        

    <input type="checkbox" class="menu-btn" id="menu-btn"/>
    <label for="menu-btn" class="menu-icon">
        <span class="menu-icon__line"></span>
    </label>

    <ul class="nav-links">
        <li class="nav-link">
            <a href="#projects"><Link to='../Pages/Homepage'>Projects</Link></a>
        </li>
        <li class="nav-link">
            <a href="#"><Link to='../Pages/Resume'>Resume</Link></a>
        </li>
        <li class="nav-link">
            <a href="#"><Link to='../Pages/Contact'>Contact Me</Link></a>
        </li>
       
    </ul>
</header>
        </div>
    )
}
