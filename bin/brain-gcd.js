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

const textQuestionGcd = (firstNumber, secondNumber) => {
  return `Find the greatest common divisor of given numbers. 
Question: ${firstNumber} ${secondNumber}
Your answer: `;
};

const userAnswerToQuestion = (question) => {
  const userAnswer = readlineSync.question(question);
  return userAnswer;
};

const rigthAnswerToQuenstionGcd = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber);
  let gcdNumber = 1;
  let divider = 2;
  let newFirstNumber = firstNumber;
  let newSecondNumber = secondNumber;
  
  while (divider <= minNumber) {
    if (newFirstNumber % divider === 0 && newSecondNumber % divider === 0) {
      while (newFirstNumber % divider === 0 && newSecondNumber % divider === 0) {
        gcdNumber = gcdNumber * divider;
        newFirstNumber = newFirstNumber / divider;
        newSecondNumber = newSecondNumber / divider;
      }
    }
    divider += 1;
  }
  return `${String(gcdNumber)}`;
};

const gameGcd = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomMin = 1;
    const randomMax = 100;
    const randonInt1 = getRandomInt(randomMin, randomMax);
    const randomInt2 = getRandomInt(randomMin, randomMax);
    const userAnswer = userAnswerToQuestion(
      textQuestionGcd(randonInt1, randomInt2)
    );
    const rightAnswer = rigthAnswerToQuenstionGcd(randonInt1, randomInt2);

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
