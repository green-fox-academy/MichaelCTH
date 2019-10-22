function foo(sugar = false, milk = false) {
  if (sugar && milk) {
    return 'coffee with sugar and with milk';
  } else if (sugar) {
    return 'coffee with sugar';
  } else if (milk) {
    return 'coffee with milk';
  }

  return 'coffee';
}