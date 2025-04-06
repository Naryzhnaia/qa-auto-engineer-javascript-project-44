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

const textQuestionPrimeNumber = (min, max) => {
  const randomInt = getRandomInt(min, max);
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no". 
Question: ${randomInt}`);

  if (randomInt < 2) {
    const rightAnswer = "yes";
    return rightAnswer;
  }

  let divider = 2;
  while (divider <= randomInt / 2) {
    if (randomInt % divider === 0) {
      const rightAnswer = "no";
      return rightAnswer;
    }
    divider += 1;
  }
  const rightAnswer = 'yes';
  return rightAnswer;
};

const userAnswerToQuestion = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const gamePrimeNumber = () => {
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const randomMin = 1;
    const randomMax = 100;
    const rightAnswer = textQuestionPrimeNumber(randomMin, randomMax);
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

gamePrimeNumber();
