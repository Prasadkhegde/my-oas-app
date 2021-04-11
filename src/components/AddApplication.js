import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../actions/application";

function AddApplication(props) {
  const [name, setName] = useState("");
  const [dob, setDate] = useState("");
  const [qualification, setQualification] = useState("");
  const [percentage, setPercentage] = useState("");
  const [goals, setGoals] = useState("");
  const [emailId, setEmailId] = useState("");

  const isDisabled =
    name === "" ||
    dob === "" ||
    qualification === "" ||
    percentage === "" ||
    goals === "" ||
    emailId === "";

  const handleSubmit = () => {
    const requestBody = {
      applicantFullName: name,
      dateOfBirth: dob,
      highestQualification: qualification,
      finalYearPercentage: percentage,
      goals: goals,
      emailId: emailId,
    };

    props.onCreateApplication(requestBody);
  };

  return (
    <div style={{ padding: "70px", border: "5px solid" }}>
      <TextField
        id="filled-basic"
        label="Applicant Full Name"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-error-helper-text"
        type="date"
        label="Data of Birth"
        defaultValue="1999-12-31"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={dob}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setDate(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Highest Qualification"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Final Year Percentage"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Goals"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="EmailId"
        variant="outlined"
        fullWidth={true}
        style={{ margin: "10px" }}
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ margin: "10px" }}
        disabled={isDisabled}
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
    onCreateApplication: (requestBody) =>
      dispatch(actions.addApplication(requestBody)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(AddApplication);
