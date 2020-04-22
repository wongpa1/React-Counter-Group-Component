import 'antd/dist/antd.css';
import React, { Component } from "react";
import {Button} from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
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
        <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={this.onIncrease}/>
        <span> {this.state.number} </span>
        <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick={this.onDecrease}/>
      </div>
    );
  }
}

export default Counter;
