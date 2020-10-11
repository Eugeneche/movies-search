import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dashboardReducer } from './reducers/dashboardReducer';
import { selectedMovieReducer } from './reducers/selectedMovieReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    dashboard: dashboardReducer,
    selectedMovie: selectedMovieReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;