import React, { Component } from "react";
import { connect } from "react-redux";
import Address from "../components/Address";

import * as actions from "../actions/address";

class ViewAddress extends Component {
  constructor() {
    super();
    this.state = { addresses: [] };
  }

  fetchData() {
    console.log("fetching data.....");
  }

  componentDidMount() {
    this.props.onFetchAddresses();
  }

  render() {
    var addressList = this.props.addresses.map((address, i) => {
      return (
        <Address
          key={address.addressId}
          addressId={address.addressId}
          district={address.district}
          states={address.states}
          city={address.city}
          country={address.country}
          zipcode={address.zipcode}
          landmark={address.landmark}
          fetchData={this.fetchData.bind(this)}
        ></Address>
      );
    });

    return (
      <div>
        <div>{addressList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addresses: state.addresses,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onFetchAddresses: () => dispatch(actions.fetchAddress()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ViewAddress);
