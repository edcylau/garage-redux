import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import Aside from './aside';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, this.props.garage, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <div className="container-thin">
        <Aside garage={this.props.garage}>
          <Link className="button" to="/">
            Back to list
          </Link>
        </Aside>
        <div className="form">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
            />
            <Field
              className="form-control"
              label="Model"
              name="model"
              type="text"
              component={this.renderField}
            />
            <Field
              className="form-control"
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
            />
            <Field
              className="form-control"
              label="Plate"
              name="plate"
              type="text"
              component={this.renderField}
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Create Car
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ createCar }, dispatch);
// }

function mapStateToProps(state) {
  return {
    garage: state.garage,
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
