import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React , {Component} from "react"
import * as AppActions from "../actions/appActions"
import * as controller from "../controllers/ConsultationController"
import * as appController from "../controllers/appController"
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import FormSelector from "./FormSelector"

import Snackbar from 'material-ui/Snackbar';




import PouchDB from 'pouchdb'
window.PouchDB = PouchDB //POUR LE DEV


var testForm
var dejaEntree
var ressources = require("../ressources.json")
var formForSelectedPatient = []

var db

class FormCreator extends Component {

  constructor(props){
    super(props)
    this.requestCancel = this.requestCancel.bind(this)
    this.renderDialogCancel = this.renderDialogCancel.bind(this)
    this.goBackToPatientList = this.goBackToPatientList.bind(this)
    this.cancel = this.cancel.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.save = this.save.bind(this)
    this.getDB = this.getDB.bind(this)
    this.updateComponents = this.updateComponents.bind(this)
    this.finishConsultation = this.finishConsultation.bind(this)
    this.renderFinishDialog = this.renderFinishDialog.bind(this)
    this.showFinishDialog = this.showFinishDialog.bind(this)
    this.handlePopupSaveClose = this.handlePopupSaveClose.bind(this)

    this.state = {
      consultationDone : true
    }
  }

  componentWillMount(){
    formForSelectedPatient = []
    console.log("WILL MOUNT")
    var patientSelectedString = JSON.stringify (this.props.appReducers.selectedPatient)
    if (patientSelectedString === "{}" || patientSelectedString === "[object Object]"){
      alert("error")
    }
    else { //    /!\ ATTENTION SI 2 FOIS LE MEME PATIENT /!\
      ressources.map((rdv , i) => {
        if (rdv.patient._id == this.props.appReducers.selectedPatient._id){
          formForSelectedPatient.push({form : rdv.form , metadata : rdv.formMeta})
        }
      })
    }
    formForSelectedPatient.map( (obj , i) =>{
      formForSelectedPatient[i].form = JSON.parse(controller.formatPatientText(this.props.appReducers.selectedPatient , JSON.stringify(formForSelectedPatient[i].form)))
    })
    if (formForSelectedPatient.length == 1){ // si il n'y a qu'un seul rdv prévu avec ce patient on selectionne le seul form par défaut
      this.props.setSelectedForm(formForSelectedPatient[0])
      db = this.getDB()
      appController.getReponsesOfSelectedForm(db , this.props.appReducers.selectedPatient ,formForSelectedPatient[0] , this.updateComponents , "osef")

    }


  }

