import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dashboardReducer } from './reducers/dashboardReducer';
import { selectedMovieReducer } from './reducers/selectedMovieReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { searchReducer } from './reducers/searchReducer';

const reducers = combineReducers({
    dashboard: dashboardReducer,
    selectedMovie: selectedMovieReducer,
    searchingResults: searchReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;