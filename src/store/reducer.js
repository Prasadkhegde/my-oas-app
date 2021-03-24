const initialState = {
    payments : [
       
    ],
    message : ''
}

const reducer = (state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {
        
    case "FIND_PAYMENTS" :
        return {payments : payload,message:''}

    case "FIND_PAYMENT" :
            return {payments : payload,updatePayment : payload.payment}

    case "ADD_PAYMENT":
        return {payments: state.payments,message:payload.message}

    case "DELETE_PAYMENT":
        var filteredList = state.payments.filter((payment)=> payment.id !== payload.payment.id)
        return {payments: filteredList,message:''}

    case "UPDATE_PAYMENT":
        console.log(payload.message)
            return {payments: state.payments,message:payload.message}
    
    default:
        return state
    }
}

export default reducer