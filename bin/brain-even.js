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

const questionEvenOrOdd = (number) => {
  const answer =
    readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". 
Question: ${number}
Your answer: `);
  return answer;
};

const isUserRight = (number, userAnswer) => {
  if (
    (number % 2 === 0 && userAnswer === "yes") ||
    (number % 2 !== 0 && userAnswer === "no")
  ) {
    return true;
  } else {
    return false;
  }
};

const gameEvenOrOdd = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomMin = 1;
    const randomMax = 101;
    const randonInt = getRandomInt(randomMin, randomMax);
    const userAnswer = questionEvenOrOdd(randonInt);
    const answerCorrectness = isUserRight(randonInt, userAnswer);

    if (answerCorrectness === true) {
      console.log(`Correct!`);
    } else {
      if (userAnswer === "no") {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
      } 
      if (userAnswer === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
      } else {
        console.log(`Your answer is wrong ;(`);
      }
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

gameEvenOrOdd();
