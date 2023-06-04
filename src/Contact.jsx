import React from 'react'
import './Contact.css';
import backip from './assetes/backip.jpg';
function Contact() {
  return (
        <div>
        <section class="contact">
          <img src={backip}/>    
           <div className='undercover'>
            <h3>Contact as</h3>
            <h2>Suriya Anand</h2>
            <h3>G-mail</h3>
            <h2>suriyanand03@gmail.com</h2>
            <h3>phone number</h3>
            <h2>9787668742</h2>
            <button><span>Email</span></button>
        </div>
        </section>
    </div>

  );
}

export default Contact