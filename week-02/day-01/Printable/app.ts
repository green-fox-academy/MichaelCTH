import { Domino, Todo } from "./Printable";

let dominoes = [];
let todos = [];
dominoes.push(new Domino(1, 2));
dominoes.push(new Domino(3, 5));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(12, 3));
dominoes.push(new Domino(6, 25));
dominoes.push(new Domino(7, 7));
dominoes.push(new Domino(9, 8));
dominoes.push(new Domino(2, 1));
dominoes.push(new Domino(1, 0));

todos.push(new Todo("- Buy milk"));
todos.push(new Todo("- Download games"));
todos.push(new Todo("- Play Diablo"));
todos.push(new Todo("- Shutdown computer"));

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
