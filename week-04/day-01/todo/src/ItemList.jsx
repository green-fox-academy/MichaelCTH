import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    data.sort((a, b) => a.prio - b.prio);
  }

  buttonClick(e) {
    const { clickMethod } = this.props;
    clickMethod(e.target.id);
  }

  render() {
    const { name, data, action } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <ul>
          {data.map((item) => (
            <li key={item.text}>
              {item.text}
              <input
                id={item.text}
                type="submit"
                value={action}
                onClick={this.buttonClick.bind(this)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ItemList;
