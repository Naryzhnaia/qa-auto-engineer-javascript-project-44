const getRandomInt = (min, max) => {
  const randomMin = Math.ceil(min)
  const randomMax = Math.floor(max)
  const randomInt = Math.floor(Math.random() * (randomMax - randomMin) + randomMin)
  return randomInt
}

export default getRandomInt
