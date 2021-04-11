import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/university";

class AddUniversity extends Component {
  constructor() {
    super();
    this.name = React.createRef();
  }

  addUniversity() {
    var university = {
      name: this.name.current.value,
    };

    this.props.onAddUniversity(university);
  }

  render() {
    return (
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.name}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.addUniversity.bind(this)}
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
    universitys: state.universitys,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onAddUniversity: (payload) => dispatch(actions.addUniversity(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(AddUniversity);
