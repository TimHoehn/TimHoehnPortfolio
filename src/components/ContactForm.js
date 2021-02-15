import emailjs from "emailjs-com";
import React from 'react';

export default function ContactForm(){

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_ivr24fd', 'template_qyh5t8r', e.target, 'user_JddfhJ3Wry7K0CzVyeV46')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        <div>
            {/*===== CONTACT =====*/}
            <section className="contact section" id="contact">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact__container bd-grid">
                    <form onSubmit={sendEmail} action className="contact__form">
                        <input type="text" placeholder="Name" name="name" className="contact__input" />
                        <input type="mail" placeholder="Email" className="contact__input" name="email" />
                        <textarea placeholder="Message" name id cols={0} rows={10} className="contact__input" name="message" defaultValue={""} />
                        <input type="submit" defaultValue="Submit" className="contact__button button" />
                    </form>
                    </div>
                </section>
        </div>
    )
}