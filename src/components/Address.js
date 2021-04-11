import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/address";

class Address extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <span className="badge rounded-pill bg-dark">
            Address Id :{this.props.addressId}
          </span>
          <br />
          <h5 className="card-title">District :{this.props.district}</h5>
          <h5 className="card-title">State :{this.props.states}</h5>
          <h5 className="card-title">City :{this.props.city}</h5>
          <h5 className="card-title">Country :{this.props.country}</h5>
          <h5 className="card-title">Zipcode :{this.props.zipcode}</h5>
          <h5 className="card-title">Landmark :{this.props.landmark}</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addresses: state.addresses,
  };
};

export default connect(mapStateToProps)(Address);
