import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
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

const LOG = "[ChoiceOrTextIfNone::"

var ChoiceOrTextIfNone = React.createClass({

  getInitialState: function () {
    console.log(LOG + 'getInitialState] : ' + this.props.menuItems[0].text);
    return {value: 0, textValue: '', showOtherValue: false};
  },

  componentDidMount: function () {
    console.log('value of state.value: ' + this.state.value);
    this.setState({value: 0});
  },

  _textChangeHandler: function (e, index, value) {

    console.log('ChoiceOrTextIfNone::_textChangeHandler : ' + e.target.value);
    this.setState({textValue: e.target.value})
    this.props.item.value = e.target.value;

  },

  _changeHandler: function (e, index, value) {
    var lastItemPosition = this.props.menuItems.length - 1
    console.log('ChoiceOrTextIfNone::changeHandler: index:' + index + ' value : ' + value + ' length: ' + lastItemPosition);
    this.setState({value: value});
    this.props.item.numericValue = index;
    if (value == lastItemPosition) {
      this.setState({showOtherValue: true})
    } else {
      this.setState({showOtherValue: false})
      this.props.item.value = this.props.menuItems[value].text;
      this.props.item.numericValue = lastItemPosition;
    }
  },

  handleKeyPressed(e) {
    console.log('handleKeyPressed : ' + e.charCode)
    if (e.charCode == 13) {
      this._addItem(e);
    }
  },

  showOtherTextField: function () {
    return (
      <Row>
        <Col md={6}>
          <ControlLabel>Autre :
          </ControlLabel>
        </Col>
        <Col md={5}>
          <TextField
            onKeyPress={this.handleKeyPressed}
            onChange={this._textChangeHandler}
            value={this.state.value}/>
        </Col>
        <Col md={1}>
          <FloatingActionButton primary={true} mini={true} onClick={this._addItem}>
            <ContentAdd/>
          </FloatingActionButton>
        </Col>
      </Row>
    );
  },

  render: function () {
    console.log('rendering with other : ' + this.state.showOtherValue);
    return (
      <div id="select-container">
        <Row>
          <Col md={5}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={7}>
            <SelectField
              style={{
              width: "100%"
            }}
              value={this.state.value}
              onChange={this._changeHandler}>
              {this.props.menuItems.map(function (item) {
                  return (<MenuItem
                    value={item.id}
                    label={item.text}
                    key={item.id}
                    primaryText={item.text}/>);
                })}
            </SelectField>
          </Col>
        </Row>
        {this.state.showOtherValue
          ? this.showOtherTextField()
          : null}
      </div>
    );
  }
});

export defaultChoiceOrTextIfNone;
