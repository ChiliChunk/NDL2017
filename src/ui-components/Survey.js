import React, { contextTypes } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DataVisualization from './PatientInformation/DataVisualization'
import * as components from '../ui-components';
const {
  IntroComponent,
  TextInputComponent,
  RadioComponent,
  DatePickerInputComponent,
  ChoicesInputComponent,
  ChoicesInputSelector,
  LinkedListInputComponent,
  TextAndUnitInputComponent,
  CheckListInputComponent,
  SliderInputComponent,
  MealSelectorComponent,
  CureSelectorComponent,
  EatenMealSelectorComponent,
  ChoiceOrTextIfNone,
  LinkedListInputSelector,
  AutoCompleteComponent,
  TimedEatenMealSelectorComponent,
  CollationSelector,
  FormPage,
  AsyncButton,
  PreSubmitEhpadPatientForm,
  TabComponent
} = components;
import {
  Grid,
  Col,
  Row,
  Panel,
  Modal,
  Button,
  FormControl,
  FormGroup,
  HelpBlock,
  ControlLabel
} from 'react-bootstrap';
import WebRTC from './WebRTC'
import RoomPage from '../containers/RoomPage';
import WindowContainer from '../containers/WindowContainer';
import MailerContainer from '../containers/MailerContainer';
import RaisedButton from 'material-ui/RaisedButton';
import * as mailer from '../templates/ReviewMail';
import { ActionCreators } from 'redux-undo';
import { addTimeout } from 'redux-timeout';
import { SEND_EMAIL } from '../constants/ActionTypes';


let renderCounter = 0;

