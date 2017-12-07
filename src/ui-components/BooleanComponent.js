import React, { PropTypes } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

// Assume false (equal healthy, customer friendly / optimistic)
var RadioComponent = React.createClass({

  getInitialState() {
    this._counter = 0;
    this._answers = [{ "id": "0", "text": "Non", value : false },{ "id": "1", "text": "Oui", value : true }];
    return ({
      value: undefined,
    });
  },

  componentDidMount() {

  },


  componentWillReceiveProps(nextProps) {
    

  },

  _changeHandler(e) {

    this.setState({ value: e.currentTarget.value });

    this.props.item.numericValue = e.currentTarget.value;
    this.props.item.value = this._answers[e.currentTarget.value].text;

    

    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value, this.props.item);
    }
  },

  render() {
    const unique = this.props.item.name;
    const radioButtons = this._answers.map((item, i) => {
      return (
        <RadioButton
          className="with-gap"
          value={item.id}
          label={item.text}
          key={i + '-' + item.id}
          name={unique + this._counter}
          id={unique + '-' + item.id + '-' + this._counter}/>
      );
    });
    return (
      <div id="radio-container">
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
      </div>
    );
  }
});


export default RadioComponent;
