#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const userName = greeting();

const createMathProblem = (min, max) => {
  const arithmeticOperator = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * arithmeticOperator.length);

  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt1 = Math.floor(Math.random() * (max - min) + min);
  const randomInt2 = Math.floor(Math.random() * (max - min) + min);
  const mathProblem = `${randomInt1} ${arithmeticOperator[randomIndex]} ${randomInt2}`;
  return mathProblem;
};

const textQuestionMathproblem = (mathProblem) => {
  return `What is the result of the expression? 
Question: ${mathProblem}
Your answer: `;
};

const userAnswerToQuestion = (question) => {
  const userAnswer = readlineSync.question(question);
  return userAnswer;
};

const rigthAnswerToQuenstionMathProblem = (mathProblem) => {
  return `${eval(mathProblem)}`;
};

const gameCalculator = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomMin = 1;
    const randomMax = 101;
    const randonMathProblem = createMathProblem(randomMin, randomMax);
    const userAnswer = userAnswerToQuestion(textQuestionMathproblem(randonMathProblem));
    const rightAnswer = rigthAnswerToQuenstionMathProblem(randonMathProblem);

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