let Survey = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.object,
    store: React.PropTypes.object
  },

  getInitialState() {
    return {
      patient: {},
      snackOpen: false,
      dialogOpen: false,
      notepadOpen: false,
      started: false,
      message: '',
      valid: false,
      submitted: false,
      navigationByPage: false,
      canSubmit: true,
      errors: "",
      patientDataArray: [],
      debugLinesArray: [],
      currentItems: [],
      currentPage: 0,
      remotevideo: this.props.layout.windows.remotevideo,
      localvideo: this.props.layout.windows.localvideo,
      survey: this.props.layout.windows.survey,
      dataviz: this.props.layout.windows.dataviz,
      questionnaireHeight: 0,
      questionnaireWidth: 0,
    };
  },

  componentWillMount() {

    this.setState({
      patient: {},
      snackOpen: false,
      dialogOpen: false,
      notepadOpen: false,
      started: false,
    });
    var token = this.props.location.query.accessToken;
    var id = this.props.location.query.id;
    if (token) {
      this.props.surveyActions.fetchInitialData(id, token)
        .then((response) => {
          
          this.props.appActions.closeSideBar();
          this.props.appActions.undockSideBar();
          this.props.surveyActions.start();
        })
        .catch((error) => {
          
        })
    }
  },

  componentWillReceiveProps(nextProps) {
    
    var self = this;
    if (nextProps.survey.present.completed) {
      this.setState({ dialogOpen: true })
    }
    else if (nextProps.layout.loaded) {
      
      this.setState({
        started: true,
        dialogOpen: false
      });
    }
  },

  componentWillUnmount() {
    this.setState({ started: false, dialogOpen: false });
    /*
    this.props.appActions.openSideBar();
    this.props.appActions.dockSideBar();
    */
  },

  abort() {
    alert('aborting due to timeout')
  },



  resizeQuestionnaireAuto(questionnaireHeight, questionnaireWidth) {
    
    /*
    this.setState({
      questionnaireHeight: (questionnaireHeight + 32) + 'px',
      questionnaireWidth: questionnaireWidth > 350 ? questionnaireWidth : 350
    })
    */

    const data = {
      height: (questionnaireHeight + 32) + 'px',
      width: (questionnaireWidth > 350 ? questionnaireWidth : 350) + 'px',
    }
    const newProps = {
      id: this.props.layout.windows.survey.id,
      title: 'Questionnaire',
      top: this.props.layout.windows.survey.top + 50,
      left: this.props.layout.windows.survey.left + 50,
      ratio: this.props.layout.windows.survey.ratio,
      aspectRatioLocked: this.props.layout.windows.survey.aspectRatioLocked,
      ...data,
    }
    this.props.windowActions.updateSizeAndPosition(newProps);
    /*this.refs.survey.transform()*/
    
  },


  _handleRequestClose() {
    
    this.setState({ snackOpen: false });
  },


  _handleSubmit(e) {
    e.preventDefault();
    var self = this;
    this.setState({ dialogOpen: false });
    const mailTitle = `Compte rendu consultation ${this.props.survey.present.patient.prenom} ${this.props.survey.present.patient.nom}`;
    const { mailBody, patient } = self.props.survey.present;

    let index = patient.mna.length - 1;
    let mna = patient.mna[index].score;
    patient.last_mna = mna;
    
    var room_id = this.props.location.query.id;
    Promise.all([
      self.props.ehpadActions.savePatientSurveyData(
        self.props.survey.present.patient.ehpad_id,
        self.props.survey.present.patient._id,
        self.props.survey.present.rawPatient
      ),
      self.props.mailActions.sendmail({
        to: this.props.auth.fullUser.email,
        title: mailTitle,
        notepadContent: this.props.survey.present.notepadContent,
        content: mailBody, patient: patient
      }, this.props.auth.fullUser._id),
      self.props.roomActions.removeRoom(room_id),
    ])
    .then((response) => {
      this.context.router.push('/dieteticien/')
    })
    .catch((error) => {
      this.context.store.dispatch(ActionCreators.jump(-5));
      
    })
  },

  handleClose(e) {
    this.setState({ dialogOpen: false });
    this.context.store.dispatch(ActionCreators.jump(-5));
  },

  _checkMailer() {
    this.props.surveyActions.finish();
  },

  render() {
    
    var roomName = this.props.location.query.room;
    const actions = [
      <RaisedButton
        label="Soumettre"
         
        keyboardFocused={true}
        onTouchTap={this._handleSubmit}
      />,
      <RaisedButton
        label="Annuler"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div id="survey">
        {this.props.layout.loaded ?
          <div id="survey-content">
            <WebRTC
              roomName={roomName}
              localvideo={this.props.layout.windows.localvideo}
              remotevideo={this.props.layout.windows.remotevideo} />
            <WindowContainer
              ref="survey"
              key={"survey"}
              id={this.props.layout.windows.survey.id}
              title={'Questionnaire'}
              top={this.props.layout.windows.survey.top}
              left={this.props.layout.windows.survey.left}
              width={this.props.layout.windows.survey.width}
              height={this.props.layout.windows.survey.height}
              lockAspectRatio={false}>
              {this.props.survey.present.running ?
                <RoomPage
                  resizeQuestionnaireAuto={this.resizeQuestionnaireAuto}
                  style={{ height: "90%", width: "90%", zIndex: "1" }}>
                </RoomPage>
                :
                <div className="text-center">
                  <Panel>
                    <p>Chargement...</p>
                    <CircularProgress />
                  </Panel>
                </div>
              }
            </WindowContainer>
            <WindowContainer
              ref="dataviz"
              key={"dataviz"}
              id={this.props.layout.windows.dataviz.id}
              title={'Informations'}
              top={this.props.layout.windows.dataviz.top}
              left={this.props.layout.windows.dataviz.left}
              width={this.props.layout.windows.dataviz.width}
              height={this.props.layout.windows.dataviz.height}
              lockAspectRatio={false}>
              <TabComponent ref='notepad'
                userId={this.props.auth.fullUser._id}
                patient={this.props.survey.present.patient}
                sendmail={this.props.mailActions.sendmail}
                updateNotepadContent={this.props.surveyActions.updateNotepadContent} />
            </WindowContainer>
            <Dialog
              title="Confirmation"
              actions={actions}
              modal={false}
              open={this.state.dialogOpen}
              onRequestClose={this.handleClose}>
              <strong>Attention: vous vous apprêtez à sauvegarder les informations, envoyer le compte rendu et quitter la consultation. Voulez-vous continuer ?</strong>
            </Dialog>
          </div>
          :
          <div className="text-center">
            <CircularProgress />
          </div>
        }
      </div>
    );
  }
});


// Since this is not a <Route> component, we add History to the context
Survey.contextTypes = {
  history: React.PropTypes.object,
  router: React.PropTypes.object,
  store: React.PropTypes.object,
  socket: React.PropTypes.func,
};

export default Survey;

