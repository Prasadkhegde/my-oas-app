import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApplication } from "../actions/application";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

function ViewApplication() {
  const applications = useSelector((state) => state.applications);
  const branches = useSelector((state) => state.branches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApplication());
  }, [dispatch]);
  useEffect(() => {
    console.log(applications);
  }, [applications]);

  useEffect(() => {
    console.log(branches);
  }, [branches]);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        {applications &&
          applications.map((application) => {
            return (
              <div
                key={application.applicationId}
                style={{
                  width: "50%",
                  border: "5px solid",
                  padding: "15px",
                  margin: "20px",
                }}
              >
                {
                  <div>
                    <b>
                      <TextField
                        id="outlined-basic"
                        label="Applicant Id"
                        variant="outlined"
                        fullWidth={false}
                        style={{ margin: "10px" }}
                        value={application.applicationId}
                      />
                    </b>
                    <TextField
                      id="outlined-basic"
                      label="Applicant Full Name"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.applicantFullName}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Date Of Birth"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.dateOfBirth}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Highest Qulification"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.highestQualification}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Final Year Percentage"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.finalYearPercentage}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Goals"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.goals}
                    />
                    <TextField
                      id="Email Id"
                      label="Email Id"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.emailId}
                    />
                    <TextField
                      id="Email Id"
                      label="Application Status"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.applicationStatus}
                    />

                    <TextField
                      id="Email Id"
                      label="Date of Interview"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.dateOfInterview}
                    />
                    <TextField
                      id="Email Id"
                      label="Applicant Interview Feedback"
                      variant="outlined"
                      fullWidth={false}
                      style={{ margin: "10px" }}
                      value={application.applicantInterviewFeedback}
                    />
                  </div>
                }
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default ViewApplication;
