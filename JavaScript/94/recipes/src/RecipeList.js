import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/data/recipes.json');
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const recipes = await response.json();
        setRecipes(recipes);
      } catch {
        console.log('error');
      }
    })();
  }, []);

  return (
    <>
      <h4>recipes</h4>
      <ul className="bulletless">
        {recipes.map((item, index) => (
          <li key={item.id} >
            <Link to={`/recipe/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

