import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import {Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap';

var LinkedListInputComponent = React.createClass({

  getInitialState: function () {
    var dataObject = JSON.parse(this.props.item.data_provider);
    
    
    return {
      primarySelectValue: 0,
      showSecondaryMenu: false,
      secondaryMenuItems: [],
      finalValue: '',
      provider: dataObject,
      showOtherValue: false
    };
  },

  _textChangeHandler: function (e, index, value) {

    
    this.setState({ finalValue: e.target.value })
    this.props.item.value = e.target.value;

  },

  _primaryChangeHandler: function (e, index, value) {

    this.setState({
      showOtherValue: false,
      showSecondaryMenu: true,
      primarySelectValue: value,
      secondaryMenuItems: this.state.provider.secondary[value].array
    });
    

  },

  _secondaryChangeHandler: function (e, index, value) {

    

    var lastPrimaryPosition = this.props.primaryMenuItems.length - 1;
    var lastSecondaryPosition = this.props.secondaryMenuItems[value].array.length - 1;

    
    if (value == lastSecondaryPosition && this.state.primarySelectValue == lastPrimaryPosition) {
      this.setState({
        showOtherValue: true,
        secondarySelectValue: value,
        finalValue: this.state.secondaryMenuItems[value].text
      })
    }
    else {
      this.setState({
        showOtherValue: false,
        secondarySelectValue: value,
        finalValue: ''
      });
      this.props.item.value = this.state.finalValue;
      
    }
  },

  showOtherTextField: function () {
    return (
        <Row>
          <Col md={6}>
            <ControlLabel>Autre : </ControlLabel>
          </Col>        
          <Col md={5}>
          <TextField
            onKeyPress={this.handleKeyPressed}
            onChange={this._textChangeHandler}
            value={this.state.value}/>
          </Col>
          <Col md={1}>
            <FloatingActionButton   mini={true} onClick={this._addItem} >
              <ContentAdd />
            </FloatingActionButton>
          </Col>
        </Row>
    );
  },

  render: function () {
    
    return (
      <div id="linked-component-container">
        <Row>
          <Col md={5}>
            <SelectField value={this.state.primarySelectValue} onChange={this._primaryChangeHandler}>
              {this.props.primaryMenuItems.map(function (item) {
                return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
              }) }
            </SelectField>
          </Col>
          <Col md={1}>
            <FloatingActionButton   mini={true} onClick={this._addItem} >
              <ContentAdd />
            </FloatingActionButton>
          </Col>          
          <Col md={6}>
            {this.state.showSecondaryMenu ?
              <SelectField value={this.state.secondarySelectValue} onChange={this._secondaryChangeHandler}>
                {this.state.secondaryMenuItems.map(function (item) {
                  return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
                }) }
              </SelectField>
              : null
            }
          </Col>
        </Row>
        { this.state.showOtherValue ? this.showOtherTextField() : null }
      </div>
    );
  }
});

export default LinkedListInputComponent;