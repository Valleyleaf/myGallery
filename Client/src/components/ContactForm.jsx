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
        <div>
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

            <label>
                <input
                className="inputArea"
                type="text"
                name='subject'
                value={formInput.name}
                onChange={handleChange}
                placeholder="Subject"
                />
            </label>

            <label>
                <input 
                className="inputArea"
                type="text" 
                name="name"
                value={formInput.subject}
                onChange={handleChange}
                placeholder="Name"
                />
            </label>

            <label>
                <input 
                className="inputArea"
                type="email"
                name="email"
                value={formInput.email}
                onChange={handleChange}
                placeholder="email"
                />
            </label>

            <label>
                <input 
                className="inputArea"
                type="tel"
                name="phone"
                value={formInput.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                />
            </label>

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