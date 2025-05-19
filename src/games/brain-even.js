import getRandomInt from '../utils.js'
import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  return number % 2 === 0 ? true : false
}
const generateProblem = () => {
  const randomMin = 1
  const randomMax = 101
  const question = getRandomInt(randomMin, randomMax)
  const rightAnswer = isEven(question) === true ? 'yes' : 'no'
  return [question, rightAnswer]
}

export default () => {
  runGame(description, generateProblem)
}
