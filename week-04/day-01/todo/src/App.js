import React, { Component } from 'react';
import ItemList from './ItemList'

class App extends Component {
    state = {
        todo: [
          {
            text: 'Feed the monkey',
            prio: 2
          },
          {
            text: 'Buy milk',
            prio: 1
          }
        ],
        doneTodo: [
          {
            text: 'Sleep 8 hours',
            prio: 2
          },
          {
            text: 'Mentoring others',
            prio: 1
          }
        ],
      }
    
    getMaxDonePrio(){
        let max = Number.MIN_SAFE_INTEGER;
        this.state.doneTodo.forEach((item)=>{
            max = Math.max(max,item.prio);
        })
        return max;
    }
    
    doneTodo(text){
        const todo = this.state.todo;
        const doneTodo = this.state.doneTodo;

        const removed = todo.filter((item)=>{return item.text === text})[0];
        todo.splice(todo.indexOf(removed), 1);
        this.setState({'todo':todo});
        removed.prio = this.getMaxDonePrio()+1;
        doneTodo.push(removed);
        this.setState({'doneTodo':doneTodo});
    }

    deleteTodo(text){
        const doneTodo = this.state.doneTodo;
        let removed = doneTodo.filter((item)=>{return item.text === text})[0];
        doneTodo.splice(doneTodo.indexOf(removed), 1);
        this.setState({'doneTodo':doneTodo});
    }

    render() { 
        return ( 
            <>
            <ItemList name="todo" data={this.state.todo} action="done" clickMethod={this.doneTodo.bind(this)}/>
            <ItemList name="doneTodo" data={this.state.doneTodo} action="delete" clickMethod={this.deleteTodo.bind(this)}/>
            </>
         );
    }
}
 
export default App;