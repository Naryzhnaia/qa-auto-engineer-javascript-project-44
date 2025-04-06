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

const textQuestionProgression = (min, max) => {
  const missingNumber = '..';
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
    arithmeticProgression = `${arithmeticProgression} ${termProgression}`;
  }
  console.log(`What number is missing in the progression? 
Question: ${arithmeticProgression}`);

  const rightAnswer = firstTermProgression + commonDifference * randomIndex;
  return rightAnswer;
};

const userAnswerToQuestion = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const gameProgression = () => {
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const randomMin = 1;
    const randomMax = 100;
    const rightAnswer = String(textQuestionProgression(randomMin, randomMax));
    const userAnswer = userAnswerToQuestion();

    if (rightAnswer === userAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

gameProgression();