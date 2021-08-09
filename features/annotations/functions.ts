const add = (a: number, b: number): number => {
  return a + b;
};

// Return annotation prevents errors such as "forgetting the return statement"
// adding :number to the function prompts for return statement
const subtract = (a: number, b: number) => {
  a - b;
}