import { greeting } from "../src/cli.js";
import readlineSync from "readline-sync";

const game = (question) => {
  const userName = greeting();
  const roundsNumber = 3;
  for (let i = 1; i <= roundsNumber; i += 1) {
    const randomMin = 1;
    const randomMax = 101;
    const rightAnswer = question(randomMin, randomMax);
    const userAnswer = readlineSync.question("Your answer: ");

    if (rightAnswer === userAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default game;
