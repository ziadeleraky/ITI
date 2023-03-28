import { Component } from "react";
import './Slider.css'

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }
  nextHandler = () => {
    if (this.state.counter < 5) {
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      });
    }
  };

  prevHandler = () => {
    if (this.state.counter > 1) {
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1,
        };
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <img src={`/Images/${this.state.counter}.jpg`} alt="img" />
        </div>
        <button onClick={this.nextHandler}>Next</button>
        {/* <button onClick={this.handler()}>Next</button> */}
        <button onClick={this.prevHandler}>Previous</button>
      </div>
    );
  }
}

export default Slider;
