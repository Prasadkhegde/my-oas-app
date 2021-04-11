import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../actions/application";

function UpdateApplication(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDate] = useState("");
  const [qualification, setQualification] = useState("");
  const [percentage, setPercentage] = useState("");
  const [goals, setGoals] = useState("");
  const [emailId, setEmailId] = useState("");
  const [schedule, setschedule] = useState("");
  const [applicationstatus, setapplicationstatus] = useState("");
  const [dateOfInterview, setdateOfInterview] = useState("");
  const [InterviewFeedback, setInterviewFeedback] = useState("");

  const handleSubmit = () => {
    const requestBody = {
      applicationId: id,
      applicantFullName: name,
      dateOfBirth: dob,
      highestQualification: qualification,
      finalYearPercentage: percentage,
      goals: goals,
      emailId: emailId,

      applicationStatus: applicationstatus,
      dateOfInterview: dateOfInterview,
      applicantInterviewFeedback: InterviewFeedback,
    };

    props.onUpdateApplication(requestBody);
  };

  return (
    <div style={{ padding: "50px", border: "5px solid" }}>
      <TextField
        id="outlined-basic"
        label="Applicant Id"
        variant="outlined"
        fullWidth={false}
        style={{ margin: "10px" }}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Applicant Full Name"
        variant="outlined"
        fullWidth={false}
        style={{ margin: "10px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        type="date"
        label="Data of Birth"
        defaultValue="1999-12-31"
        variant="outlined"
        fullWidth={false}
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
        fullWidth={false}
        style={{ margin: "10px" }}
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Final Year Percentage"
        variant="outlined"
        fullWidth={false}
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
        fullWidth={false}
        style={{ margin: "10px" }}
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Schedule"
        variant="outlined"
        fullWidth={false}
        style={{ margin: "10px" }}
        value={schedule}
        onChange={(e) => setschedule(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Application Status"
        variant="outlined"
        fullWidth={false}
        style={{ margin: "10px" }}
        value={applicationstatus}
        onChange={(e) => setapplicationstatus(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Date Of Interview"
        type="date"
        variant="outlined"
        fullWidth={false}
        style={{ margin: "10px" }}
        value={dateOfInterview}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setdateOfInterview(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Interview Feedback"
        variant="outlined"
        fullWidth={false}
        style={{ margin: "10px" }}
        value={InterviewFeedback}
        onChange={(e) => setInterviewFeedback(e.target.value)}
        s
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ margin: "10px" }}
        onClick={() => handleSubmit()}
      >
        Update
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
    onUpdateApplication: (requestBody) =>
      dispatch(actions.EditApplication(requestBody)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(UpdateApplication);
