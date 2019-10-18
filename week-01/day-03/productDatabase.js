let db = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
};

console.log(db['Fish']);

let item = null;
let max = Number.MIN_SAFE_INTEGER;
for (let k in db) {
    if (db[k] > max) {
        max = db[k];
        item = k;
    }
}
console.log('The most expensive product is ' + item);

let prices = Object.values(db);
let total = prices.reduce((a, b) => {
    return a + b;
}, 0);
console.log('The average price is: ' + total / prices.length);


let len = Object.values(db).filter((item) => {
    if (item < 300) {
        return true;
    }
    return false;
}).length;
console.log(`There are ${len} produces' priceis below 300`);


let len2 = Object.values(db).filter((item) => {
    return item === 125;
}).length;

if (len2 > 0) {
    console.log('Yes, there is.');
} else {
    console.log('No product price matached 125');
}

let product = null;
let min = Number.MAX_SAFE_INTEGER;
for (let k in db) {
    if (db[k] < min) {
        min = db[k];
        product = k;
    }
}

console.log('The cheapest product is ' + product);