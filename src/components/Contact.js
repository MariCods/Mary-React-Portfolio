import React from 'react';
import './styles/Contact.css';
import Profile from '../components/styles/img/Pinkgirl.PNG';
function Contact() {
    const contactName = document.querySelector('[name="name"]');
    const contactEmail = document.querySelector('[name="email"]');
    const contactMessage = document.querySelector('[name="message"]');

    const emailSendEventHandler = async (event) => {
        // Your validation code here
        event.preventDefault();
        if (contactName && contactEmail && contactMessage == "") {
            alert("All fields must be filled out");
            return false;
          }
   document

        .querySelector('#contactForm')
        .addEventListener('submit', emailSendEventHandler);
    }
    return (
        <div class="contact-page">
            <img class="contactImg" src={Profile} alt="me"></img>
            <form id="contactForm" method="POST" action="mail.php">
                <p>Please fill out this form and I will get back to you as soon as possible........</p>
                <label for="name" class="name">Name</label>
                <input type="text" name="name" placeholder="Your Name" required></input>
                <label for="email" class="email">Email</label>
                <input type="text" name="email" placeholder="Your Email" pattern="example@email.com" required></input>
                <label for="message" class="message">Message</label>
                <textarea type="message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;