import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import TextField from 'material-ui/TextField';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import IconButton from 'material-ui/IconButton';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
}

const LIFETIME = 110;
const ONEYEAR = 1;

var DatePickerInputComponent = React.createClass({

  getInitialState: function () {
    const initialValue = this.props.value;
    var dateFromProps = initialValue ? new Date(this.props.value) : new Date();

    var minDate = new Date();
    var maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - LIFETIME);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + ONEYEAR);
    maxDate.setHours(0, 0, 0, 0);

    console.log('DatePickerInputComponent::getInitialState: ' + dateFromProps.toDateString() + ' min: ' + minDate + ' max: ' + maxDate);

    return {
      /* value: dateFromProps.toDateString(), */
      textValue: '',
      autoOk: true,
      minDate: minDate,
      maxDate: maxDate,
      showCalendar: false,
    };
  },

  componentDidMount: function () {
    console.log('DatePickerInputComponent::componentDidMount: value : ' + this.props.value + ' dumping structures');
    console.dir(this.state);
    console.dir(this.props);
    this.setState({ value: this.props.value })
    this.props.item.value = this.props.value;

    if (this.props.item.value !== undefined && this.props.item.value !== "none" && this.props.item.value !== "Invalid Date"){
      if (typeof this.props.item.value == "string"){
        var myValue = new Date (this.props.item.value)
        this.setState({value : myValue , textValue : this.props.item.value})

      }
    }

  },

  componentWillReceiveProps: function (nextProps) {
    console.warn('DatePickerInputComponent::componentWillReceiveProps]: updating props : value : ' + nextProps.value);
  },

  _submitHandler: function (e) {
    e.preventDefault();
    console.log('DatePickerInputComponent::_submitHandler: value :' + this.state.value);
    this.setState({ value: e.target.value })
    this.props.item.value = e.target.value;
  },

  _textChangeHandler: function (e) {
    console.log('DatePickerInputComponent::new value from textField : ' + e.target.value);
    this.setState({ textValue: e.target.value })
    this.props.item.value = e.target.value;
  },

  _validateDate(e) {
    console.log('date from text field : ' + e.target.value);
    const date = new Date(e.target.value.split('/').reverse().join('/'));
    console.log('date after processing : ' + date);
    // store in UTC format
    try{
      const textValue = this.formatDate(date);
      this.props.item.value = date;
      this.props.item.textValue = textValue;
      this.setState({ value: date, textValue: textValue });
    }
    catch (e){
      console.log("ERROR FORMAT DATEEEE")
    }
  },

  _dateChangeHandler: function (e, date) {
    console.log('DatePickerInputComponent::changeHandler: date : ' + date);
    try{
      const textValue = this.formatDate(date);
      this.props.item.value = date;
      this.props.item.textValue = textValue;
      this.setState({ value: date, textValue: textValue });
    }
    catch (e){
      console.log("ERROR FORMAT DATEEEE")
    }
  },

  _requestCloseHandler: function () {
    var date = this.refs.datepicker.getDate();
    console.log('DatePickerInputComponent::requestCloseHandler: date : ' + this.state.value + ' date from refs: ' + date);
    this.props.item.value = this.state.value;
    this.setState({ showCalendar: !this.state.showCalendar })
  },

  formatDate(date) {
    console.log("DATEE A FORMAT" , date )
    try {
      var result =  new Intl.DateTimeFormat("fr").format(date)
      return result
    } catch (e) {
      console.log("ERROR EN FORMATANT LA DATE")
    }
  },

  openDatePickerDialog(e) {
    console.dir(this.refs.datepicker.handleTouchTap(e));
    this.refs.datepicker.handleTouchTap(e)
  },

  render: function () {
    return (
      <div id="date-container">
        <Row>
          <Col xs={12} lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col xsHidden smHidden mdHidden lg={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <TextField
              onBlur={this._validateDate}
              hintText={"jj/mm/aaaa"}
              onChange={this._textChangeHandler}
              style={{"width": "50%"}}
              value={this.state.textValue}
              defaultValue={this.props.value}
              disabled = {true}
              />
            <IconButton onClick={this.openDatePickerDialog}>
              <div>
                <FontAwesome name='calendar' size='2x' fixedWidth style={{fontSize:"large"}}/>
              </div>
            </IconButton>
          </Col>
          <Col lg={4} md={6} xs={12} style={{display:"none", visibility:"hidden"}}>
            <DatePicker
              ref="datepicker"
              mode="landscape"
              DateTimeFormat={DateTimeFormat}
              okLabel="Valider"
              cancelLabel="Annuler"
              locale="fr"
              container="dialog"
              hintText="Calendrier"
              minDate={this.state.minDate}
              maxDate={this.state.maxDate}
              autoOk={this.state.autoOk}
              value={this.state.value}
              onChange={this._dateChangeHandler}
              onDismiss={this._requestCloseHandler}
              style={{"width": "98%"}}
              />
          </Col>
        </Row>
      </div>

    );
  }
});

export default DatePickerInputComponent;
