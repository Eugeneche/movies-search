import React from 'react';
import './App.css';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import { Route, Switch } from 'react-router-dom';
import MovieCardContainer from './components/MovieCard/MovieCardContainer';
import SearchingResultsContainer from './components/SearchingResults/SearchingResultsContainer';
import NotFound from './components/NotFound/NotFound';

function App(props) {
  return (
    <div className="App">
      <div className="wrapper"> 
        <Switch>     
          <Route exact path='/' render={() => <DashboardContainer />} />
          <Route exact path='/movie/:movieId' render={() => <MovieCardContainer />} />
          <Route path='/results' render={() => <SearchingResultsContainer />} />
          <Route render={() => <NotFound />} />
        </Switch>     
      </div>
    </div>
  );
}

export default App;