  updateComponents(formObjectRep){
    console.log("UPDATE COMPONENT WITH VALUE" , formObjectRep)
    if (typeof formObjectRep != "string"){
      var arrayReponses = formObjectRep.reponsesForm
      var Form = JSON.parse(JSON.stringify(this.props.appReducers.selectedForm))
      Form.form.map( (question , i) =>{
        console.log("TEST " , arrayReponses[i])

        if (arrayReponses[i] !== "none"){
          console.log("CA PASSE " , arrayReponses[i])
          switch (question.field_type) {


            case "newMealTable":
              Form.form[i].value = {}
              if (arrayReponses[i][1] !== "none")
              Form.form[i].value.acc = arrayReponses[i][1]

              if (arrayReponses[i][2] !== "none")
              Form.form[i].value.vpo = arrayReponses[i][2]

              if (arrayReponses[i][3] !== "none")
              Form.form[i].value.des = arrayReponses[i][3]

              if (arrayReponses[i][0] !== "none")
              Form.form[i].value.ent = arrayReponses[i][0]

              if (arrayReponses[i][4] !== "none")
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
        }
      })

      console.log("FORM GENERE" , Form)
      this.props.setSelectedForm(Form)
      formForSelectedPatient[0] = Form
      this.forceUpdate()

    }
  }

  requestCancel(){
    this.setState({openDialog : true})
  }

  goBackToPatientList(){
    this.props.updateShowPatientState(true)
  }

  cancel(){
    this.setState({openDialog : false})
    this.setState({openFinishDialog : false})
  }


  finishConsultation(){
    var idPat = this.props.appReducers.selectedPatient._id
    var idForm = this.props.appReducers.selectedForm.metadata._id
    var appId = this.props.appReducers.selectedForm.metadata.applicationId.toString()
    console.log("FINISH POUR LE FORM " , idForm)

    var db = this.getDB()

      db.get(idPat).then(function (doc) {
        console.log("DOC TROUVE " , doc)
        var newReponse = doc.reponses
        newReponse.map( (formObject , i) => {
          if (formObject._id === idForm){
            console.log ("TROUVE" , formObject)
            newReponse[i].finished = true
          }
        })
        console.log("les nouvelles rep" , newReponse)
        return (
          db.put({
          _id : doc._id,
          _rev: doc._rev,
          reponses : newReponse,
          appId : appId
          })
        )
      }).catch(function (err) {
      console.log(err);
      })
      this.setState({openFinishDialog : false})


      setTimeout(function(){
        window.location.reload(false) // FIX TEMPORAIRE!!!!!!!
      }, 1000)
  }
  save(){
    console.clear()
    console.log("SAVE")
    this.setState({openPopupSave : true})
    db = this.getDB()
    var consultationDoneTemp = true
    var valueID = this.props.appReducers.selectedPatient._id.toString()

    var reponsesTemp = []
    console.log(this.refs)
    Object.keys(this.refs).map( (key , index) =>{
      var refTemp = this.refs[key]
      var userValue = undefined
      switch (refTemp.props.item.field_type) {
        case "none":
          break
        case "text":
        case "number":
          userValue  = refTemp.state.value || "" 
          break

        case "date" :
          if (refTemp.props.item.value !== undefined){
            var tempDate = new Date (refTemp.props.item.value)
            userValue = tempDate.toDateString()
          }
          else{
            userValue = "none"
          }
          break

        case "boolean" : // 1 : true ; 0 : false
          userValue = refTemp.props.item.numericValue
          break

        case "textAndUnit":
          userValue = refTemp.props.item.value + "&&&&&" + refTemp.props.item.numericValue
          break

        case "slider":
          userValue = refTemp.state.value
          break

        case "choices":
          userValue = refTemp.props.item.numericValue
          break

        case "cooking":
          userValue = refTemp.props.item.value
          break

        case 'checklist':
        case 'checkList':
          userValue = refTemp.props.item.value
          break

        case "choiceAddRemove":
          userValue = refTemp.state.items
          break

        case "dietTable" :
          userValue = refTemp.state.items
          break

        case 'cureTable':
          userValue = refTemp.state.items
          break;

        case "newMealTable" :
          if (refTemp.props.item.value !== undefined){
            userValue = [refTemp.props.item.value.ent || "none", refTemp.props.item.value.acc || "none", refTemp.props.item.value.vpo || "none", refTemp.props.item.value.des || "none" , refTemp.props.item.value.pl || "none"]
          }
          else{
            userValue = "none"
          }
          break;

        case "mealTime":
          if (refTemp.props.item.value !== undefined){
          var heurPetitDej = "none"
          var heureDiner = "none"
          var heureLunch = "none"
            if (refTemp.props.item.value.breakfast !== undefined)
              heurPetitDej = refTemp.props.item.value.breakfast.toString()

            if (refTemp.props.item.value.diner !== undefined)
              heureDiner = refTemp.props.item.value.diner.toString()

            if (refTemp.props.item.value.lunch !== undefined)
              heureLunch = refTemp.props.item.value.lunch.toString()

            userValue = heurPetitDej + "&&&&&" + heureDiner + "&&&&&" + heureLunch
          }
          else userValue = "none"
            break;

        case "collationTable":
          userValue = refTemp.props.item.value
          break

        case "dynamicMultiplebox":
          userValue = refTemp.props.item.value
          break


        default:
          alert("ERROR : NOT SUPPOSED TO BE DEFAULT")
      }
      if (refTemp.props.item.field_type !== "none" && (userValue === undefined || userValue.toString == "{}" || userValue.toString == "")){
        console.log(refTemp.props.item.field_type)
        console.log(userValue)
        consultationDoneTemp = false;
      }
      reponsesTemp[index] = userValue
    });

    if (consultationDoneTemp){
      this.setState ({consultationDone : false})
    }


    var idForm = this.props.appReducers.selectedForm.metadata._id.toString()
    var idApp = this.props.appReducers.selectedForm.metadata.applicationId.toString()

    var justInit = false
    db.get(valueID).catch(function (err) {
      if (err.status === 404) {
        justInit = true
        console.log("INITIALISATION DU DOC POUR LE PATIENT")
        var repToPush = []
        repToPush.push({ _id : idForm,
                        reponsesForm : reponsesTemp,
                        finished : false})
        return (db.put({
          _id: valueID,
          reponses : repToPush,
          appId : idApp
        }))
      }
      else { // hm, some other error
        throw err;
      }
    })
    .then(function (doc) {


      if(!justInit){
        var formDejaPresent = false
        //update d'un form deja présent
        var repToPush = doc.reponses

        repToPush.map ( (formObject , i )=> {
          if (formObject._id === idForm){
            repToPush[i].reponsesForm = reponsesTemp
            formDejaPresent = true
          }
        })
        if(formDejaPresent){

          return (db.put({
            _id : valueID,
            _rev: doc._rev,
            reponses : repToPush,
            appId : idApp
          }))

        }
        else{
          repToPush.push({
            _id : idForm,
            reponsesForm : reponsesTemp,
            finished : false
          })
          return(
            db.put({
              _id : valueID,
              _rev : doc._rev,
              reponses : repToPush,
              appId : idApp
            })
          )
        }

      }
      })
      .catch(function (err) {
        console.error(err)
      })

  }



  getDB(){
    var db = new PouchDB('patientDB')
    return db
  }

  showFinishDialog(){
    this.setState({openFinishDialog : true})
  }

  handlePopupSaveClose(){
    this.setState({openPopupSave : false})
  }


  renderFinishDialog(){
    if (this.state.openFinishDialog){
      const actions = [
        <FlatButton
          label="Oui"
          onTouchTap={this.finishConsultation}
        />,
        <FlatButton
          label="Non"
          keyboardFocused={true}
          onTouchTap={this.cancel}
        />,
      ]
      return (
        <div>
          <Dialog
            title="Continuer?"
            actions={actions}
            modal={false}
            open={this.state.openFinishDialog}
            onRequestClose={this.cancel}
          >
            <b>Attention:</b> vous vous apprêtez à finaliser le questionnaire, vous ne pourrez plus éditer les informations pour cette personne.<br/>
            Voulez vous continuer?
          </Dialog>
        </div>
      )
    }
  }
  renderDialogCancel(){
    if (this.state.openDialog){
        const actions = [
          <FlatButton
            label="Oui"
            onTouchTap={this.goBackToPatientList}
          />,
          <FlatButton
            label="Non"
            keyboardFocused={true}
            onTouchTap={this.cancel}
          />,
        ]
        return (
          <div>
            <Dialog
              title="Annuler?"
              actions={actions}
              modal={false}
              open={this.state.openDialog}
              onRequestClose={this.cancel}
            >
              <b>Attention</b>, annuler entrainera la perte des données non sauvegardées,<br/>
              Voulez vous continuer?
            </Dialog>
          </div>
        )
    }
  }

  renderItem(item , i){
    var reactComponent = controller.convertToReactComponent(item,  i)
    return reactComponent
  }



  isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return true;
  }

