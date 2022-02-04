import React, { Component } from 'react';
import ListComponent from './ListComponent';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function RecipeDetails(props) {
  const [showPicture, setShowPicture] = useState(true);
  const [recipe, setRecipe] = useState();


  const { id } = useParams();
  console.log('would load', id);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/data/${id}.json`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const recipes = await response.json();
        setRecipe(recipes);
      } catch(e) {
        console.log(e);
      }
    })();
  }, [id]);

  if (!recipe) {
    return <div>loading...</div>
  }
  const { name, ingredients, directions, picture } = recipe;
  return (
    <>
      <h2>{name}</h2>
      {showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
      <br />
      <button onClick={() => setShowPicture(!showPicture)} className="btn btn-secondary">{showPicture ? 'hide' : 'show'}</button>
      <ListComponent title="Ingredients" items={ingredients} />
      <ListComponent title="directions" items={directions} />
      <Link to='/recipe/1' >to Pizza</Link>
    </>
  );
}