import React, { useState, useEffect } from 'react';
import { fetchRandomRecipe } from '../lib/api';

const RandomRecipe = () => {

  const [randomRecipe, setRandomRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const loadRandomRecipe = async () => {
      setIsLoading(loading => !loading);
      const randomRecipeData = await fetchRandomRecipe();
      setRandomRecipe(randomRecipeData.data.recipes)
      setIsLoading(loading => !loading);
    }
    loadRandomRecipe()
  }, [reload])

  return (
    <div className = 'container'>
      {isLoading && (
        <progress className = 'progress is-medium is-link' max = '100'>
          20%
        </progress>
      )}
      {
        !isLoading && (
          <div className = 'container'>
            <h3 className = 'title is-size-5 has-text-primary has-text-centered'>
              A random recipe for you to try
              <hr />
            </h3>
            {randomRecipe.map((recipe, index) => (
              <div key = {index}>
                {/* <h3 className = 'has-text-centered'>{recipe.title}</h3> */}
                <div className = 'columns'>
                  <div className = 'column is-two-fifths'>
                    <figure className = 'image' style = {{ backgroundImage: `url({${recipe.image}})`}}>
                      <img src={recipe.image} alt = {recipe.title} />
                    </figure>
                  </div>

                  <div className = 'column'>
                    <strong className = 'has-text-info'>{recipe.title}</strong>
                      <br />
                      <hr />
                    {recipe.diets && recipe.diets.map((diet, index) => {
                      return (
                        <div className = 'is-inline-flex'>
                          <span key = {index} className = 'diet tag is-success mr-2'>{diet}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
};

export default RandomRecipe;
