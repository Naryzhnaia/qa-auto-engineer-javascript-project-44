import getRandomInt from '../utils.js'
import runGame from '../index.js'

const description = 'What is the result of the expression?'

const generateProblem = () => {
  const randomMin = 1
  const randomMax = 101
  const arithmeticOperator = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * arithmeticOperator.length)
  const randomInt1 = getRandomInt(randomMin, randomMax)
  const randomInt2 = getRandomInt(randomMin, randomMax)
  const question = `${randomInt1} ${arithmeticOperator[randomIndex]} ${randomInt2}`
  let rightAnswer
  switch (arithmeticOperator[randomIndex]) {
    case '+':
      rightAnswer = String(randomInt1 + randomInt2)
      break
    case '-':
      rightAnswer = String(randomInt1 - randomInt2)
      break
    case '*':
      rightAnswer = String(randomInt1 * randomInt2)
      break
    default:
      throw new Error(`Unknown arithmeticOperator: '${arithmeticOperator[randomIndex]}'!`)
  }
  return [question, rightAnswer]
}

export default () => {
  runGame(description, generateProblem)
}
