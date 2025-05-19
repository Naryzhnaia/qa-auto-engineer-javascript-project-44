import getRandomInt from '../utils.js'
import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return true
  }
  let divider = 2
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false
    }
    divider += 1
  }
  return true
}

const generateProblem = () => {
  const randomMin = 1
  const randomMax = 101
  const question = getRandomInt(randomMin, randomMax)
  const rightAnswer = isPrime(question) === true ? 'yes' : 'no'
  return [question, rightAnswer]
}

export default () => {
  runGame(description, generateProblem)
}
