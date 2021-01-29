import React from 'react'
import PortrateOne from './img/PortratCroped.png'
import PortrateTwo from './img/portrat.JPG'
import WorkGif from './img/computerGif.gif'
import Work from './img/work1.jpg'
import ScrollReveal from 'scrollreveal'

const Body = () => {
    
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.home__title',{}); 
    sr.reveal('.button',{delay: 200}); 
    sr.reveal('.home__img',{delay: 400}); 
    sr.reveal('.home__social-icon',{ interval: 200}); 

    /*SCROLL ABOUT*/
    sr.reveal('.about__img',{}); 
    sr.reveal('.about__subtitle',{delay: 400}); 
    sr.reveal('.about__text',{delay: 400}); 

    /*SCROLL SKILLS*/
    sr.reveal('.skills__subtitle',{}); 
    sr.reveal('.skills__text',{}); 
    sr.reveal('.skills__data',{interval: 200}); 
    sr.reveal('.skills__img',{delay: 600});

    /*SCROLL WORK*/
    sr.reveal('.work__img',{interval: 200}); 

    /*SCROLL CONTACT*/
    sr.reveal('.contact__input',{interval: 200}); 


    return (
        <div>
            
            <main className="l-main">

                {/*===== Home =====*/}
                <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Tim Hoehn</span><br /> Web Developer</h1>
                    <a href="#contact" className="button">Contact</a>
                </div>
                <div className="home__social">
                    <a href="https://www.linkedin.com/in/thoehn/" target="_blank" className="home__social-icon"><i className="bx bxl-linkedin" /></a>
                    <a href="https://github.com/TimHoehn" target="_blank" className="home__social-icon"><i className="bx bxl-github" /></a>
                </div>
                <div className="home__img">    
                    <img src={PortrateOne} alt="" />
                </div>
                </section>

                {/*===== About =====*/}
                <section className="about section " id="about">
                    <h2 className="section-title">About</h2>
                    <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={PortrateTwo} alt="" />
                    </div>
                    <div>
                        <h2 className="about__subtitle">I'm Tim</h2>
                        <p className="about__text">Full Stack web developer seeking a 
                        position with a growing organization where I can learn and make a positive impact 
                        launching a career as a successful developer. Adept in front-end framework in conjunction 
                        with functional design. Currently attaining proficiency  in back-end functionality, API’s, and data structures. 
                        </p>           
                    </div>                                   
                    </div>
                </section>

                {/*===== SKILLS =====*/}
                <section className="skills section" id="skills">
                    <h2 className="section-title">Hard Skills</h2>
                    <div className="skills__container bd-grid">          
                    <div>
                        {/* <h2 class="skills__subtitle">Profesional Skills</h2>
                                    <p class="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p> */}
                        <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-html5 skills__icon" />
                            <span className="skills__name">HTML</span>
                        </div>
                        <div className="skills__bar skills__html">
                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div>
                        </div>
                        <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-css3 skills__icon" />
                            <span className="skills__name">CSS</span>
                        </div>
                        <div className="skills__bar skills__css">
                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                        </div>
                        <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-javascript skills__icon" />
                            <span className="skills__name">JAVASCRIPT</span>
                        </div>
                        <div className="skills__bar skills__js">
                        </div>
                        <div>
                            <span className="skills__percentage">65%</span>
                        </div>
                        </div>
                        <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxs-paint skills__icon" />
                            <span className="skills__name">BOOTSTRAP</span>
                        </div>
                        <div className="skills__bar skills__ux">
                        </div>
                        <div>
                            <span className="skills__percentage">55%</span>
                        </div>
                        </div>
                    </div>
                    <div>              
                        <img src={WorkGif} alt="" className="skills__img" />
                    </div>
                    </div>
                </section>


                {/*===== WORK =====*/}
                <section className="work section" id="work">
                    <h2 className="section-title">Work</h2>
                    <div className="work__container bd-grid">
                    <div className="work__img">
                        <img src={Work} alt="" />  
                    </div>
                    <div className="work__img">
                        <img src={Work} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={Work} alt="" />
                    </div>
                    </div>
                </section>


                {/*===== CONTACT =====*/}
                <section className="contact section" id="contact">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact__container bd-grid">
                    <form action className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="mail" placeholder="Email" className="contact__input" />
                        <textarea placeholder="Message" name id cols={0} rows={10} className="contact__input" defaultValue={""} />
                        <input type="button" defaultValue="Submit" className="contact__button button" />
                    </form>
                    </div>
                </section>

            </main>



        </div>
    )
}

export default Body
