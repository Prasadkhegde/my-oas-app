import {
  createApplicationUrl,
  readApplicationUrl,
  editApplicationUrl,
} from "../constants/urls";

const saveApplication = () => {
  return {
    type: "ADD_APPLICATION",
    payload: { message: "Successfully added application" },
  };
};

export const addApplication = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  console.log(requestOptions);
  console.log(payload);
  return (dispatch) => {
    fetch(createApplicationUrl, requestOptions).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log("Success");
        dispatch(saveApplication());
      }
    });
  };
};

const findApplication = (payload) => {
  console.log(payload);
  return { type: "All_APPLICATIONS", payload: payload };
};

export const fetchApplication = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return (dispatch) => {
    fetch(readApplicationUrl, requestOptions)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(findApplication(data));
      });
  };
};

const deleteApplicant = (msg) => {
  return { type: "DELETE_APPLICATION", payload: { message: msg } };
};

export const deleteApplication = (applicationId) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  return (dispatch) => {
    console.log(applicationId);
    fetch(
      "http://localhost:8075/ApplicationI/" + applicationId.applicationId,
      requestOptions
    ).then((res) => {
      if (res.status === 200) {
        dispatch(fetchApplication());
        dispatch(deleteApplicant("Successfully deleted application!!"));
      } else {
        console.log("RES", res);
        dispatch(deleteApplicant());
      }
    });
  };
};

const updateApplication = () => {
  return {
    type: "UPDATE_APPLICATION",
    payload: { message: "Successfully updated application" },
  };
};

export const EditApplication = (payload) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    fetch(editApplicationUrl, requestOptions).then((res) => {
      console.log(res);
      if (res.status === 202) {
        dispatch(updateApplication("Successfully updated  !!!"));
      } else {
        dispatch(updateApplication("Updating failed !!!"));
      }
    });
  };
};
