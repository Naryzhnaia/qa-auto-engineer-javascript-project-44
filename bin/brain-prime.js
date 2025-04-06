#!/usr/bin/env node

import { getRandomInt } from '../src/getnumber.js';
import game from '../src/index.js';

const textQuestionPrimeNumber = (min, max) => {
  const randomInt = getRandomInt(min, max);
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no". 
Question: ${randomInt}`);

  if (randomInt < 2) {
    const rightAnswer = 'yes';
    return rightAnswer;
  }

  let divider = 2;
  while (divider <= randomInt / 2) {
    if (randomInt % divider === 0) {
      const rightAnswer = 'no';
      return rightAnswer;
    }
    divider += 1;
  }
  const rightAnswer = 'yes';
  return rightAnswer;
};

game(textQuestionPrimeNumber);
