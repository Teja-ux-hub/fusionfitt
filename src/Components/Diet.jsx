import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Diet = () => {
  
  const [transcript, setTranscript] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  // Voice recognition setup
  const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => console.log('Voice recognition active');
    
    recognition.onresult = (event) => {
      let current = event.resultIndex;
      let transcript = event.results[current][0].transcript.toLowerCase();
      setTranscript(transcript);
      handleTranscript(transcript);  // Handling voice commands
    };

    recognition.start();
    toast.success('AI assistant activated. You can now give voice commands.');
  };

  // Handling transcript/voice commands
  const handleTranscript = (transcript) => {
    if (transcript.includes('open youtube')) {
      window.open('https://www.youtube.com/');
    } else if (transcript.includes('search for')) {
      let query = transcript.split(' ').slice(2).join(' ');
      window.open(`https://www.google.com/search?q=${query}`);
    } else {
      toast.error('Command not recognized');
    }
  };

  // Fetching meals based on search input
  const getMealList = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  // Fetching recipe details for a specific meal
  const getMealRecipe = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        startRecognition();  // Start AI recognition after fetching recipe
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getMealList();
  };

  const handleRecipeClose = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="container my-10">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="title text-white">
            Find Meals & Recipes For the Ingredients
          </h2>
          <blockquote className='text-white'>
            To know how to eat well, one must first know how to wait
            <br />
            <cite className='text-white'>- Fusion Fit</cite>
          </blockquote>

          <div className="meal-search-box">
            <input
              type="text"
              style={{height: '70px', width: '30vw',marginTop: '17px', marginLeft: '-10px'}}
              className="search-control"
              placeholder="Enter an ingredient"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" style={{marginLeft:'0px'}} className="search-btn btn" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="meal-result">
          <h2 className="title">Your Search Results:</h2>
          <div id="meal">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <div key={meal.idMeal} className="meal-item text-white">
                  <div className="meal-img">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>
                  <div className="meal-name">
                    <h3>{meal.strMeal}</h3>
                    <a
                      href="#"
                      className="recipe-btn"
                      onClick={() => getMealRecipe(meal.idMeal)}
                    >
                      Ask Recipe
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="notFound text-white">Sorry, we didn't find any meal!</p>
            )}
          </div>
        </div>

        {selectedMeal && (
          <div className="meal-details">
            <button className="btn recipe-close-btn" onClick={handleRecipeClose}>
              <i className="fas fa-times"></i>
            </button>

            <div className="meal-details-content">
              <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
              <p className="recipe-category">{selectedMeal.strCategory}</p>
              <div className="recipe-instruct">
                <h3>Instructions:</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
              <div className="recipe-meal-img">
                <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
              </div>
              <div className="recipe-link">
                <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diet;
