import React from "react";
import Food from "../images/FoodForDays.gif";
import Pokemon from "../images/pokefinder.gif";
import Ecomm from "../images/e-commerce.gif";
import Employee from "../images/employee-tracker.gif";
import Redux from "../images/redux-store.gif";
import Social from "../images/social-network.gif";
import Techblog from "../images/tech-blog.gif";
import Weather from "../images/weather-dashboard.gif";
import { Container } from "react-bootstrap";
import Portfolio from "./Portfolio";
import { FaCode } from 'react-icons/fa';

export default function Projects() {
    const projects = [
        {
            title: "Food For Days",
            subtitle: "Javascript, Node, Express",
            description:
              "Users are presented with a list of cuisines with meals to choose from. They can save any recipe to their own profile after signing up/logging in.",
            image: Food,
            link: "https://food-for-days.herokuapp.com/",
            github: "https://github.com/quynhndinh/Food-For-Days"
          },
          {
            title: "PokéFinder",
            subtitle: "HTML, CSS, Javascript",
            description:
              "Users are presented with a card and a list of encounter locations of their desired Pokémon.",
            image: Pokemon,
            link: "https://bchen41.github.io/PokeFinder/",
            github: "https://github.com/bchen41/PokeFinder"
          },
          {
            title: "Tech Blog",
            subtitle: "Sequelize, Express, Handlebars, Javascript",
            description:
              "This project is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
            image: Techblog,
            link: "https://mvc-tech-blog5.herokuapp.com/",
            github: "https://github.com/NicoleWrz/Tech-Blog"
          },
          {
            title: "Social Network Api",
            subtitle: "Javascript, Express, MongoDB and Mongoose",
            description:
              "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
            image: Social,
            link: "https://github.com/NicoleWrz/Social-Network-Api",
            github: "https://github.com/NicoleWrz/Social-Network-Api"
          },
          {
            title: "Redux Store",
            subtitle: "React, Redux, Stripe",
            description:
              "E-commerce website using React, Redux and Stripe that allows user to login, purchase items and see their order history.",
            image: Redux,
            link: "https://my-redux-store.herokuapp.com/",
            github: "https://github.com/NicoleWrz/Redux-Store"
          
          },
          {
            title: "E-Commerce MySQL",
            subtitle: "MySQL, Sequelize",
            description:
              "This project is an E-Commerce backend application that uses Sequelize to interact with MySQL database.",
            image: Ecomm,
            link: "https://github.com/NicoleWrz/E-Commerce-Back-End",
            github: "https://github.com/NicoleWrz/E-Commerce-Back-End"
          },
          {
            title: "Employee Tracker",
            subtitle: "Node, MySQL",
            description:
              "This project uses nodeJS, inquirer and MySQL to design and build a solution for managing a company's employees.",
            image: Employee,
            link: "https://github.com/NicoleWrz/Employee-tracker",
            github: "https://github.com/NicoleWrz/Employee-tracker"
          },
          {
            title: "Weather Dashboard",
            subtitle: "HTML, CSS, JavaScript",
            description:
              "Uses OpenWeather One Call Api to retrieve weather data for any city that a user wants.",
            image: Weather,
            link: "https://nicolewrz.github.io/Weather-Dashboard/",
            github: "https://github.com/NicoleWrz/Weather-Dashboard"
          },
    ];

    return (
        <div className="container text-center">
      <h2 className="contact-title"> <FaCode className="workicon"/> Portfolio <FaCode className="workicon"/> </h2>
      <Container>
        <div id="cards_landscape_wrap-2">
          <div className="portfolio-container row">
            {projects.map((project, index) => (
              <Portfolio key={index} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
    )
}