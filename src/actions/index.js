// TODO: add and export your own actions
// import cars from '../data/cars';
export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CARS = 'CREATE_CARS';
export const FETCH_CAR = 'FETCH_CAR';


export function fetchCars(garage) {
  console.log('garage', garage);
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(body, garage, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;

  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CREATE_CARS,
    payload: request
  };
}

export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;

  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}
