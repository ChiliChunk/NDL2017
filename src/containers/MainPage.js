import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React , {Component} from "react"
import * as AppActions from "../actions/appActions"
import Navigation from "./Navigation"
import PatientList from "./PatientList"
import FormCreator from "./FormCreator"
import * as appController from "../controllers/appController"
import {checkHttpStatus} from "../utils"

import PouchDB from 'pouchdb'
window.PouchDB = PouchDB //POUR LE DEV



var ressources = require("../ressources.json")


class MainPage extends Component {

  constructor(props){
    console.log("CONSTRUCTOR MAIN PAGE")
    super (props);
    this.renderPatientList = this.renderPatientList.bind(this)

    // window.addEventListener('online',  ()=>{
      console.log("online")
      console.log("LOGIN")
      var data = {
  		  username : "diet",
  		  password : "dietdev"
      }
	  this.props.login(data)
    .then((response) => {

      var db = new PouchDB('patientDB')
      console.log("DANS LE THEN")
      appController.pushRdvObjectFinished(db , this.props.pushOfflineData)
    })
    .catch((error) => {
      console.error(error);
    })


    // }, this)

  }




  renderPatientList(){
      return(
        <div>
          <PatientList />
        </div>
      )
  }

  renderForm(){
    return(
      <div>
        <FormCreator/>
      </div>
    )
  }

  render(){
    return(
      <div>
        <Navigation>
        <div className = "container">
          {this.props.appReducers.showPatient ? this.renderPatientList() : this.renderForm()}
        </div>
        </Navigation>
      </div>
    )
  }
}

function mapStateToProps(state){
  return ({
    appReducers : state.appReducers
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

export default connect (mapStateToProps , mapDispatchToProps)(MainPage)
