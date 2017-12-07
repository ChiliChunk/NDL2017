import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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

var TextAndUnitInputComponent = React.createClass({

  getInitialState: function () {
    console.log('TextAndUnitInputComponent::getInitialState: value : ' + this.props.value);
    console.dir(this.props.item);

    return ({textValue: "", selectValue: 0});
  },

  componentDidMount: function () {
    console.log('TextAndUnitInputComponent:componentDidMount: value : ' + this.props.value);
  },

  _textChangeHandler: function (e) {
    e.preventDefault();
    console.log('TextAndUnitInputComponent::_textChangeHandler: value : ' + e.target.value);
    this.setState({textValue: e.target.value})
    this.props.item.value = e.target.value;
    this.props.item.numericValue = this.state.selectValue;
    this.props.item.unit = this.props.menuItems[this.state.selectValue].text;
    console.log('TextAndUnitInputComponent::_textChangeHandler: value of item.value : ' + this.props.item.value);
    console.dir(this.props.item);
  },

  componentWillReceiveProps: function (nextProps) {
    console.warn('updating props : value : ' + JSON.stringify(nextProps));
  },

  _selectChangeHandler: function (e, index, value) {
    console.log('TextAndUnitInputComponent::_selectChangeHandler: index:' + index + ' value : ' + value);
    this.setState({selectValue: value});
    this.props.item.unit = this.props.menuItems[value].text;
    console.log('value of anwser : ' + this.props.item.value);
  },

  render: function () {
    return (
      <div id="text-container">
        <Row>
          <Col md={6}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={3} style={{
            height: "24px"
          }}>
            <TextField
              onChange={this._textChangeHandler}
              onKeyPress={this.handleKeyPressed}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              value={this.state.value}
              errorText={this.props.item.errorMessage || ''}
              ref="myInput"/>
          </Col>
          <Col md={3} style={{
            height: "24px"
          }}>
            <SelectField
              value={this.state.selectValue}
              onChange={this._selectChangeHandler}
              floatingLabelText="Unité">
              {this
                .props
                .menuItems
                .map(function (item) {
                  return <MenuItem
                    value={item.id}
                    label={item.text}
                    key={item.id}
                    primaryText={item.text}/>
                })}
            </SelectField>
          </Col>
        </Row>
      </div>
    );
  }

});

export default TextAndUnitInputComponent;
