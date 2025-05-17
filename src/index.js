import readlineSync from 'readline-sync'

const playGame = (descriptionOfQuestion, functionGame) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  const countRounds = 3
  for (let i = 1; i <= countRounds; i += 1) {
    const [question, rightAnswer] = functionGame()
    console.log(`${descriptionOfQuestion}`)
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
