function carWrapper(model, color, year, doors, specPropName, specPropValue) {
  // the function should create and return an object with assigning the model,
  // color year and doors to properties with the same name as the variable and
  // it should assign to the specPropName named property the specPropValue

  // ES5
  var car = {
    model: model,
    color: color,
    year: year,
    doors: doors,
    specPropName: specPropName,
    specPropValue: specPropValue
  }

  return car;
}

console.log(JSON.stringify(carWrapper('Benz', 'black', 1886, 0, 'historical', true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}