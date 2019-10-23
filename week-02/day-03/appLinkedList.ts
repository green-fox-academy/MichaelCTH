import { LinkedList } from './linkedList'

let app = new LinkedList();

console.log('\n===============================')
app.add('a');
app.add('b');
app.add('c');
app.add('d');
app.add('e');
console.log('Size:' + app.size());
console.log(app.display());

console.log('\n===============================')
app.add('1', 1);
app.add('2', 3);
app.add('3', 5);
app.add('4', 7);
app.add('5', 9);
app.add('head', 0);
app.add('tail', 20);
console.log('Size:' + app.size());
console.log(app.display());

console.log('\n===============================')
for (let i = 0; i < app.size(); i += 1) {
  console.log(app.get(i));
}

app.removeItem('tail');
app.removeItem('head');
app.removeItem('3');
app.removeItem('e');
console.log('\n===============================')
for (let i = 0; i < app.size(); i += 1) {
  console.log(app.get(i));
}

app.remove(7);
app.remove(4);
app.remove(2);
app.remove(0);
console.log('\n===============================')
for (let i = 0; i < app.size(); i += 1) {
  console.log(app.get(i));
}
