import React, { Component } from "react";
import { connect } from "react-redux";
import College from "./College.js";
import * as actions from "../actions/college";

class ViewCollege extends Component {
  constructor() {
    super();
    this.state = { colleges: [] };
  }

  fetchData() {
    console.log("fetching data.....");
  }

  componentDidMount() {
    this.props.onFetchColleges();
  }

  render() {
    var collegesList = this.props.colleges.map((college, i) => {
      return (
        <College
          key={college.collegeRegId}
          collegeRegId={college.collegeRegId}
          collegeName={college.collegeName}
          addressId={college.address.addressId}
          district={college.address.district}
          states={college.address.states}
          city={college.address.city}
          country={college.address.country}
          zipcode={college.address.zipcode}
          landmark={college.address.landmark}
          fetchData={this.fetchData.bind(this)}
        ></College>
      );
    });

    return (
      <div>
        <div>{collegesList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    colleges: state.colleges,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onFetchColleges: () => dispatch(actions.fetchCollege()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ViewCollege);
