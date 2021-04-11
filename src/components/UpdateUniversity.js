import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/university";

class UpdateUniversity extends Component {
  constructor() {
    super();
    this.universityId = React.createRef();
    this.name = React.createRef();
    this.state = { user: {}, message: "" };
  }

  updateUniversity() {
    console.log("updating...");

    var university = {
      universityId: this.universityId.current.value,
      name: this.name.current.value,
    };

    this.props.onUpdateUniversity(university);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.universityId}
              value={this.props.universityId}
              type="Integer"
              className="form-control"
              placeholder="UniversityId"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.name}
              type="text"
              className="form-control"
              placeholder="UniversityName"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateUniversity.bind(this)}
          >
            update
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
    onUpdateUniversity: (payload) => dispatch(actions.EditUniversity(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(UpdateUniversity);
