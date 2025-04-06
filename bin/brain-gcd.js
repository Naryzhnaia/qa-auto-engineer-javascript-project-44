#!/usr/bin/env node

import { getRandomInt } from "../src/getnumber.js";
import game from "../src/index.js";

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

game(textQuestionGcd);