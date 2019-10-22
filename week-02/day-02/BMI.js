function bmi(obj) {
  const newObj = Object.assign(obj);
  newObj.bmi = obj.mass / (obj.height ** 2);
  return newObj;
}

console.log(bmi({
  mass: 80,
  height: 1.7,
}));
