import React from "react";
import contactForm from "./ContactForm"

export default function Contact(){
    return(
        <div className="formStyling">
            <h1>Contact me</h1>
                {contactForm()}
        </div>
    );
};