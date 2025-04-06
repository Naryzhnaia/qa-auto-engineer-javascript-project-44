#!/usr/bin/env node

import { getRandomInt } from "../src/getnumber.js";
import game from "../src/index.js";

const textQuestionProgression = (min, max) => {
  const missingNumber = "..";
  const lengthProgression = 10;
  const randomIndex = Math.floor(Math.random() * lengthProgression);
  const firstTermProgression = getRandomInt(min, max);
  const commonDifference = getRandomInt(min, max);
  let arithmeticProgression = '';
  let termProgression = 0;
  for (let i = 0; i < lengthProgression; i += 1) {
    termProgression = firstTermProgression + commonDifference * i;
    if (i === randomIndex) {
      termProgression = missingNumber;
    }
    if (i === 0) {
    arithmeticProgression = `${termProgression}`;
    } else {
    arithmeticProgression = `${arithmeticProgression} ${termProgression}`;
    }
  }
  console.log(`What number is missing in the progression? 
Question: ${arithmeticProgression}`);

  const rightAnswer = firstTermProgression + commonDifference * randomIndex;
  return String(rightAnswer);
};

game(textQuestionProgression);
