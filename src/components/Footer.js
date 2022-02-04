import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <div className="footer"> 
        <SocialIcon className="github" url="https://github.com/NicoleWrz" target="_blank"></SocialIcon>
        <SocialIcon className="linked" url="https://www.linkedin.com/in/nicole-wrzosek-9890b6162/" target="_blank"></SocialIcon>
        <SocialIcon className="email"url="mailto: nicolew96@gmail.com" target="_blank"></SocialIcon>
        </div>
    )
}