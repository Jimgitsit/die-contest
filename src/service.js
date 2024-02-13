/**
 * Determines the probability of the first player to roll winning a dice game where the object of the game is to roll
 * a number k on a die with k sides.
 *
 * @param k - The number of sides on the die.
 * @returns {number} - The probability of the first player to roll winning the game as a percentage.
 */
const getProbability = (k) => {
  return Math.round(k / (2 * k - 1) * 10000) / 100;
}

/**
 * Returns an array of all the probabilities for getProbability for k values 6 to 99.
 *
 * @returns {number[]}
 */
const getAllProbabilities = () => {
  const probabilities = [];
  for (let k = 6; k <= 99; k++) {
    probabilities.push(getProbability(k));
  }

  return probabilities;
}

export {
  getProbability,
  getAllProbabilities
}
