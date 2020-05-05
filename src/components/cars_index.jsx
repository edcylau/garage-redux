import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';
import Aside from './aside';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBTciprvzfqMARN6-x9xagH8TLfpO0iJ20c0Bspw4WiWr-zVxl&usqp=CAU" alt="car" />
            <div className="car-details">
              <h4>{car.brand}-{car.model}</h4>
              <p><strong>Owner:</strong>{car.owner}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="container-thin">
        <Aside garage={this.props.garage}>
          <Link className="button" to="/cars/new">
            Add a car
          </Link>
        </Aside>
        <div className="cards-cars">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
