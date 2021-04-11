import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/programScheduled";

class UpdateProgramScheduled extends Component {
  constructor() {
    super();
    this.scheduleId = React.createRef();
    this.branchName = React.createRef();
    this.courseName = React.createRef();
    this.eligibility = React.createRef();
    this.programName = React.createRef();
    this.startDate = React.createRef();
    this.endDate = React.createRef();
    this.state = { message: "" };
  }

  updateProgramScheduled() {
    console.log("updating...");
    var programScheduled = {
      scheduleId: this.scheduleId.current.value,
      branch: { branchName: this.branchName.current.value },
      course: {
        courseName: this.courseName.current.value,
        eligibility: this.eligibility.current.value,
      },
      startDate: this.startDate.current.value,
      endDate: this.endDate.current.value,
      program: {
        programName: this.programName.current.value,
      },
    };

    this.props.onUpdateProgramScheduled(programScheduled);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.scheduleId}
              type="text"
              className="form-control"
              placeholder="scheduleId"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.branchName}
              type="text"
              className="form-control"
              placeholder="branchName"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.courseName}
              type="text"
              className="form-control"
              placeholder="courseName"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.eligibility}
              type="text"
              className="form-control"
              placeholder="eligibility"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.programName}
              type="text"
              className="form-control"
              placeholder="programName"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.startDate}
              type="text"
              className="form-control"
              placeholder="startDate"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.endDate}
              type="text"
              className="form-control"
              placeholder="endDate"
            />
          </div>

          <button
            className="add-btn btn btn-primary"
            onClick={this.updateProgramScheduled.bind(this)}
          >
            Update
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
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onUpdateProgramScheduled: (payload) =>
      dispatch(actions.EditProgramScheduled(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(UpdateProgramScheduled);
