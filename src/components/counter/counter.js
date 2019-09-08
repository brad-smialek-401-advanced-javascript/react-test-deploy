import React from "react";
import "./_counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    
  }

  increment = e => {
    //console.log('1',this.state);
    e.preventDefault();
    let counter = this.state.counter + 1;
    //this.setState({ counter });
    this.updateCounter(counter);
    console.log(this.state);
  };

  decrement = e => {
    //console.log(this.state);
    e.preventDefault();
    let counter = this.state.counter - 1;
    //this.setState({ counter });
    this.updateCounter(counter);
    console.log(this.state);
  };

  updateCounter(counter) {
    let polarity = 'neutral';
    if (counter > 0) {
      polarity = 'positive';
    } else if (counter < 0) {
      polarity = 'negative';
    }
    this.setState({ counter, polarity });
    console.log(this.state);
  }

  render() {
    let classes = ['counter', this.state.polarity].join(' ');
    return (
      <div id="clickCount">
        <button className="clicker" id="clickdown" onClick={this.decrement}>
          -1
        </button>
        <h4 className={classes} id="counter">{this.state.counter}</h4>
        <button className="clicker" id="clickup" onClick={this.increment}>
          +1
        </button>
      </div>
      
    );
  }
}

export default Counter;
