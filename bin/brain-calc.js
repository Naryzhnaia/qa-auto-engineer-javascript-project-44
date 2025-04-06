#!/usr/bin/env node

import { getRandomInt } from "../src/getnumber.js";
import game from "../src/index.js";

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

game(textQuestionMathproblem);