const saveAddress = () => {
  return {
    type: "ADD_ADDRESS",
    payload: { message: "Successfully added address" },
  };
};

export const addAddress = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    fetch("http://localhost:8075/address/add", requestOptions).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log("success");
        dispatch(saveAddress());
      }
    });
  };
};

const findAddress = (payload) => {
  return { type: "FIND_ADDRESS", payload };
};

export const fetchAddress = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return (dispatch) => {
    fetch("http://localhost:8075/address/get", requestOptions)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(findAddress(data));
      });
  };
};
