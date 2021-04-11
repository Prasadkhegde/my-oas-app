import React, { Component } from "react";
import { connect } from "react-redux";
import LoginModule from "./LoginModule.js";
import * as actions from "../actions/login";

class ViewLogin extends Component {
  constructor() {
    super();
    this.state = { logins: [] };
  }

  fetchData() {
    console.log("fetching data.....");
  }
  componentDidMount() {
    this.props.onFetchLogins();
    document.body.style.backgroundColor = "skyblue";
  }

  render() {
    var loginsList = this.props.logins.map((login, i) => {
      return (
        <LoginModule
          key={login.userId}
          userId={login.userId}
          userName={login.userName}
          role={login.role}
          fetchData={this.fetchData.bind(this)}
        ></LoginModule>
      );
    });

    return (
      <div>
        <div>{loginsList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logins: state.logins || [],
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onFetchLogins: () => dispatch(actions.fetchLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ViewLogin);
