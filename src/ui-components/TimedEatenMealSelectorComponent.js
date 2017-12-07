import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[TimedEatenMealSelectorComponent::"

const style = {
  marginRight: 20,
};

var response = { "breakfast": undefined, "lunch": undefined, "diner": undefined };


var TimedEatenMealSelectorComponent = React.createClass({

  getInitialState: function () {

    return ({
      items: [],
      canRemove: false,
      refCounter: 0
    });
  },


  componentWillMount: function () {
    console.log("TimedEatenMealSelectorComponent" , this.props)

    if (this.props.item.tabHours !== undefined){
      if (this.props.item.tabHours[0] !== "Invalid Date" && this.props.item.tabHours[0] !== "none"){

        response.breakfast = new Date (this.props.item.tabHours[0])
      }
      if (this.props.item.tabHours[1] !== "Invalid Date" && this.props.item.tabHours[1] !== "none"){
        response.lunch = new Date (this.props.item.tabHours[1])

      }
      if (this.props.item.tabHours[2] !== "Invalid Date" && this.props.item.tabHours[2] !== "none"){

        response.diner = new Date (this.props.item.tabHours[2])
      }

      console.log("OBJECT RESPONSES" , response)
      this.props.item.value = response;

    }
  },

  componentDidMount: function () {

  },

  componentWillReceiveProps: function (nextProps) {

  },


  _handleBreakfastChange: function (e, time) {

    // this.refs.breakfast.setTime(time);
    response.breakfast = time;
    this.props.item.value = response;

  },

  _handleLunchChange: function (e, time) {

    // this.refs.lunch.setTime(time);
    response.lunch = time;
    this.props.item.value = response;

  },

  setDefaultTime : function (typeMeal) {
    if (this.props.item.tabHours !== undefined){
      switch (typeMeal) {
        case "breakfast":
          if (this.props.item.tabHours[0] !== "Invalid Date" && this.props.item.tabHours[0] !== "none" && this.props.item.tabHours[1] !== undefined){// ca me saoule
            return (new Date (this.props.item.tabHours[0]))
          }
          break
        case "lunch" :
          if (this.props.item.tabHours[1] !== "Invalid Date" && this.props.item.tabHours[1] !== "none" && this.props.item.tabHours[1] !== undefined){
            return (new Date (this.props.item.tabHours[1]))
          }
          break

        case "diner" :
          if (this.props.item.tabHours[2] !== "Invalid Date" && this.props.item.tabHours[2] !== "none" && this.props.item.tabHours[1] !== undefined){
            return  (new Date (this.props.item.tabHours[2]))
          }

          break
        default:

      }
    }
    else {
      return null
    }
  },

  _handleDinerChange: function (e, time) {

    // this.refs.diner.setTime(time);
    response.diner = time;
    console.log(response)
    this.props.item.value = response;

  },
  /*
                  <Col xsHidden smHidden md={6}>
                      <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
                  </Col>
                  <Col xs={12} mdHidden lgHidden>
                      <ControlLabel>{this.props.item.text}</ControlLabel>
                  </Col>
  */
  render: function () {
    return (
      <div id="timed-meal-item-container">
        <Row>
          <Col xsHidden smHidden md={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>
          <Col xs={12} mdHidden lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={2} mdOffset={6}>
            <TimePicker
              format="24hr"
              ref="breakfast"
              onChange={this._handleBreakfastChange}
              defaultTime = {this.setDefaultTime("breakfast")}
              autoOk={true}
              hintText="Petit Déjeuner" />
          </Col>
          <Col md={2} mdOffset={6}>
            <TimePicker
              format="24hr"
              ref="lunch"
              onChange={this._handleLunchChange}
              defaultTime = {this.setDefaultTime("lunch")}
              autoOk={true}
              hintText="Déjeuner" />
          </Col>
          <Col md={2} mdOffset={6}>
            <TimePicker
              format="24hr"
              ref="diner"
              autoOk={true}
              defaultTime = {this.setDefaultTime("diner")}
              onChange={this._handleDinerChange}
              hintText="Diner" />
          </Col>
        </Row>
      </div>
    );
  }
});



export default TimedEatenMealSelectorComponent;
