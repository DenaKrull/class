import './Clock.css';
import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
   this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() {
    return (
      <h4 className="clock" style={{backgroundColor: 'green'}}>
        {this.state.date.toLocaleTimeString()}
      </h4>
    )
  }
}
