import React from "react";
import { FaCheckCircle, FaMicrochip } from 'react-icons/fa';


export default function Skills() {
    return(
        <div className="skills">
            <h2 className="skill-title"> <FaMicrochip className="microchip"/> Skills &amp; Technologies <FaMicrochip className="microchip"/></h2>
                <div className="list">
                    <ul>
                        <li><FaCheckCircle className="checkmark"/> JavaScript</li>
                        <li><FaCheckCircle className="checkmark"/> React</li>
                        <li><FaCheckCircle className="checkmark"/> HTML</li>
                        <li><FaCheckCircle className="checkmark"/> CSS</li>
                        <li><FaCheckCircle className="checkmark"/> Express</li>
                        <li><FaCheckCircle className="checkmark"/> MongoDB</li>
                    </ul>
                    <ul>
                        <li><FaCheckCircle className="checkmark"/> Mongoose</li>
                        <li><FaCheckCircle className="checkmark"/> GraphQL</li>
                        <li><FaCheckCircle className="checkmark"/> MySQL</li>
                        <li><FaCheckCircle className="checkmark"/> Node.js</li>
                        <li><FaCheckCircle className="checkmark"/> Heroku</li>
                        <li><FaCheckCircle className="checkmark"/> Git</li>
                    </ul>
                </div>
            </div>
    )
    
}
