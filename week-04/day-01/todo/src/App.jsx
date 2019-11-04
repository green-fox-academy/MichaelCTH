import React, { Component } from 'react';
import ItemList from './ItemList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2,
        },
        {
          text: 'Buy milk',
          prio: 1,
        },
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2,
        },
        {
          text: 'Mentoring others',
          prio: 1,
        },
      ],
    };
    this.getMaxDonePrio = this.getMaxDonePrio.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  getMaxDonePrio() {
    const { doneTodo } = this.state;
    let max = Number.MIN_SAFE_INTEGER;
    doneTodo.forEach((item) => {
      max = Math.max(max, item.prio);
    });
    return max;
  }

  doneTodo(text) {
    const { todo } = this.state;
    const { doneTodo } = this.state;

    const removed = todo.filter((item) => item.text === text)[0];
    todo.splice(todo.indexOf(removed), 1);
    this.setState({ todo });
    removed.prio = this.getMaxDonePrio() + 1;
    doneTodo.push(removed);
    this.setState({ doneTodo });
  }

  deleteTodo(text) {
    const { doneTodo } = this.state;
    const removed = doneTodo.filter((item) => item.text === text)[0];
    doneTodo.splice(doneTodo.indexOf(removed), 1);
    this.setState({ doneTodo });
  }

  render() {
    const { todo, doneTodo } = this.state;
    return (
      <>
        <ItemList name="todo" data={todo} action="done" clickMethod={this.doneTodo} />
        <ItemList name="doneTodo" data={doneTodo} action="delete" clickMethod={this.deleteTodo} />
      </>
    );
  }
}

export default App;
