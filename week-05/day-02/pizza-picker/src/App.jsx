/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 'Hand Made',
      toppings: [],
      cut: null,
      comment: '',
      display: false,
    };

    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  formChangeHandler(e) {
    const { name, value, type } = e.target;
    if (type === 'select-one') {
      this.setState({ base: value });
    }

    if (type === 'checkbox') {
      let { toppings } = this.state;
      toppings = toppings.filter((item) => item !== name);
      if (e.target.checked) {
        toppings.push(name);
      }
      this.setState({ toppings });
    }

    if (type === 'radio') {
      this.setState({ cut: value });
    }

    if (type === 'textarea') {
      this.setState({ comment: value });
    }
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({ display: true });
    console.log(this.state);
  }

  render() {
    const {
 base, toppings, cut, comment, display 
} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <section>
            <label htmlFor="base">Base:</label>
            <select name="base" value={base} onChange={this.formChangeHandler}>
              <option value="Hand Made">Hand Made</option>
              <option value="Iron Pan">Iron Pan</option>
              <option value="Extra Crispy">Extra Crispy</option>
            </select>
          </section>
          <section>
            <label htmlFor="toppings">Toppings: </label>
            <br />
            <input
              name="Grand Beef"
              type="checkbox"
              checked={toppings.includes('Grand Beef')}
              onChange={this.formChangeHandler}
            />
            Grand Beff
            <br />
            <input
              name="Garlic Chicken"
              type="checkbox"
              checked={toppings.includes('Garlic Chicken')}
              onChange={this.formChangeHandler}
            />
            Garlic Chicken
            <br />
            <input
              name="Italian Sausage"
              type="checkbox"
              checked={toppings.includes('Italian Sausage')}
              onChange={this.formChangeHandler}
            />
            Italian Sausage
          </section>
          <section>
            <label htmlFor="cut">Cut ?</label>
            <br />
            <input type="radio" name="cut" value="true" onChange={this.formChangeHandler} />
            Yes
            <br />
            <input type="radio" name="cut" value="false" onChange={this.formChangeHandler} />
            No
            <br />
          </section>
          <section>
            <label htmlFor="comment">Comment:</label>
            <br />

            <textarea name="comment" value={comment} onChange={this.formChangeHandler} />
          </section>
          <input type="submit" value="Order" />
        </form>
        {display ? (
          <div className="order-summary">
            <h1>Order Summary</h1>
            <p>Base: {base}</p>
            <p>
              Toppings:
              <ul>
                {toppings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </p>
            <p>Cut ?: {cut}`</p>
            <p>Comment: {comment}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
