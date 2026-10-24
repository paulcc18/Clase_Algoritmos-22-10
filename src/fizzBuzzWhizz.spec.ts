import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('If the number is 1 return 1', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });

  test('If the number is 2 return Whizz', () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });

  test('If the number is 3 return FizzWhizz', () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });

  test('If the number is 4 return 4', () => {
    const result = game(4);
    expect(result).toEqual(4);
  });

  test('If the number is 5 return BuzzWhizz', () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });

  test('If the number is 6 return Fizz', () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });

  test('If the number is 9 return Fizz', () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });

  test('If the number is 10 return Buzz', () => {
    const result = game(10);
    expect(result).toEqual("Buzz");
  });

  test('If the number is 15 return FizzBuzz', () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  });

  test('If the number is 20 return Buzz', () => {
    const result = game(20);
    expect(result).toEqual("Buzz");
  });

  test('If the number is 30 return FizzBuzz', () => {
    const result = game(30);
    expect(result).toEqual("FizzBuzz");
  });

  test('If the number is 75 return FizzBuzz', () => {
    const result = game(75);
    expect(result).toEqual("FizzBuzz");
  });
});