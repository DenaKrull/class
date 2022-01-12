import React, { Component } from 'react'

export default class App extends Component {

  state = {
    name: "",
    age: 21,
    email: ""
  }

  // handleNameChange = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }
  // handleAgeChange = (event) => {
  //   this.setState({
  //     age: event.target.value
  //   })
  // }
  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value
  //   })
  // }

  handleInputChange = (event) => {
    //const newState = {};
    //newState[event.target.name] = event.target.value;
    //this.setState(newState);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>PCS Class</h1>
        <form onSubmit={this.handleSubmit}>
          Name: <input name="name" required value={this.state.name} onChange={this.handleInputChange} /><br></br>
          Age: <input name="age" required value={this.state.age} onChange={this.handleInputChange} type="number" min="0" max="120" /><br></br>
          Email: <input name="email" required value={this.state.email} onChange={this.handleInputChange} type="email" /><br></br>
          <button>Register!</button>
        </form>
      </div>
    )
  }
}
