import readlineSync from 'readline-sync'

const playGame = (description, askGameQuestion) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  const roundsCount = 3
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, rightAnswer] = askGameQuestion()
    console.log(`${description}`)
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (rightAnswer === userAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default playGame
