const carMakers = ['ford', 'toyota', 'chevy']; // doesn't need annotation, type inferred
const carMakers2: string[] = []; // type not inferred, needs annotation

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // Same situation
const carsByMake2: string[][] = []; // type is double array
