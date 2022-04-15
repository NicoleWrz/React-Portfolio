import React from "react";
import BTSQuiz from "../../assets/images/bts-quiz.png";
import DayPlanner from "../../assets/images/dayplanner.png";
import PokeFinder from "../../assets/images/pokefinder.png";

import AnimalPalace from "../../assets/images/animal-palace-home.png";
import Project from "../Project";
import { Container } from "react-bootstrap";

export default function Portfolio() {
  const projects = [
    {
      title: "Animal Palace",
      demoLink: "https://animal-palace-donation.herokuapp.com/",
      githubLink: "https://github.com/bchen41/Animal-Palace",
      projectImg: AnimalPalace,
      description: `Users can signup to donate and symbolically adopt animals in need.
      Stripe is used to successfully
      perform the donation payment.`,
      technologies: `React, MongoDB/Mongoose, GraphQL, Node.js, Javascript, CSS, Express.js, Heroku, Stripe
      `,
    },
    {
      title: "PokeFinder",
      demoLink: "https://bchen41.github.io/PokeFinder/",
      githubLink: "https://github.com/bchen41/PokeFinder",
      projectImg: PokeFinder,
      description: `A search will show a card and list of encounter locations of the desired Pokémon. A search history is rendered to view previous searches.`,
      technologies: `HTML, CSS, Javascript, ZURB Foundation, Poke/PokemonTCG APIs`,
    },
    {
      title: "Day Planner",
      demoLink: "https://bchen41.github.io/Day-Planner/",
      githubLink: "https://github.com/bchen41/Day-Planner",
      projectImg: DayPlanner,
      description: `A day planner where users can store important events into their busy
      work schedule so that they can manage their time effectively.`,
      technologies: `HTML, CSS, jQuery, Moment.js, Font Awesome, Bootstrap`,
    },
    {
      title: "BTS Quiz",
      demoLink: "https://bchen41.github.io/BTS-Quiz/",
      githubLink: "https://github.com/bchen41/BTS-Quiz",
      projectImg: BTSQuiz,
      description: `A simple quiz that will display questions with their corresponding
      answer choices
      one at a time. Highscores are viewable upon saving.`,
      technologies: `HTML, CSS, Javascript`,
    },
  ];
  return (
    <div className="container text-center">
      <h1>Portfolio</h1>
      <Container>
        <div id="cards_landscape_wrap-2">
          <div className="portfolio-container row">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}













// import React from "react";
// import Portfolio from "./Portfolio";
// import { Container } from "react-bootstrap";


// export default function Projects() {
//  const projects = [
//   {
//     title: "Food For Days",
//     subtitle: "Javascript, Node, Express",
//     description:
//       "Users are presented with a list of cuisines with meals to choose from. They can save any recipe to their own profile after signing up/logging in.",
//     image: "./FoodForDays.gif",
//     link: "https://food-for-days.herokuapp.com/",
//     github: "https://github.com/quynhndinh/Food-For-Days"
//   },
//   {
//     title: "PokéFinder",
//     subtitle: "HTML, CSS, Javascript",
//     description:
//       "Users are presented with a card and a list of encounter locations of their desired Pokémon.",
//     image: "./pokefinder.gif",
//     link: "https://bchen41.github.io/PokeFinder/",
//     github: "https://github.com/bchen41/PokeFinder"
//   },
//   {
//     title: "Tech Blog",
//     subtitle: "Sequelize, Express, Handlebars, Javascript",
//     description:
//       "This project is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
//     image: "./tech-blog.gif",
//     link: "https://mvc-tech-blog5.herokuapp.com/",
//     github: "https://github.com/NicoleWrz/Tech-Blog"
//   },
//   {
//     title: "Social Network Api",
//     subtitle: "Javascript, Express, MongoDB and Mongoose",
//     description:
//       "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
//     image: "./social-network.gif",
//     link: "https://github.com/NicoleWrz/Social-Network-Api",
//     github: "https://github.com/NicoleWrz/Social-Network-Api"
//   },
//   {
//     title: "Redux Store",
//     subtitle: "React, Redux, Stripe",
//     description:
//       "E-commerce website using React, Redux and Stripe that allows user to login, purchase items and see their order history.",
//     image: "./redux-store.gif",
//     link: "https://my-redux-store.herokuapp.com/",
//     github: "https://github.com/NicoleWrz/Redux-Store"
  
//   },
//   {
//     title: "E-Commerce MySQL",
//     subtitle: "MySQL, Sequelize",
//     description:
//       "This project is an E-Commerce backend application that uses Sequelize to interact with MySQL database.",
//     image: "./e-commerce.gif",
//     link: "https://github.com/NicoleWrz/E-Commerce-Back-End",
//     github: "https://github.com/NicoleWrz/E-Commerce-Back-End"
//   },
//   {
//     title: "Employee Tracker",
//     subtitle: "Node, MySQL",
//     description:
//       "This project uses nodeJS, inquirer and MySQL to design and build a solution for managing a company's employees.",
//     image: "./employee-tracker.gif",
//     link: "https://github.com/NicoleWrz/Employee-tracker",
//     github: "https://github.com/NicoleWrz/Employee-tracker"
//   },
//   {
//     title: "Weather Dashboard",
//     subtitle: "HTML, CSS, JavaScript",
//     description:
//       "Uses OpenWeather One Call Api to retrieve weather data for any city that a user wants.",
//     image: "./weather-dashboard.gif",
//     link: "https://nicolewrz.github.io/Weather-Dashboard/",
//     github: "https://github.com/NicoleWrz/Weather-Dashboard"
//   },
// ];

// //  const skills = [
// //   "JavaScript",
// //   "React",
// //   "Express",
// //   "MongoDB",
// //   "Mongoose",
// //   "GraphQL",
// //   "MySQL",
// //   "Node",
// //   "HTML",
// //   "CSS",
// //   "Heroku",
// //   "Git",
// // ]

// return (
//   <div className="container text-center">
//     <h1>Portfolio</h1>
//     <Container>
//       <div id="cards_landscape_wrap-2">
//         <div className="portfolio-container row">
//           {projects.map((projects, index) => (
//             <Projects key={index} {...projects} />
//           ))}
//         </div>
//       </div>
//     </Container>
//   </div>
// );

// };