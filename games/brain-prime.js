import getRandomInt from '../src/getnumber.js'
import playGame from '../src/index.js'

const descriptionOfQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".'

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

const getMathProblemAndAnswer = () => {
  const randomMin = 1
  const randomMax = 101
  const question = getRandomInt(randomMin, randomMax)
  const rightAnswer = isPrime(question) === true ? 'yes' : 'no'
  return [question, rightAnswer]
}

export default () => {
  playGame(descriptionOfQuestion, getMathProblemAndAnswer)
}
