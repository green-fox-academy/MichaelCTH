let db = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
};

for (let k in db) {
    if (db[k] < 201) {
        console.log(`${k} cost less than 201.`);
    }
}

for (let k in db) {
    if (db[k] > 150) {
        console.log(`${k} ${db[k]} cost more than 150.`);
    }
}