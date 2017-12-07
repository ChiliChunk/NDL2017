import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from "../actions/appActions"
import * as appController from "../controllers/appController"

import PouchDB from 'pouchdb'
window.PouchDB = PouchDB //POUR LE DEV

var tempFormToRender = []

const style = {
  margin: 12,
}

class FormSelector extends Component {

  constructor(props){
    super(props)
    this.submitOneForm = this.submitOneForm.bind(this)
    this.handler = this.handler.bind(this)
    this.updateComponentsSecond = this.updateComponentsSecond.bind(this)

    this.state = {
      formToRender : []
    }
  }

  componentWillMount(){

    var db = new PouchDB('patientDB')
     var nbOfForms = this.props.forms.length
    this.props.forms.map( (formObject , i ) => {
      if (i == nbOfForms -1 ){ //c'est le dernier check
        appController.getReponsesOfSelectedForm(db , this.props.appReducers.selectedPatient , formObject , this.handler , true) //db , patient , form , callBack
      }
      else{
        appController.getReponsesOfSelectedForm(db , this.props.appReducers.selectedPatient , formObject , this.handler , false) //db , patient , form , callBack
      }
    })
  }


  handler(formObject , patient , initialForm , last){

    console.log("------------------------------------------------------------------------")
    console.log("HANDLER" , formObject)
    console.log("HANDLER" , patient)
    console.log("HANDLER" , initialForm)
    console.log("------------------------------------------------------------------------")

    tempFormToRender = this.state.formToRender

    if (typeof formObject ==  "string"){ //si il n'y pas le form dans la base on veut le render
      tempFormToRender.push (initialForm)
      this.setState({formToRender : tempFormToRender})
      console.log("je push")
    }
    else if (formObject.finished == false){ // si il n'est pas finit on veut aussi le render
      tempFormToRender.push(initialForm)
      this.setState({formToRender : tempFormToRender})
      console.log("je push")
    }

    if (last){ //si c'est le dernier check
      console.log("LAST" , tempFormToRender)
      if (tempFormToRender.length == 1){ // il n'y a pas le choix car il n'y a qu'un seul form qui n'a pas été deja rempli
        console.log("IL Y A UN SEUL FORM")
        this.submitOneForm(tempFormToRender[0])
      }
    }
  }

  submitOneForm(formObject){
    console.log("SUBMIT FORM "  , formObject)
    this.props.setSelectedForm(formObject)
    var db = new PouchDB('patientDB')
    appController.getReponsesOfSelectedForm(db , this.props.appReducers.selectedPatient ,formObject , this.updateComponentsSecond , "osef")


  }


  updateComponentsSecond(formObjectRep , paramRand , formBase){
    console.log("UPDATE COMPONENT WITH VALUE SECOND" , formObjectRep)
    if (typeof formObjectRep != "string"){
      var arrayReponses = formObjectRep.reponsesForm
      var Form = JSON.parse(JSON.stringify(formBase))

      Form.form.map( (question , i) =>{
        switch (question.field_type) {

          case "newMealTable":
          Form.form[i].value = {}
          Form.form[i].value.acc = arrayReponses[i][1]
          Form.form[i].value.vpo = arrayReponses[i][2]
          Form.form[i].value.des = arrayReponses[i][3]
          Form.form[i].value.ent = arrayReponses[i][0]
          Form.form[i].value.pl = arrayReponses[i][4]
          break

          case "mealTime":
          var tabStringHours = arrayReponses[i].split("&&&&&")
          Form.form[i].tabHours = tabStringHours
          break

          case "choiceAddRemove":
          console.log("case choiceAddRemove")
          console.log(arrayReponses[i])
          Form.form[i].MyValue = arrayReponses[i]
          break
          case "checkList":
          case "checklist":

          var valToGive = JSON.stringify(arrayReponses[i])
          console.log("VAL" , valToGive)
          Form.form[i].StringVal = valToGive
          break

          case "textAndUnit":

          break
          default:
          Form.form[i].value = arrayReponses[i]
          Form.form[i].numericValue = arrayReponses[i]
          break

        }
      })

      console.log("FORM GENERE SECOND" , Form)
      this.props.setSelectedForm(Form)
    }
  }

  submitAllForm(){
    // var totalForm = []
    // this.props.forms.map( (formObject , i) => {
    //   formObject.form.map((question , j) =>{
    //     totalForm.push(question)
    //   })
    //   totalForm.push({field_type : "separator", form_type : formObject.metadata.type})
    // })
    // this.props.setSelectedForm(totalForm)
    alert("not implemented yet")
  }

  cancel(){
    this.props.updateShowPatientState(true)
  }


  render (){
    console.log("RENDER" , this.props)
    console.log("RENDER" , tempFormToRender)
    console.log("RENDER" , this.state.formToRender)
      return(
        <div>
        <h1>Il y a plusieurs rendez-vous pris avec ce client cette semaine</h1>
        <h2>Veuillez choisir une option</h2>
        {this.state.formToRender.map( (formObject , i ) => {
          return(
            <div key = {i}>
              <RaisedButton
                label = {formObject.metadata.type}
                onClick = {()=>this.submitOneForm(formObject)}
                style = {style}
                key = {i} />
              <br/>
            </div>
          )
        })}
        <br/>
        <RaisedButton
          label = "Annuler"
          onClick = {() => this.cancel()}
          primary = {true}
          style = {style}/>
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

export default connect (mapStateToProps , mapDispatchToProps)(FormSelector)
