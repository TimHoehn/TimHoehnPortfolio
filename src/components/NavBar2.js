import React, { Component } from 'react';
import Logo from './img/logo.png'

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }
    

    render(){
        return(
            <div>
                <header className="l-header">
                    <nav className="nav bd-grid">
                        <div>
                            <a href="#home" className="nav__logo">
                                <img src={Logo} className="img-responsive logo" alt=""/>
                            </a>
                        </div>

                        <div className={this.state.clicked ? 'nav__menu show' : 'nav__menu'}>
                            <ul className="nav__list">
                                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
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

                        <div className="nav__toggle" id="nav-toggle" onClick={this.handleClick}>
                            {/* <i className="bx bx-menu"></i>  */}
                            <i className={this.state.clicked ? 'bx bx-menu' : 'bx bx-menu'}></i>
                        </div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar