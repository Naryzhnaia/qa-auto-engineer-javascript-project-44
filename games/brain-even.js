import getRandomInt from '../src/getnumber.js';
import playGame from '../src/index.js';

const descriptionOfQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomMin = 1;
  const randomMax = 101;
  const question = getRandomInt(randomMin, randomMax);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  playGame(descriptionOfQuestion, getQuestionAndAnswer);
};
