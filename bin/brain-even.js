#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const userName = greeting();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min) + min);
  return randomInt;
};

const textQuestionEvenOrOdd = (min, max) => {
  const randomInt = getRandomInt(min, max);
  console.log(`Answer 'yes' if the number is even, otherwise answer 'no'. 
Question: ${randomInt}`);

  const rightAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};

const userAnswerToQuestion = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const gameEvenOrOdd = () => {
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const randomMin = 1;
    const randomMax = 101;
    const rightAnswer = textQuestionEvenOrOdd(randomMin, randomMax);
    const userAnswer = userAnswerToQuestion();
    
    if (rightAnswer === userAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

gameEvenOrOdd();
