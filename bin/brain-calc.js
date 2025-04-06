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

const textQuestionMathproblem = (min, max) => {
  const arithmeticOperator = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * arithmeticOperator.length);
  const randomInt1 = getRandomInt(min, max);
  const randomInt2 = getRandomInt(min, max);
  const mathProblem = `${randomInt1} ${arithmeticOperator[randomIndex]} ${randomInt2}`;
  console.log(`What is the result of the expression? 
Question: ${mathProblem}`);

  const rightAnswer = `${eval(mathProblem)}`;
  return rightAnswer;
};

const userAnswerToQuestion = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const gameCalculator = () => {
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const randomMin = 1;
    const randomMax = 101;
    const rightAnswer = textQuestionMathproblem(randomMin, randomMax);
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

gameCalculator();
