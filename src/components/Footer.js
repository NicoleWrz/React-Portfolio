import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <div className="footer"> 
        <SocialIcon className="github" url="https://github.com/NicoleWrz" target="_blank" bgColor="#DCA8B8" style={{ height: 75, width: 75 }}></SocialIcon>
        <SocialIcon className="linkedin" url="https://www.linkedin.com/in/nicole-wrzosek-9890b6162/" target="_blank" fgColor="#ffffff" style={{ height: 75, width: 75 }}></SocialIcon>
        <SocialIcon className="email"url="mailto: nicolew96@gmail.com" target="_blank" bgColor="#CBB4CF" style={{ height: 75, width: 75 }}></SocialIcon>
        </div>
    )
}