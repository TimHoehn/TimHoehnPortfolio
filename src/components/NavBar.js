import React from 'react'
import Logo from './img/logo.png'

const NavBar = () => {

    const showMenu = (toggleId, navId) =>{
        console.log("showMenu")
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
            })
        }
    }
    // showMenu('nav-toggle','nav-menu')

    const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));





    return (
        <div>
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#home" className="nav__logo">
                        <img src={Logo} className="img-responsive logo" alt=""/>
                    </a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        <li>
                            <a href="#">

                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={showMenu.bind(this)}>
                    <i className="bx bx-menu"></i>
                </div>

            </nav>
        </header>
        </div>
    )
}

export default NavBar

