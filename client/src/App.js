import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movies from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import axios from 'axios';

const App = () => {
  
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5100/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  
  return (
    <div>
      <SavedList list={savedList}/>
      <Route exact path = "/">
        <MovieList movies={movies}/>
        </Route>
      <Route render={props => <Movies {...props} addToSavedList={addToSavedList} />}  path ="/movies/:ID"/>
    </div>
  );
};

export default App;
