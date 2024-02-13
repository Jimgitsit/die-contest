import express from 'express';
import { getProbability, getAllProbabilities } from './service.js';

const app = express();

/**
 * Determines the probability of the first player to roll winning a dice game where the object of the game is to roll
 * a number k on a die with k sides.
 *
 * Specify the number of sides on the die with the k header. If k is not specified, the server will return an array of
 * all the probabilities for k values 6 to 99.
 *
 * Examples:
 * curl -H "k: 6" http://localhost:3000/williwin
 * Response is the probability of winning for a 6 sided die.
 *
 * curl http://localhost:3000/williwin
 * Response is an array of all the probabilities for k values 6 to 99 in ascending order.
 */
app.get('/williwin', (req, res) => {
  const k = req.headers.k;
  console.log('k: ', k);
  if (k) {
    if (k < 6 || k > 99) {
      res.status(400).send('Out of bounds error: k must be between 6 and 99');
    }
    res.contentType('application/json').send(JSON.stringify(getProbability(k)));
  } else {
    console.log('here');
    res.contentType('application/json').send(JSON.stringify(getAllProbabilities()));
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
