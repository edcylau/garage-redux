import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';
import CarsReducer from './reducers/cars_reducer';

import CarsIndex from './components/cars_index';
import CarsShow from './components/cars_show';
import CarsNew from './components/cars_new';


import '../assets/stylesheets/application.scss';

const garageName = prompt("What's garage name?") || `garage${Math.floor(Math.random() * 100)}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  // key: reducer
  garage: (state = null, action) => state,
  cars: CarsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" exact component={CarsNew} />
        <Route path="/cars/:id" component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
