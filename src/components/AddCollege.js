import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/college";

class AddCollege extends Component {
  constructor() {
    super();
    this.collegeName = React.createRef();
    this.address = React.createRef();
    this.district = React.createRef();
    this.states = React.createRef();
    this.city = React.createRef();
    this.country = React.createRef();
    this.zipcode = React.createRef();
    this.landmark = React.createRef();
    this.state = { message: "" };
  }

  addCollege() {
    var college = {
      collegeName: this.collegeName.current.value,
      address: {
        district: this.district.current.value,
        states: this.states.current.value,
        city: this.city.current.value,
        country: this.country.current.value,
        zipcode: this.zipcode.current.value,
        landmark: this.landmark.current.value,
      },
    };

    this.props.onAddCollege(college);
  }

  render() {
    return (
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.collegeName}
              type="text"
              className="form-control"
              placeholder="collegename"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.district}
              type="text"
              className="form-control"
              placeholder="district"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.states}
              type="text"
              className="form-control"
              placeholder="states"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.city}
              type="text"
              className="form-control"
              placeholder="city"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.country}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.zipcode}
              type="text"
              className="form-control"
              placeholder="zipcode"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.landmark}
              type="text"
              className="form-control"
              placeholder="landmark"
            />
          </div>

          <button
            className="add-btn btn btn-primary"
            onClick={this.addCollege.bind(this)}
          >
            Add
          </button>
        </div>
        <div className="alert alert-success" role="alert">
          {this.props.message}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    colleges: state.colleges,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onAddCollege: (payload) => dispatch(actions.addCollege(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(AddCollege);
