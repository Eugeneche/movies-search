import React from 'react';
import './App.css';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import { Route } from 'react-router-dom';
import MovieCardContainer from './components/MovieCard/MovieCardContainer';
import SearchingResultsContainer from './components/SearchingResults/SearchingResultsContainer';

function App(props) {
  return (
    <div className="App">
      <div className="wrapper">       
        <Route exact path='/' render={() => <DashboardContainer />} />
        <Route path='/movie/:movieId' render={() => <MovieCardContainer />} />
        <Route path='/results' render={() => <SearchingResultsContainer />} />       
      </div>
    </div>
  );
}

export default App;
