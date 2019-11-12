import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: 'Male',
      location: 'Florida',
      restrictions: [],
    };

    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  formChangeHandler(e) {
    const { type, name, value } = e.target;
    let { restrictions } = this.state;

    if (type === 'checkbox') {
      restrictions = restrictions.filter((item) => item !== name);
      if (e.target.checked) {
        restrictions.push(name);
      }
      this.setState({ restrictions });
    } else {
      this.setState({ [name]: value });
    }
  }

  alertState() {
    const {
 firstName, lastName, age, gender, location, restrictions 
} = this.state;
    let output = '';
    output += `First name: ${firstName}\n`;
    output += `Last name: ${lastName}\n`;
    output += `Age: ${age}\n`;
    output += `Gender: ${gender}\n`;
    output += `Location: ${location}\n`;
    output += `Dietary restrictions: ${JSON.stringify(restrictions)}\n`;
    alert(output);
  }

  submitHandler(e) {
    e.preventDefault();
    this.alertState();
  }

  render() {
    const { firstName, lastName, age } = this.state;
    return (
      <div className="App">
        <h1>Book Your Travel Now</h1>
        <form onSubmit={this.submitHandler}>
          <section>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.formChangeHandler}
              placeholder="First Name"
              required
            />
          </section>

          <section>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.formChangeHandler}
              placeholder="Last Name"
              required
            />
          </section>

          <section>
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.formChangeHandler}
              placeholder="Ex. 24"
              required
            />
          </section>

          <section>
            <label htmlFor="gender">Gender: </label>
            <spam>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={this.formChangeHandler}
                defaultChecked
              />
              Male
            </spam>
            <spam>
              <input type="radio" name="gender" value="Female" onChange={this.formChangeHandler} />
              Female
            </spam>
          </section>

          <section>
            <label htmlFor="location">Location:</label>
            <select name="location" onChange={this.formChangeHandler} required>
              <option value="Florida">Florida</option>
              <option value="Vegas">Vegas</option>
              <option value="Seattle">Seattle</option>
            </select>
          </section>

          <section>
            <label htmlFor="restrictions">Restrictions: </label>
            <br />
            <spam>
              <input type="checkbox" name="Vegetarian" onChange={this.formChangeHandler} />
              Vegetarian
            </spam>
            <spam>
              <input type="checkbox" name="Kosher" onChange={this.formChangeHandler} />
              Kosher
            </spam>
            <spam>
              <input type="checkbox" name="Lactose Free" onChange={this.formChangeHandler} />
              Lactose Free
            </spam>
          </section>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
