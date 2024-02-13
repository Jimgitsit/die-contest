import { expect, test } from 'vitest';
import { getProbability, getAllProbabilities } from './service';

test('expected probability of winning with 6, 50, and 99 sides', () => {
  expect(getProbability(6)).toBe(54.55);
  expect(getProbability(50)).toBe(50.51);
  expect(getProbability(99)).toBe(50.25);
});
