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

const textQuestionGcd = (min, max) => {
  const randomInt1 = getRandomInt(min, max);
  const randomInt2 = getRandomInt(min, max);
  console.log(`Find the greatest common divisor of given numbers. 
Question: ${randomInt1} ${randomInt2}`);

  const minNumber = Math.min(randomInt1, randomInt2);
  let gcdNumber = 1;
  let divider = 2;
  let newFirstNumber = randomInt1;
  let newSecondNumber = randomInt2;

  while (divider <= minNumber) {
    if (newFirstNumber % divider === 0 && newSecondNumber % divider === 0) {
      while (
        newFirstNumber % divider === 0 &&
        newSecondNumber % divider === 0
      ) {
        gcdNumber = gcdNumber * divider;
        newFirstNumber = newFirstNumber / divider;
        newSecondNumber = newSecondNumber / divider;
      }
    }
    divider += 1;
  }
  const rightAnswer = `${String(gcdNumber)}`;
  return rightAnswer;
};

const userAnswerToQuestion = () => {
  const userAnswer = readlineSync.question("Your answer: ");
  return userAnswer;
};

const gameGcd = () => {
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const randomMin = 1;
    const randomMax = 100;
    const rightAnswer = textQuestionGcd(randomMin, randomMax);
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

gameGcd();