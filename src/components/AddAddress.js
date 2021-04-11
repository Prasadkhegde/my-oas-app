import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/address";

class AddAddress extends Component {
  constructor() {
    super();

    this.district = React.createRef();
    this.states = React.createRef();
    this.city = React.createRef();
    this.country = React.createRef();
    this.zipcode = React.createRef();
    this.landmark = React.createRef();
    this.state = { message: "" };
  }

  addAddress() {
    var address = {
      district: this.district.current.value,
      states: this.states.current.value,
      city: this.city.current.value,
      country: this.country.current.value,
      zipcode: this.zipcode.current.value,
      landmark: this.landmark.current.value,
    };

    this.props.onAddAddress(address);
  }

  render() {
    return (
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.district}
              type="text"
              className="form-control"
              placeholder="District"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.address}
              type="text"
              className="form-control"
              placeholder="States"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.city}
              type="text"
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.country}
              type="text"
              className="form-control"
              placeholder="Country"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.zipcode}
              // type="number"
              className="form-control"
              placeholder="Zipcode"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.landmark}
              type="text"
              className="form-control"
              placeholder="Landmark"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.addAddress.bind(this)}
          >
            Add Address
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
    addresses: state.addresses,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onAddAddress: (payload) => dispatch(actions.addAddress(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(AddAddress);
