import React, { Component } from "react";
import { connect } from "react-redux";
import University from "./University.js";
import * as actions from "../actions/university";

class ViewUniversity extends Component {
  constructor() {
    super();
    this.state = { universitys: [] };
  }

  fetchData() {
    console.log("fetching data.....");
  }
  componentDidMount() {
    this.props.onFetchUniversitys();
  }

  render() {
    console.log(this.props.universitys);
    var universitysList = this.props.universitys.map((university, i) => {
      return (
        <University
          key={university.universityId}
          universityId={university.universityId}
          name={university.name}
          fetchData={this.fetchData.bind(this)}
        ></University>
      );
    });

    return (
      <div>
        <div>{universitysList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    universitys: state.universitys || [],
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onFetchUniversitys: () => dispatch(actions.fetchUniversity()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ViewUniversity);
