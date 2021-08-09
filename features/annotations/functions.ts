const add = (a: number, b: number): number => {
  return a + b;
};

// Return annotation prevents errors such as "forgetting the return statement"
// adding :number to the function prompts for return statement
const subtract = (a: number, b: number) => {
  a - b;
}

function divide (a: number, b: number): number {
  return a / b;
}

// Works on anonymous functions too
const multiply = function(a: number, b: number): number {
  return a * b;
}

// use void to say there will be no return
// technically it can also return null or undefined
const logger = (message: string): void => {
  console.log('message: ', message);
}

// "never" for functions that do not ever reach the end of the function
// very edge case, only do this if we expect it to NEVER EVER return
// otherwise, just use the type we think it MIGHT return
const throwError = (message: string): never => {
  throw new Error(message);
}