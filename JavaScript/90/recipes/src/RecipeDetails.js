import React, { Component } from 'react'
import ListComponent from './ListComponent';

export default class RecipeDetails extends Component {
  state = {
    showPicture: true
  }
  togglePicture = () => {
    this.setState({
      showPicture: !this.state.showPicture
    })
  }
  render() {
    const { name, ingredients, directions, picture } = this.props.recipe;
    return (
      <>
        <h2>{name}</h2>
        {this.state.showPicture && <img className='img-thumbnail' src={picture} alt="" />}
        <br />
        <button className='btn btn-secondary' onClick={this.togglePicture}>{this.state.showPicture ? 'hide' : 'show'}</button>
        <ListComponent title="Ingredients" items={ingredients} />
        <ListComponent title="Directions" items={directions} />
      </>
    )
  }
}