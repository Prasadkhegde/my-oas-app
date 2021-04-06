const initialState = {
  payments: [],
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "FIND_PAYMENTS":
      return { ...state, payments: payload, message: "" };

    case "FIND_APPLICATION":
      return { ...state, payments: payload, message: "" };

    case "FIND_PAYMENT":
      return { ...state, payments: payload, updatePayment: payload.payment };

    case "ADD_PAYMENT":
      return { ...state, payments: state.payments, message: payload.message };

    case "DELETE_PAYMENT":
      var filteredList = state.payments.filter(
        (payment) => payment.id !== payload.payment.id
      );
      return { ...state, payments: filteredList, message: "" };

    case "UPDATE_PAYMENT":
      console.log(payload.message);
      return { ...state, payments: state.payments, message: payload.message };

    default:
      return state;
  }
};

export default reducer;
