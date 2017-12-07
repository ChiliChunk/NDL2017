import React from 'react';
import Slider from 'material-ui/Slider';

import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[SliderInputComponent::"

var SliderInputComponent = React.createClass({

  getInitialState: function () {
    var bound = this.props.item.contrainte.split(',');

    var minBound = Number(bound[0]);
    var maxBound = Number(bound[1]);
    var stepping = Number(this.props.step);

    
    return { value: 0.5, min: minBound, max: maxBound, step: stepping, displayValue: 0 }
  },

  componentDidMount: function () {
    
    this.setState({ 
      value: this.props.item.value,
      displayValue: this.props.item.value
    });
  },

  componentWillReceiveProps: function () {
    
    this.setState({ 
      value: this.props.item.value,
      displayValue: this.props.item.value
    });
  },

  _changeHandler: function (e, value) {
    let roundedValue = new Number(value*this.props.modifier).toFixed(0);    
    //
    this.setState({ value: roundedValue, displayValue: roundedValue })
    this.props.item.value = roundedValue;
  },


  render: function () {
    let defaultValue = (new Number(this.props.value) / this.props.modifier);
    return (
      <div id="slider-container">
        <Row>
          <Col md={6}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>       
          <Col md={5}>
            <Slider defaultValue={defaultValue} name="slider1" onChange={this._changeHandler} min={this.state.min} max={this.state.max} step={this.state.step}/>
          </Col>
          <Col md={1}>
            <label><strong>{this.state.displayValue}</strong></label>
          </Col>
        </Row>
      </div>
    );
  }

});

export default SliderInputComponent
