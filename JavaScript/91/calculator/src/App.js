import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    current: '0'
  }

  handleInput = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  handleClick(btn) {
    console.log(btn);
    switch (btn) {
      case '-':
      case '+':
      case '*':
      case '/':
        this.setState({
          last: this.state.current,
          operator: btn,
          current: ''
        });
        break;
      case "=":
        this.calculate();
        break;
        case "C":
          this.setState({
            last:'',
            current: '0',
            operator: null
          });
          break;

      case '.':
        if (this.state.current.includes('.')) {
          break;
        }

      //falls through
      default:
        this.setState({
          current: this.state.current !== '0' ? this.state.current + btn : btn.toString()
        })
        break;
    }
  }

  calculate() {
    const left = Number(this.state.last);
    const right = Number(this.state.current);
    let answer;
    switch (this.state.operator) {
      case '+':
        answer = left + right;
        break;
      case '-':
        answer = left - right;
        break;
      case '*':
        answer = left * right;
        break;
      case '/':
        answer = left / right;
        break;
      default:
        return;
    }
    this.setState({
      last: '',
      operator: null,
      current: answer.toString()
    });
  }

  render() {
    return (
      <div className="calculator">
        <input value={this.state.current} onBlur={this.handleInput}></input>
        {
          [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', 'C', '/', '='].map(button =>
            <button key={button} onClick={() => this.handleClick(button)}>{button}</button>
          )
        }

      </div>
    );
  }
}

export default App;
