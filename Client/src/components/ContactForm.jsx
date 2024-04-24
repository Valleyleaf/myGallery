import React from "react";
import { useState } from "react";
import '../assets/css/Contact.css'

const ContactForm = () => {

    const [formInput, setformInput] = useState({
        subject: '',
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setformInput((prevData) => ({ ...prevData, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      };

      return(
        <div className="fade-in">
            <form
                name='contact'
                method="POST"
                data-netlify="true"
                onSubmit="submit"
                data-netlify-honeypot="bot-field"
            >
            
            <input type="hidden" name="form-name" value="contact"/>

            <div hidden>
                <input name="bot-field"/>
            </div>

                <h1 className="topText">Name</h1>
            <label>
                <input 
                className="inputArea"
                type="text" 
                name="name"
                value={formInput.subject}
                onChange={handleChange}
                placeholder="John Smith"
                />
            </label>

                <h1 className="topText">Email</h1>
            <label>
                <input 
                className="inputArea"
                type="email"
                name="email"
                value={formInput.email}
                onChange={handleChange}
                placeholder="jsmith@email.com"
                />
            </label>

                <h1 className="topText">Phone Number</h1>
            <label>
                <input 
                className="inputArea"
                type="tel"
                name="phone"
                value={formInput.phone}
                onChange={handleChange}
                placeholder="(xxx) xxx xxxx" 
                />
            </label>

                <h1 className="topText">Subject</h1>
            <label>
                <input
                className="inputArea"
                type="text"
                name='subject'
                value={formInput.name}
                onChange={handleChange}
                placeholder="Hello"
                />
            </label>

                <h1 className="topText">Message</h1>
            <label>
                <textarea
                className="textArea" 
                name="message"
                value={formInput.message}
                onChange={handleChange}
                placeholder="Talk to me"
                />
            </label>



            <button className='emailMeButton' type='submit'>Submit</button>
            </form>
        </div>
      );

};

export default ContactForm;