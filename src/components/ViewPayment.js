import React, { Component } from "react";
import { connect } from "react-redux";
import Payment from "./Payment.js";
import * as actions from '../actions/action'

class ViewPayment extends Component {
  constructor() {
    super();
    this.state = { payments: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")
  }
  componentDidMount() {
    this.props.onFetchPayments()
  }

 

  render() {
    var paymentsList = this.props.payments.map((payment, i) => {
      return (
        <Payment
          key={payment.paymentId}
          paymentId={payment.paymentId}
          emailId={payment.emailId}
          paymentAmount={payment.paymentAmount}
          paymentDescription={payment.paymentDescription}
          paymentDate = {payment.paymentDate}
          paymentStatus= {payment.paymentStatus}
          fetchData={this.fetchData.bind(this)}
        ></Payment>
      );
    });

    return (
      <div>
        <div>{paymentsList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    payments : state.payments
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchPayments : () => dispatch(actions.fetchPayment())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewPayment);