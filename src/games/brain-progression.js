import getRandomInt from '../utils.js'
import playGame from '../index.js'

const description = 'What number is missing in the progression?'

const makeProgression = (firstTerm, commonDifference, index, progressionLength) => {
  const missingTerm = '..'
  let termProgression
  const arithmeticProgression = []
  for (let i = 0; i < progressionLength; i += 1) {
    termProgression = firstTerm + commonDifference * i
    if (i === index) {
      arithmeticProgression.push(missingTerm)
      continue
    }
    arithmeticProgression.push(termProgression)
  }
  return arithmeticProgression.join(' ')
}

const getMathProblemAndAnswer = () => {
  const randomMin = 1
  const randomMax = 101
  const progressionLength = 10
  const randomIndex = Math.floor(Math.random() * progressionLength)
  const firstTerm = getRandomInt(randomMin, randomMax)
  const commonDifference = getRandomInt(randomMin, randomMax)
  const question = makeProgression(firstTerm, commonDifference, randomIndex, progressionLength)
  const rightAnswer = String(firstTerm + commonDifference * randomIndex)
  return [question, rightAnswer]
}

export default () => {
  playGame(description, getMathProblemAndAnswer)
}
