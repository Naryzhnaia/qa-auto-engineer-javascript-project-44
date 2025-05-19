import getRandomInt from '../utils.js'
import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const findGcd = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber)
  let gcdNumber = 1
  let divider = 2
  let newFirstNumber = firstNumber
  let newSecondNumber = secondNumber

  while (divider <= minNumber) {
    if (newFirstNumber % divider === 0 && newSecondNumber % divider === 0) {
      while (newFirstNumber % divider === 0 && newSecondNumber % divider === 0) {
        gcdNumber *= divider
        newFirstNumber /= divider
        newSecondNumber /= divider
      }
    }
    divider += 1
  }
  return gcdNumber
}

const generateProblem = () => {
  const randomMin = 1
  const randomMax = 101
  const randomInt1 = getRandomInt(randomMin, randomMax)
  const randomInt2 = getRandomInt(randomMin, randomMax)
  const question = `${randomInt1} ${randomInt2}`
  const rightAnswer = String(findGcd(randomInt1, randomInt2))
  return [question, rightAnswer]
}

export default () => {
  runGame(description, generateProblem)
}
