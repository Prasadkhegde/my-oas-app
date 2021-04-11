import React, { Component } from "react";
import { connect } from "react-redux";
import ProgramScheduled from "./ProgramScheduled.js";
import * as actions from "../actions/programScheduled";

class ViewProgramScheduled extends Component {
  constructor() {
    super();
    this.state = { programSchedules: [] };
  }

  fetchData() {
    console.log("fetching data.....");
  }
  componentDidMount() {
    this.props.onFetchProgramSchedules();
  }

  render() {
    var programScheduledList = this.props.programSchedules.map(
      (programScheduled, i) => {
        return (
          <ProgramScheduled
            key={programScheduled.scheduleId}
            scheduleId={programScheduled.scheduleId}
            startDate={programScheduled.startDate}
            endDate={programScheduled.endDate}
            branchName={programScheduled.branch.branchName}
            courseName={programScheduled.course.courseName}
            eligibility={programScheduled.course.eligibility}
            programName={programScheduled.program.programName}
            fetchData={this.fetchData.bind(this)}
          ></ProgramScheduled>
        );
      }
    );

    return (
      <div>
        <div>{programScheduledList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    programSchedules: state.programSchedules || [],
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onFetchProgramSchedules: () => dispatch(actions.fetchProgramSchedules()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(ViewProgramScheduled);
