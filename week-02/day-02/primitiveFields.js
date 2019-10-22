function primitiveFields(obj) {
  return Object.keys(obj).filter((key) => obj[key] !== Object(obj[key]));
}

const rst = primitiveFields({
  x: 1,
  y: true,
  z: [],
});

console.log(rst);
