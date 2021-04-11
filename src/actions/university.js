const saveUniversity = () => {
  return {
    type: "ADD_UNIVERSITY",
    payload: { message: "Successfully added University" },
  };
};

export const addUniversity = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    fetch("http://localhost:8075/addUniversity", requestOptions).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log("success");
        dispatch(saveUniversity());
      }
    });
  };
};

const findUniversity = (payload) => {
  return { type: "FIND_UNIVERSITY", payload };
};

export const fetchUniversity = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return (dispatch) => {
    fetch("http://localhost:8075/viewAllUniversity", requestOptions)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(findUniversity(data));
      });
  };
};

const removeUniversity = (payload) => {
  return { type: "DELETE_UNIVERSITY", payload: payload };
};

export const deleteUniversity = (universityId) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  return (dispatch) => {
    fetch(
      "http://localhost:8075/deleteUniversity/" + universityId,
      requestOptions
    )
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
        }

        // return res.json()
        else return res.text();
      })
      .then((data) => {
        console.log(data);
        dispatch(removeUniversity({ universityId }));
      });
  };
};

const updateUniversity = () => {
  console.log("inside update University");
  return {
    type: "UPDATE_UNIVERSITY",
    payload: { message: "Successfully updated University" },
  };
};

export const EditUniversity = (payload) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    console.log(requestOptions);
    console.log(payload);
    console.log("reached");
    fetch("http://localhost:8075/updateUniversity", requestOptions).then(
      (res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("successfully updated");
          dispatch(updateUniversity(payload));
        } else {
          dispatch(updateUniversity("Updating university failed!!!"));
        }
      }
    );
  };
};
