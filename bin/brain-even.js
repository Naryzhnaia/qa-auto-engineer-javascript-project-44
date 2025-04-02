#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const userName = greeting();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const questionEvenOrOdd = () => {
  const randonInt = getRandomInt(1, 101);
  const answer =
    readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". 
        Question: ${randonInt}
        Your answer: `);
  if (randonInt % 2 === 0 && answer === "yes") {
    return "User is right";
  }
  if (randonInt % 2 !== 0 && answer === "no") {
    return "User is right";
  } else {
    console.log(`Wrong answer ;(. Correct answer was another. 
Let's try again, ${userName}!`);
    return "User is wrong";
  }
};

const gameEvenOrOdd = () => {
  
  for (let i = 1; i <= 3; i += 1) {
    const answer = questionEvenOrOdd();
    if (answer === "User is right") {
      console.log(`Correct!`);
    } else {
      return "User loses";
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

gameEvenOrOdd();