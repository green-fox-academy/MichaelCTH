function foo(sugar = false, milk = false) {
  if (sugar && milk) {
    return 'coffee with sugar and with milk';
  } if (sugar) {
    return 'coffee with sugar';
  } if (milk) {
    return 'coffee with milk';
  }

  return 'coffee';
}
