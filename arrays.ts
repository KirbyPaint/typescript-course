const carMakers = ['ford', 'toyota', 'chevy']; // doesn't need annotation, type inferred
const carMakers2: string[] = []; // type not inferred, needs annotation

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // Same situation
const carsByMake2: string[][] = []; // type is double array

// Help with inference when extracting values
const carModel = carMakers[0];
const myCarModel = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // not allowed

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
