import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.garage, this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="car-item">
        <img className="garage-logo" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="lewagon garage-logo" />
        <div className="car-item-details">
          <h3>{this.props.car.brand} - {this.props.car.model}</h3>
          <p><strong>Owner:</strong> {this.props.car.owner}</p>
        </div>
        <Link to="/">
        Back
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(p => p.id === idFromUrl);
  const garage = state.garage;
  return { car, garage };
}

export default connect(mapDispatchToProps, mapStateToProps)(CarsShow);
