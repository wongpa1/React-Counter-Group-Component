import 'antd/dist/antd.css';
import React, { Component } from "react";
import Counter from "./Counter";
import CounterApi from "./CounterApi";
import { Form, Input, Card, Space } from "antd";
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
    //const value = event.target.value;
    CounterApi.putCounterSize(event.target.value).then((response) => {
      const size = response.data.size;
      this.setState({
        size: size,
        sum: COUNTER_GROUP_INIT_SUM,
      });
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

  componentDidMount() {
    CounterApi.getCounterSize().then((response) => {
      const size = response.data.size;
      this.setState({ size: size });
    });
  }

  render() {
    let counters = this.initArray(this.state.size);
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor="size">Generate </label>
            <Input
              name="size"
              placeholder="input size here..."
              onChange={this.onChange}
              value={this.state.size}
            />
            <span> Counters</span>
            <p>
              Sum of all counters value is <mark>{this.state.sum}</mark>
            </p>
          </fieldset>
        </Form>
        <Space />
        {counters.map((value) => (
          <Card>
            <p>
              <Counter
                key={value}
                size={this.state.size}
                onCalculate={this.onCalculate}
              />
            </p>
          </Card>
        ))}
      </div>
    );
  }
}
export default CounterGroup;
