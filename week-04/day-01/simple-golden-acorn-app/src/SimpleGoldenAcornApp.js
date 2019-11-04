import React,{Component} from 'react';
import "./main.css"

class SimpleGoldenAcornApp extends Component {
  constructor(props){
    super(props);
    this.state = { acornNum: 0 }
  }

  componentDidMount() {
    // must have to add listener after all components are mounted
    window.addEventListener('keyup', this.keyHandler.bind(this));
  }

  handleIncrement(){
    this.setState({
      acornNum: this.state.acornNum+1
    });
  }

  handleDecrease(){
    if(this.state.acornNum <= 0){
      return;
    }

    this.setState({
      acornNum: this.state.acornNum-1
    });
  }

  keyHandler(event){
    if(event.keyCode === 38){
      this.handleIncrement();
    }
    if(event.keyCode === 40){
      this.handleDecrease();

    }
  }

  render() {
    return (
    <div className="App">
      <input type="submit" value="Buy One" onClick={this.handleIncrement.bind(this)} />
      <p>{this.state.acornNum}</p>
      <input type="submit" value="Eat One" onClick={this.handleDecrease.bind(this)}/>
    </div>)
  };
}

export default SimpleGoldenAcornApp;
