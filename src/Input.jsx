import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  incrementBy5 = () => {
    this.setState((prevState) => ({
      num: Math.min(prevState.num + 5, 15),
    }));
  };

  decrementBy5 = () => {
    this.setState((prevState) => ({
      num: Math.max(prevState.num - 5, 0),
    }));
  };

  incrementBy1 = () => {
    this.setState((prevState) => {
      if (prevState.num < 15) {
        return { num: prevState.num + 1 };
      }
      return prevState;
    });
  };

  decrementBy1 = () => {
    this.setState((prevState) => {
      if (prevState.num > 0) {
        return { num: prevState.num - 1 };
      }
      return prevState;
    });
  };

  reset = () => {
    this.setState({ num: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.num}</h1>
        
        <button onClick={this.incrementBy1}>+1</button>
        <button onClick={this.decrementBy1}>-1</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.incrementBy5}>+5</button>
        <button onClick={this.decrementBy5}>-5</button>
      </div>
    );
  }
}

export default App;
