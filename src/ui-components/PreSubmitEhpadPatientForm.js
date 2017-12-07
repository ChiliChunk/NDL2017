import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';
import ShowTextComponent from './ShowTextComponent';
import TextInputComponent from './TextInputComponent';
import CheckListInputComponent from './CheckListInputComponent'

import ChoiceOrTextIfNone from './ChoiceOrTextIfNone';
import AutoCompleteComponent from './AutoCompleteComponent';
import TextAndUnitInputComponent from './TextAndUnitInputComponent';
import RadioComponent from './RadioComponent';

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

var PreFormItem = React.createClass({

  getInitialState() {
    return { isEditing: false, isOpen: {}, controller: {} };
  },

  componentDidMount() {
  },

  onClick(e) {
    this.setState({ isEditing: true });
    if (this.props.onClick) {
      this.props.onClick();
    }
  },

  onValidate(e) {
    const isValid = this.props.validate(this.props.item);
    
    if (isValid) {
      this.props.storeValue(this.props.item);
      this.props.processEvents(this.props.patient, this.props.item);
      this.setState({ isEditing: false });
    }
    else
    alert(`item ${this.props.item.name} value : ${this.props.item.value} is ${isValid}`)
  },

  renderItem(rawItem) {
    var item = this.props.controller.convertToReactComponent(rawItem);
    //
    //
    return item;
  },

  formatDate(date) {
    return new Intl.DateTimeFormat("fr").format(date);
  },

  getFraction(value) {
    
    switch (value) {
      case 0: return '0'
      case 25: return '1/4'
      case 50: return '1/2'
      case 75: return '3/4'
      case 100: return '1';
    }
  },

  getDisplayValue(answer) {
    /** FIXME */
    if (answer === undefined) return;

    /** FIXME */
    if (answer.hasOwnProperty('value')) {

      const type = this.props.controller.getType(answer.value);
      

      switch (type) {
        case 'string':
          return answer.value;

        case 'array':
          let textValue = '';
          answer.value.forEach(function (raw) {
            // @FIXME: some item has the .value property other have the .text property - it's confusing and not benefiting.
            textValue += raw.text || raw.value || raw.name;
            textValue += '<br/>';
            
            
          })
          return answer.value.length ? textValue : 'Vide';

        case 'object':
          return answer.value || answer.text || 'propriété inconnnue';

        /** TODO : format date to locale */
        case 'date':
          return this.formatDate(answer.value);


        case 'meal':
          return `
            Entrée: <strong>${this.getFraction(answer.value.ent)}</strong><br/>
            Accompagnement: <strong>${this.getFraction(answer.value.acc)}</strong><br/>
            VPO: <strong>${this.getFraction(answer.value.vpo)}</strong><br/>
            Dessert: <strong>${this.getFraction(answer.value.des)}</strong><br/>
            Produits Laitiers: <strong>${this.getFraction(answer.value.pl)}</strong><br/>`;

        case 'undefined':
          return 'Rien à signaler';

        default:
          
          return 'Aucune réponses';
      }
    }
    else {
      // maybe containt the right value despite having the right structure /** FIXME **/
      return answer;
    }
  },


  render() {
    let answer = this.props.rawObject[this.props.item.name];
    const editButton = (
      <IconButton onClick={this.onClick}>
        <svg style={{ width: "24px", height: "24px", fill: "#000000" }} viewBox="0 0 24 24">
          <path d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z" />
        </svg>
      </IconButton>
    );
    const validateButton = (
      <IconButton onClick={this.onValidate}>
        <svg style={{ width: "24px", height: "24px", fill: "#000000" }} viewBox="0 0 24 24">
          <path fill="#000000" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
        </svg>
      </IconButton>
    );
    return (
      <div id="form-item-container">
        {this.state.isEditing ?
          <Row>
            <Col md={11}>
              {this.renderItem(this.props.item)}
            </Col>
            <Col md={1}>
              {validateButton}
            </Col>
          </Row>
          :
          <div id="item" key={"formitem" + this.props.item.id}>
            <Row>
              <Col md={6}>
                <ControlLabel>{this.props.item.text}</ControlLabel>
              </Col>
              <Col md={5}>
                <ShowTextComponent text={this.getDisplayValue(answer)} />
              </Col>
              <Col md={1}>
                {editButton}
              </Col>
            </Row>
          </div>
        }
      </div>
    );
  }
});

var PreSubmitEhpadPatientForm = React.createClass({

  getInitialState() {
    return {
      items: [],
      controller: {},
      dialogOpen: false,
      isEditing: false,
    };
  },

  componentWillMount() {
    
    this.props.ehpadActions.getController();
  },

  componentWillReceiveProps(nextProps) {
    
    this.state.items.map((item, i) => {
      
    });
  },

  componentDidMount() {
    this.setState({ items: this.props.formItems, controller: this.props.ehpad.controller });
  },

  showConfirmationDialog(e) {
    this.setState({ dialogOpen: true });
  },

  handleClose(e) {
    this.setState({ dialogOpen: false });
  },

  handleSubmit(e) {
    this.setState({ dialogOpen: false });
    
    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    }
  },

    /**
     * @description: render the final form review before submitting to server
     * @see: each items is rendered depending on the return value of evaluateShowConditions()
     * that set the @property is_hidden to {true} or {false}  
     */
  render() {
    const actions = [
      <RaisedButton
        label="Soumettre"
         
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
        />,
      <RaisedButton
        label="Annuler"
        secondary={true}
        onTouchTap={this.handleClose}
        />,
    ];

    return (
      <div id="pre-submit-container" className="container">

          {this.state.items.map((item, i) => {
            
            /** check display condition here */
            if(!item.depends_on.match('none')) {
              const shouldBeDisplayed = this.props.ehpad.controller.evaluateShowConditions(this.props.ehpad, item);
              
              item.is_hidden = !shouldBeDisplayed;
            }            

            if (!item.is_hidden) {
              return (
                <div>
                  <PreFormItem
                    storeValue={this.props.ehpadActions.storeValue}
                    validate={this.props.ehpadActions.validate}
                    processEvents={this.props.ehpadActions.processEvents}
                    rawObject={this.props.ehpad.rawPatient}
                    patient={this.props.ehpad.patient}
                    item={item}
                    key={item.name + '_id_' + i}
                    controller={this.props.ehpad.controller} />
                </div>
              );
            }
          }, this)}
          <div className="text-center">
            <RaisedButton label="Finaliser"   onClick={this.showConfirmationDialog} />
          </div>
          <Dialog
            title="Confirmation"
            actions={actions}
            modal={false}
            open={this.state.dialogOpen}
            onRequestClose={this.handleClose}>
            <strong>Attention: une fois soumis les résultats sont définitifs.</strong>
          </Dialog>
      </div>
    );
  }
});




PreSubmitEhpadPatientForm.contextTypes = {
  router: React.PropTypes.object,
};

export default PreSubmitEhpadPatientForm;
