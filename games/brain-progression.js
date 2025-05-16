import getRandomInt from '../src/getnumber.js';
import playGame from '../src/index.js';

const descriptionOfQuestion = 'What number is missing in the progression?';

const getMathProblemAndAnswer = () => {
  const randomMin = 1;
  const randomMax = 101;
  const missingNumber = '..';
  const lengthProgression = 10;
  const randomIndex = Math.floor(Math.random() * lengthProgression);
  const firstTermProgression = getRandomInt(randomMin, randomMax);
  const commonDifference = getRandomInt(randomMin, randomMax);
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

  const question = `${arithmeticProgression}`;
  const rightAnswer = String(firstTermProgression + commonDifference * randomIndex);
  return [question, rightAnswer];
};

export default () => {
  playGame(descriptionOfQuestion, getMathProblemAndAnswer);
};
