import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../actions/application";

function DeleteApplication(props) {
  const [applicationId, setapplicationId] = useState("");
  const handleSubmit = () => {
    const requestBody = {
      applicationId: applicationId,
    };

    props.onDeleteApplication(requestBody);
  };

  return (
    <div style={{ padding: "50px", border: "5px solid" }}>
      <TextField
        id="outlined-basic"
        label="Applicant Id"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={applicationId}
        onChange={(e) => setapplicationId(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ margin: "10px" }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    application: state.application,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onDeleteApplication: (requestBody) =>
      dispatch(actions.deleteApplication(requestBody)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(DeleteApplication);
