import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe('Request all probabilities of winning', () => {
  let response;
  let body = [];

  beforeAll(async () => {
    response = await fetch(
      'http://localhost:3000/williwin',
    );
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type', () => {
    expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
  });

  test('Should have array in the body', () => {
    expectTypeOf(body).toBeArray();
  });
});

describe('Request probability of winning with a 6 sided die', () => {
  let response;
  let body = [];

  beforeAll(async () => {
    response = await fetch(
      'http://localhost:3000/williwin',
      {
        headers: {
          "k": "6"
        }
      }
    );
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type', () => {
    expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
  });

  test('Check response value', () => {
    expect(body).toBe(54.55);
  });
});
