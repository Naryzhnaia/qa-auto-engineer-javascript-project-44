import getRandomInt from '../src/getnumber.js';
import playGame from '../src/index.js';

const descriptionOfQuestion = 'What number is missing in the progression?';

const makeProgression = (firstTerm, commonDifference, index, progressionLength) => {
  const missingNumber = '..';
  let arithmeticProgression = '';
  let termProgression = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    termProgression = firstTerm + commonDifference * i;
    if (i === index) {
      termProgression = missingNumber;
    }
    if (i === 0) {
      arithmeticProgression = `${termProgression}`;
    } else {
      arithmeticProgression = `${arithmeticProgression} ${termProgression}`;
    }
  }
  return arithmeticProgression;
};

const getMathProblemAndAnswer = () => {
  const randomMin = 1;
  const randomMax = 101;
  const progressionLength = 10;
  const randomIndex = Math.floor(Math.random() * progressionLength);
  const firstTerm = getRandomInt(randomMin, randomMax);
  const commonDifference = getRandomInt(randomMin, randomMax);
  const question = makeProgression(firstTerm, commonDifference, randomIndex, progressionLength);
  const rightAnswer = String(firstTerm + commonDifference * randomIndex);
  return [question, rightAnswer];
};

export default () => {
  playGame(descriptionOfQuestion, getMathProblemAndAnswer);
};
