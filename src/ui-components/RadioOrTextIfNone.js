import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';


const LOG = "[RadioOrTextIfNone::"


class RadioOrTextIfNone extends React.Component {

  constructor(props) {
    super(props);
    this._changeHandler = this._changeHandler.bind(this)
    this._textChangeHandler = this._textChangeHandler.bind(this)
    this.showOtherTextField = this.showOtherTextField.bind(this)
    this.state = {
      value: 0, 
      textValue: '', 
      showOtherValue: false
    }
  }

  _textChangeHandler(e) {
    console.log('RadioOrTextIfNone::_textChangeHandler : ' + e.target.value);
    this.setState({textValue: e.target.value})
    this.props.item.value = e.target.value;
    this.props.item.numericValue = this.props.radioItems.length - 1;    
  }

  _changeHandler(e, index) {
    var lastItemPosition = this.props.radioItems.length - 1
    console.log('RadioOrTextIfNone::changeHandler: index:' + index + ' length: ' + lastItemPosition);
    this.setState({value: index});
    this.props.item.numericValue = index;
    if (index == lastItemPosition) {
      this.setState({showOtherValue: true})
    } else {
      this.setState({showOtherValue: false})
      this.props.item.value = this.props.radioItems[index].text;
      this.props.item.numericValue = lastItemPosition;
    }
  }

  showOtherTextField() {
    return (
      <Row>
        <Col md={6}>
          <ControlLabel>Autre :
          </ControlLabel>
        </Col>
        <Col md={6}>
          <TextField
            onChange={this._textChangeHandler}
            value={this.state.textValue}/>
        </Col>
      </Row>
    );
  }

  render() {
    const unique = this.props.item.name;
    const radioButtons = this.props.radioItems.map((item, i) => {
      return (
        <RadioButton
          className="with-gap"
          value={item.id}
          label={item.text}
          key={i + '-' + item.id}
          name={unique}
          id={unique + '-' + item.id} />
      );
    });    
    return (
      <div id="radio-container">
        <Row>
          <Col md={5}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={7}>
          <RadioButtonGroup onChange={this._changeHandler} name={this.props.item.name} defaultSelected={this.props.item.numericValue}>
            {radioButtons}
          </RadioButtonGroup>
          </Col>
        </Row>
        {this.state.showOtherValue
          ? this.showOtherTextField()
          : null}
      </div>
    );
  }
}

export default RadioOrTextIfNone;
