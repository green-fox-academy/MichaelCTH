let map = {};
console.log(map);

map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';

console.log(Object.keys(map));

console.log(Object.values(map));

map[68] = 'D';

console.log(`The are ${Object.keys(map).length} keys in the map.`);

console.log(`The value of key 99 is ${map[99]}`);

delete map[97];
console.log(`The value of key 97 after deletion is : ${map[97]}`);

console.log(`The value of key 100 is: ${map[100]}`);

map = {};

console.log(map);