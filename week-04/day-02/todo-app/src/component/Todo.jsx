import React, { Component } from 'react';
import ItemInput from './ItemInput';
import ItemList from './ItemList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.updateUserItem = props.dataUpdate;
    this.state = props.dataRead();
  }

  getUserItem() {
    return this.state.data.filter((i) => i.name === this.state.curUser)[0].items;
  }

  itemExist(val) {
    const items = this.getUserItem();
    let exist = false;
    items.forEach((i) => {
      if (i.name === val) {
        exist = true;
      }
    });
    return exist;
  }

  addItem() {
    const text = document.querySelector('input[type="text"]').value;
    if (!text.trim()) {
      return;
    }

    if (this.itemExist(text)) {
      return;
    }

    const items = this.getUserItem();
    items.push({
      name: text,
      checked: false,
    });
    this.setState({ items });
    document.querySelector('input[type="text"]').value = '';
  }

  deleteItem(e) {
    const val = e.target.parentElement.dataset.name;
    let items = this.getUserItem();
    items = items.filter((i) => i.name !== val);
    this.setState({ items });
  }

  checkItem(e) {
    const val = e.target.parentElement.dataset.name;
    let items = this.getUserItem();
    items = items.map((i) => {
      if (i.name === val) {
        i.checked = !i.checked;
      }
      return i;
    });
    this.setState({ items });
  }

  render() {
    const items = this.getUserItem();
    return (
      <div className="App">
        <h1 className="heading">TODOS</h1>
        <ItemInput label="Add" clickMethod={this.addItem.bind(this)} />
        <ItemList
          delMethod={this.deleteItem.bind(this)}
          checkMethod={this.checkItem.bind(this)}
          items={items}
        />
      </div>
    );
  }
}
