import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from "../actions/appActions"
import * as appController from "../controllers/appController.js"

import PouchDB from 'pouchdb'
window.PouchDB = PouchDB //POUR LE DEV

var ressources = require("../ressources.json")
injectTapEventPlugin();

const style = {
  margin: 12,
};

class PatientList extends Component {

  constructor(props){
    super(props);
    this.submitPatient = this.submitPatient.bind(this);
    this.traitement = this.traitement.bind(this);
    this.state ={
      localPatientList : []
    }
  }

  componentWillMount(){
    console.log("WILL MOUNT PATIENT LIST")
    this.setState({localPatientList : []})
    ressources.map((rdv , i) => {
      var formTemp = {}
      formTemp.metadata = rdv.formMeta
      this.controlPushPatient(rdv.patient , formTemp)
    })
  }

  controlPushPatient(onePatient , form){
    var db = new PouchDB('patientDB')
    appController.getReponsesOfSelectedForm( db , onePatient , form , this.traitement)
  }

  traitement(rep , patient){

    console.log ("TRAITEMENT" , rep)
    if (rep === "noPat"){
      console.log("PAS DE PATIENT DANS LA POUCH POUR LE PATIENT" , patient)
      //il n'y a pas ce patient dans la db
      var tempPatientList = this.state.localPatientList
      tempPatientList.push(patient)
      this.setState({localPatientList : tempPatientList})
    }
    else if (rep === "noForm"){
      console.log("AU MOINS UN FORM PAS DANS LA POUCH POUR LE PATIENT" , patient)
      // il n'y a pas ce form dans la db
      var tempPatientList = this.state.localPatientList
      tempPatientList.push(patient)
      this.setState({localPatientList : tempPatientList})
    }
    else if ( rep.finished == false){
      console.log("AU MOINS UN FORM NON FINIT POUR LE PATIENT" , patient)
      // il a le form en bd mais il est pas finit
      var tempPatientList = this.state.localPatientList
      tempPatientList.push(patient)
      this.setState({localPatientList : tempPatientList})
    }
    else{
      //on ne push rien
      console.log("TOUT LES FORM SONT FINIT POUR LE PATIENT" , patient)
    }
    this.forceUpdate()
  }


  submitPatient(patient) {
    console.clear()
    this.props.updateShowPatientState(false)
    this.props.setSelectedPatient(patient)

  }

  render(){
    console.log("RENDER PATIENT LIST" , this.state.localPatientList)
    var patientAlreadyShown = []
    if (this.state.localPatientList.length == 0){
      return(
        <h1>Plus aucun RDV cette semaine</h1>
      )
    }
    else{

      return(
        <div>
        <h1>Liste de patient ayant un rdv cette semaine</h1>
        {console.log("PATIENT LIST" , this.state.localPatientList)}
        {this.state.localPatientList.map( (patient , i) =>{
            if (patient !== undefined){
              if (patientAlreadyShown.indexOf(patient._id) == -1){ // on ne montre pas plusieurs fois le meme patient
                patientAlreadyShown.push(patient._id)
                return(
                  <div key={i}>
                  <RaisedButton
                  ref={patient.id}
                  key={i}
                  label= {patient.prenom + " " + patient.nom}
                  style={style}
                  onClick = { () => this.submitPatient(patient)} />
                  <br/>
                  </div>
                )
              }
            }
        })}
        </div>
      )
    }
  }
}



// {this.props.patients.map( (patient , i) => {

// })}


function mapStateToProps(state){
  return ({
    appReducers : state.appReducers
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

export default connect (mapStateToProps , mapDispatchToProps)(PatientList)
