const ages = [12, 14, 15, 18, 20];
const ages2 = [22, 21, 23, 24];
const ages3 = [29, 28, 23, 31];

const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business =  650;
const minister = 450;
const sochib = 250;
const takaPaisa = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPaisa);
console.log(maximum);