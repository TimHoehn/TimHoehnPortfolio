import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <p className="footer__title">Tim</p>
                <div className="footer__social">
                <a href="https://www.linkedin.com/in/thoehn/" target="_blank" className="footer__icon"><i className="bx bxl-linkedin" /></a>
                <a href="https://github.com/TimHoehn" target="_blank" className="footer__icon"><i className="bx bxl-github" /></a>
                </div>
                <p>timhoehn98@gmail.com</p>
            </footer>
        </div>
    )
}

export default Footer
