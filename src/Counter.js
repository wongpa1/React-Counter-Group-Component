import React, { Component } from "react";
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  INIT_COUNTER_NUMBER,
} from "./constants/constants";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      number: INIT_COUNTER_NUMBER,
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.size !== this.props.size){
        this.setState({number: INIT_COUNTER_NUMBER})
    }
  }

  onIncrease() {
    this.setState((prevState) => ({
      number: prevState.number + COUNTER_INCREMENT,
    }));
    this.props.onCalculate(COUNTER_INCREMENT);
  }

  onDecrease() {
    this.setState((prevState) => ({
      number: prevState.number + COUNTER_DECREMENT,
    }));
    this.props.onCalculate(COUNTER_DECREMENT);
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrease}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.onDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
