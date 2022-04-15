import React from 'react';
import { FaComments } from 'react-icons/fa';

export default function ContactMe() {
    return(
        <div className="contact">
            <h2 className="contact-title"> <FaComments className="chaticon"/> Contact Me <FaComments className="chaticon"/> </h2>
            <div className="contact-components">
            <div className="email-info">
                <h4>Email</h4>
                <h6>nicolew96@gmail.com</h6>
            </div>
            <div className="phone-info">
                <h4>Phone</h4>
                <h6>201.407.8415</h6>
            </div>
            <div className="location-info">
                <h4>Location</h4>
                <h6>Parsippany, NJ</h6>
            </div>
            <div className="links-info">
                <h4>On The Web</h4>
                <h6><a href="https://www.linkedin.com/in/nicole-wrzosek">LinkedIn</a> &nbsp; | &nbsp;
                <a href="https://github.com/NicoleWrz">Github</a>
                </h6>
            </div>
            </div>
        </div>
    )
}