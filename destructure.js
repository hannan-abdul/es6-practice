const person = { name: 'Jack william', age: 26, job: 'facebooker', gfName: 'Ema Watson', address: 'kola Bagan', phone: 01717112211, friends: ['Tom Hancks', 'Tom Cruise', 'Tom yarn']};

// const gfName = person.gfName;
// const phone = person.phone;
const {phone, gfName, address} = person;

// console.log(gfName, phone, address);
// console.log(gfName, phone);

const friends = ['sharukh khan', 'amir khan', 'arman khan', 'salman khan', ];
const [firstFriend, ...nextFriend] = friends;
console.log(nextFriend);