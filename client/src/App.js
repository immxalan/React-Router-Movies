import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movies from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  
  return (
    <div>
      <SavedList list={savedList}/>
      <Route exact path = "/" component={MovieList}/>
      <Route render={props => <Movies {...props} addToSavedList={addToSavedList} />}  path ="/movies/:ID"/>
    </div>
  );
};

export default App;
