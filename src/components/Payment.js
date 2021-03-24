import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/action';


class Payment extends Component {

    deletePayment(id) {
      //console.log("deleting payment "  + id)
  
  
      this.props.onDeletePayment(id)
    }


    render(){
        return (
          <div className="card">
          <img src="img_avatar.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">Payment Id :{this.props.paymentId}</span>
            <h5 className="card-title">Email ID          :{this.props.emailId}</h5>
            <p className="card-text">Payment Amount      :{this.props.paymentAmount}</p>
            <p className="card-text">Payment Description :{this.props.paymentDescription}</p>
            <p className="card-text">Payment Status      :{this.props.paymentStatus}</p>
            <p className="card-text">Payment Date        :{this.props.paymentDate}</p>
            <p className="card-text">Application Id     :{this.props.applicationId}</p>

            <button  className="btn btn-danger" onClick={this.deletePayment.bind(this,this.props.id)}>Delete</button>
            <Link to={"/update/"+this.props.id}><button  className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     payments : state.payments
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
    return{
      onDeletePayment : (id) => dispatch(actions.deletePayment(id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(Payment)