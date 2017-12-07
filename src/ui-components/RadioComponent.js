import React, { PropTypes } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

/**
 * refactor me
 */
var RadioComponent = React.createClass({

  getInitialState() {
    return ({
      defaultValue: false,
      value: 0,
      textValue: '',
    });
  },

  componentDidMount() {

  },

  componentWillReceiveProps(nextProps) {
    console.warn('RadioComponent::componentWillReceiveProps: updating props : ' + JSON.stringify(nextProps));
  },

  _changeHandler(e) {

    this.props.item.numericValue = e.currentTarget.value;
    this.props.item.value = this.props.radioItems[e.currentTarget.value].text;

    console.log('[_changeHandler]: event value : ' + e.currentTarget.value + ' human value : ' +  this.props.item.value );

    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value, this.props.item);
    }
  },

  render() {
    const unique = this.props.item.name;
    const radioButtons = this.props.radioItems.map((item, i) => {
      return (
        <RadioButton
          className="with-gap"
          value={item.id}
          label={item.text}
          key={i + '-' + item.id}
          name={unique + this._counter}
          id={unique + '-' + item.id + '-' + this._counter} />
      );
    });

    return (
      <Row>
        <Col md={6}>
          <ControlLabel>{this.props.item.text}</ControlLabel>
        </Col>
        <Col md={6}>
          <RadioButtonGroup onChange={this._changeHandler} name={this.props.item.name} defaultSelected={this.props.item.numericValue}>
            {radioButtons}
          </RadioButtonGroup>
        </Col>
      </Row>
      );
  }
});

export default RadioComponent;
