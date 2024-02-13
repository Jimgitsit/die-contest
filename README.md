## Problem Statement

You have two players, Bob and Alice, that take turns in rolling a fair k-sided die. Whoever rolls a k first wins the game. The Python program should output the probability that Bob wins the game for k=6 thru 99. That is the output will be an array of probabilies where index 0 is the probability when k = 6; index 1 when k = 7; etc.

## Solution

Assuming that Bob always rolls first for every new game, giving him a slight advantage, the formula for the probability of Bob winning is given by:

```
P = k / (2 * k - 1)
```

Where k is the number of sides on the die.

## Implementation

Created a service layer for the calculations and a controller layer for the API which exposes a single endpoint, `/williwin`. If `k` is given as a request header then the probability of Bob winning for a k-sided die is returned. If `k` is not given, then all the probabilities of Bob winning for `k` ranging from 6 to 99 is returned as a JSON array.

## Instructions

`npm run start` to run the service on port 3000.

`npm test` to run the tests.

Example usage:

`curl http://localhost:3000/williwin`

or

`curl -H "k: 6" http://localhost:3000/williwin`
