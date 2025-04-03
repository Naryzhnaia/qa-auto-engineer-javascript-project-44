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
  const userAnswer =
    readlineSync.question(`Answer 'yes' if the number is even, otherwise answer 'no'. 
Question: ${number}
Your answer: `);
  return userAnswer;
};

const rigthAnswerToQuenstionEvenOrOdd = (number) => {
  return (number % 2 === 0) ? 'yes' : 'no';
};

const gameEvenOrOdd = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomMin = 1;
    const randomMax = 101;
    const randonInt = getRandomInt(randomMin, randomMax);
    const userAnswer = questionEvenOrOdd(randonInt);
    const rightAnswer = rigthAnswerToQuenstionEvenOrOdd (randonInt);

    if (rightAnswer === userAnswer) {
      console.log(`Correct!`);
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

gameEvenOrOdd();