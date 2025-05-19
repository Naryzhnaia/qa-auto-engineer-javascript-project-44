import getRandomInt from '../src/getnumber.js'
import playGame from '../src/index.js'

const descriptionOfQuestion = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  return number % 2 === 0 ? true : false
}
const getQuestionAndAnswer = () => {
  const randomMin = 1
  const randomMax = 101
  const question = getRandomInt(randomMin, randomMax)
  const rightAnswer = isEven(question) === true ? 'yes' : 'no'
  return [question, rightAnswer]
}

export default () => {
  playGame(descriptionOfQuestion, getQuestionAndAnswer)
}