  render(){
    console.log("RENDER FORM" , this.props.appReducers.selectedForm)
    if (this.isEmpty(this.props.appReducers.selectedForm) === false ){ //si il n'y a qu'un seul form attaché au patient
      return(
        <div>
          <h1>Formulaire</h1>
          {this.props.appReducers.selectedForm.form.map( (item , i) => {

            return(
              <div key={i}>
                {this.renderItem(item , i)}
              </div>
            )
          })}
          <RaisedButton
            label = "Annuler"
            primary = {true}
            onClick = {this.requestCancel}
            />
          {this.renderDialogCancel()}
          {this.renderFinishDialog()}
          <RaisedButton
            label = "Enregistrer"
            primary = {true}
            onClick = {this.save}
            />
          <RaisedButton
            label = "Finaliser"
            primary = {true}
            disabled={this.state.consultationDone}
            onClick = {this.showFinishDialog}
            />
            <Snackbar
            open={this.state.openPopupSave}
            message="Enregistrement effectué"
            autoHideDuration={2000}
            onRequestClose={this.handlePopupSaveClose}
            />
        </div>
        )
    }
    else{
      return(
        <div>
          {console.log("JE CHOISI D AFFICHER LE FORM SELECTOR")}
          <FormSelector forms = {formForSelectedPatient} />
        </div>
      )
    }
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

export default connect (mapStateToProps , mapDispatchToProps)(FormCreator)
