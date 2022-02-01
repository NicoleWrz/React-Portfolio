import React from "react";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
    return (
        <section id="" className="">
          <div className="">
            <div className="">
              <ChatAlt2Icon className="" />
              <h1 className="">
                Contact Me
              </h1>
            </div>
            <div className="">
                <SocialIcon url="https://github.com/NicoleWrz" target="_blank" bgColor="#DCA8B8" style={{ height: 100, width: 100 }}/>
                <SocialIcon url="https://www.linkedin.com/in/nicole-wrzosek-9890b6162/" target="_blank" fgColor="#ffffff" style={{ height: 100, width: 100 }}/>
                <SocialIcon url="mailto: nicolew96@gmail.com" network="mailto" target="_blank" bgColor="#CBB4CF" style={{ height: 100, width: 100 }} />
            </div>
          </div>
        </section>
      );
}