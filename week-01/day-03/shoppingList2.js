let prices = {
	'Milk': 1.07,
	'Rice': 1.59,
	'Eggs': 3.14,
	'Cheese': 12.60,
	'Chicken Breasts': 9.40,
	'Apples': 2.31,
	'Tomato': 2.58,
	'Potato': 1.75,
	'Onion': 1.10
};

let bobList = {
	'Milk': 3,
	'Rice': 2,
	'Eggs': 2,
	'Cheese': 1,
	'Chicken Breasts': 4,
	'Apples': 1,
	'Tomato': 2,
	'Potato': 1
};

let aliceList = {
	'Rice': 1,
	'Eggs': 5,
	'Chicken Breasts': 2,
	'Apples': 1,
	'Tomato': 10
};

function totalPrice(cart) {
	let total = 0
	for (let k in cart) {
		total += (cart[k] * prices[k]);
	}
	return total;
}

// How much does Bob pay?
console.log('Bob pay ' + totalPrice(bobList));

// How much does Alice pay?
console.log('Alice pay ' + totalPrice(aliceList));

function whoBought(item) {
	let buyer = [];
	if (item in bobList) {
		buyer.push('Bob');
	}
	if (item in aliceList) {
		buyer.push('Alice');
	}
	return buyer;
}

// Who buys more Rice?
console.log('Ppl who bought rice: ' + whoBought('Rice'));
// Who buys more Potato?
console.log('Ppl who bought potato: ' + whoBought('Potato'));
// Who buys more different products?
if (Object.keys(bobList).length > Object.keys(aliceList).length) {
	console.log('Bob bought more different products');
} else {
	console.log('Alice bought more different products');
}

// Who buys more products? (piece)
let bobNum = Object.values(bobList).reduce((a, b) => {
	return a + b;
});
let aliceNum = Object.values(aliceList).reduce((a, b) => {
	return a + b;
});

if (bobNum > aliceNum) {
	console.log('Bob bought more products');
} else {
	console.log('Alice bought more products');
}