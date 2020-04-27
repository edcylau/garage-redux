import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import CarsReducer from './reducers/cars_reducer';
import CarsIndex from './components/cars_index';

import '../assets/stylesheets/application.scss';

const garageName = prompt("What's garage name?") || `garage${Math.floor(Math.random() * 100)}`;
const initialState = {
  garage: garageName,
  cars: [],
};

const reducers = combineReducers({
  // key: reducer
  cars: CarsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
