import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

var TextWithUnitDisplayInputComponent = React.createClass({

  getInitialState: function () {
    
    return { value: this.props.value, name: this.props.item.name + "_id" };
  },

  componentDidMount: function () {
    
    this.setState({ value: this.props.value, item: this.props.item });
  },

  _changeHandler: function (e) {
    
    this.setState({ value: e.target.value })
    this.props.item.value = e.target.value;
    if (this.props.handleNameChange)
      this.props.handleNameChange(e.target.value);

    if (this.props.validateForm)
      this.props.validateForm(this.props.item.name);
  },

  componentWillReceiveProps: function (nextProps) {
    
    if (nextProps.value === undefined) {
      this.setState({ value: "" });
    }
    else {
      this.setState({ value: nextProps.value });
      this.props.item.value = nextProps.value;
    }
  },

  onBlur(e) {
    
    // this.props.item.value = this.state.value;
    if (this.props.onChange) {
      this.props.onChange(this.state.value, this.props.item);
    }
  },

  onFocus(e) {
    
  },


  handleKeyPressed(e) {
    if (this.props.handleKeyPressed) {
      this.props.handleKeyPressed(e);
    }
    else {
      if (e.charCode == 13) {
        
        this.props.item.value = this.state.value;
        ReactDOM.findDOMNode(this.refs.myInput).blur();
      }
      else if(e.charCode==9) {
        ReactDOM.findDOMNode(this.refs.myInput).blur();
      }
    }
  },

  render: function () {
    return (
      <div id="text-container">
        <Row>
          <Col xsHidden smHidden md={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>

          <Col xs={12} mdHidden lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>

          <Col md={6}>
            <TextField
              name={this.props.item.name + "_id"}
              key={this.props.item.name + "_id"}
              onChange={this._changeHandler}
              onKeyPress={this.handleKeyPressed}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              value={this.state.value || this.props.item.value}
              errorText={this.props.errorMessage}
              style={{"width": "98%"}}
              ref="myInput" />
              <p><span>{this.props.unit}</span></p>
          </Col>
        </Row>
      </div>
    );
  }
});
//              allowEmpty={}
export default TextWithUnitDisplayInputComponent;
