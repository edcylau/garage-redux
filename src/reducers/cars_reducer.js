import { FETCH_CARS, FETCH_CAR, DESTROY_CAR } from '../actions';

export default function(state = [], action) {
  console.log('state',state);
  console.log('action',action);
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case DESTROY_CAR:
      return state;
    default:
      return state;
  }
}
