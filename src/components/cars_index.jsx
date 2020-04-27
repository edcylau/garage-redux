import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={`${car.id}`}>
          <div className="car-card">
            <img className="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBTciprvzfqMARN6-x9xagH8TLfpO0iJ20c0Bspw4WiWr-zVxl&usqp=CAU" alt="" />
            <div className="car-details">
              <h4>{car.brand}-{car.model}</h4>
              <p>Owner:{car.owner}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="cards-cars">
        {this.renderCars()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return { cars: state.cars, };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
