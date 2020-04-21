import React, { Component } from "react";
import Counter from "./Counter";
import {
  INIT_COUNTER_SIZE,
  COUNTER_GROUP_INIT_SUM,
} from "./constants/constants";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCalculate = this.onCalculate.bind(this);

    this.state = {
      size: INIT_COUNTER_SIZE,
      sum: COUNTER_GROUP_INIT_SUM,
    };
  }

  initArray(size) {
    return Array.from(Array(size).keys());
  }

  onChange(event) {
    const value = event.target.value;
    this.setState({
      size: value.length > 0 ? parseInt(value) : 0,
      sum: COUNTER_GROUP_INIT_SUM,
    });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onCalculate(variation) {
    this.setState((prevState) => {
      return { sum: prevState.sum + variation };
    });
  }

  render() {
    let counters = this.initArray(this.state.size);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor="size">Generate</label>
            <input
              name="size"
              placeholder="input size here..."
              onChange={this.onChange}
              value={this.state.size}
            />
            <span> Counters</span>
            <p>
              sum of all counters value is <mark>{this.state.sum}</mark>
            </p>
          </fieldset>
        </form>
        {counters.map((value) => (
          <Counter
            key={value}
            size={this.state.size}
            onCalculate={this.onCalculate}
          />
        ))}
      </div>
    );
  }
}
export default CounterGroup;
