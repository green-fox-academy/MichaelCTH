import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ItemInput from './ItemInput';
import ItemList from './ItemList';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.updateUserItem = props.dataUpdate;
    this.state = props.dataRead();

    this.dataList = this.state.data;
    this.user = this.dataList.filter((i) => i.name === this.state.curUser)[0];
  }

  itemExist(val) {
    const { items } = this.user;
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

    const { items } = this.user;
    items.push({
      name: text,
      checked: false,
    });
    // this.setState({ items });
    this.updateUserItem(this.dataList);
    document.querySelector('input[type="text"]').value = '';
  }

  deleteItem(e) {
    const val = e.target.parentElement.dataset.name;
    let { items } = this.user;
    items = items.filter((i) => i.name !== val);
    this.user.items = items;
    // this.setState({ items });
    this.updateUserItem(this.dataList);
  }

  checkItem(e) {
    const val = e.target.parentElement.dataset.name;
    let { items } = this.user;
    items = items.map((i) => {
      if (i.name === val) {
        i.checked = !i.checked;
      }
      return i;
    });
    // this.setState({ items });
    this.user.items = items;
    this.updateUserItem(this.dataList);
  }

  render() {
    const { items } = this.user;

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

export default withRouter(Todo);
