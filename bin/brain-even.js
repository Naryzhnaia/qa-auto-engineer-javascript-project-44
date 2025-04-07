#!/usr/bin/env node

import getRandomInt from '../src/getnumber.js';
import game from '../src/index.js';

const textQuestionEvenOrOdd = (min, max) => {
  const randomInt = getRandomInt(min, max);
  console.log(`Answer "yes" if the number is even, otherwise answer "no". 
Question: ${randomInt}`);

  const rightAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};

game(textQuestionEvenOrOdd);
