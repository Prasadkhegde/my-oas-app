import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/university";

class University extends Component {
  deleteUniversity(universityId) {
    this.props.onDeleteUniversity(universityId);
  }

  render() {
    return (
      <div className="card">
        <img src="sangga.jpg" width="50%" className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge rounded-pill bg-dark">
            University Id :{this.props.universityId}
          </span>
          <p className="card-text">Name :{this.props.name}</p>

          <button
            className="btn btn-danger"
            onClick={this.deleteUniversity.bind(this, this.props.universityId)}
          >
            Delete
          </button>
          <Link to={"/updateUniversity/" + this.props.universityId}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    universitys: state.universitys,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onDeleteUniversity: (universityId) =>
      dispatch(actions.deleteUniversity(universityId)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(University);
