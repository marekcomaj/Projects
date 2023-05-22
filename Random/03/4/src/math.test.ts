import { addNum, divide, isPrime } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(addNum(1, 2)).toBe(3);
});

test('is number 2 prime', () => {
    expect(isPrime(2)).toBe(true);
  });


test('divide by 0', () => {
    expect(divide(2, 0));
  });