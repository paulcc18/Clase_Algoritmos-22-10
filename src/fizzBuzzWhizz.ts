/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
export const game = (input: number): string | number => {
  let resultado = "";

  if (input % 3 === 0) {
    resultado += "Fizz";
  }

  if (input % 5 === 0) {
    resultado += "Buzz";
  }

  if (Primo(input)) {
    resultado += "Whizz";
  }

  if (resultado === "") {
    return input;
  }

  return resultado;
};

export const Primo = (n: number): boolean => {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }

  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

