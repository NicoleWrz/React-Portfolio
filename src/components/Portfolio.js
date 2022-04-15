import React from 'react';
import { FaCode } from 'react-icons/fa';
import Food from "../images/FoodForDays.gif";
import Pokemon from "../images/pokefinder.gif"
import { Container } from "react-bootstrap";
import Project from "../Project";

export default function Portfolio() {

    const projects = [
      {
        title: "Food For Days",
        technologies: "JavaScript, Node, Express",
        description: "Users are presented with a list of cuisines with meals to choose from. They can save any recipe to their own profile after signing up/logging in.",
        gif: Food,
        github: "https://github.com/quynhndinh/Food-For-Days",
        link: "https://food-for-days.herokuapp.com/"
      },
      {
        title: "PokéFinder",
        technologies: "HTML, CSS, Javascript",
        description: "Users are presented with a card and a list of encounter locations of their desired Pokémon.",
        gif: Pokemon,
        github: "https://github.com/bchen41/PokeFinder",
        link: "https://bchen41.github.io/PokeFinder/"
      }
    ]

  
  )
}