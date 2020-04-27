// TODO: add and export your own actions
import cars from '../data/cars';

export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars() {
  return {
    type: FETCH_CARS,
    payload: cars
  };
}
