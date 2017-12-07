import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

var PasswordInputComponent = React.createClass({

  getInitialState: function () {
    return { 
      value: '', 
      name: this.props.item.name + "_id" 
    };
  },

  componentDidMount: function () {
    
  },

  _changeHandler: function (e) {
    
    this.setState({ value: e.target.value })
    this.props.item.value = e.target.value;
    if(this.props.onChange) {
      this.props.onChange(e.target.value, this.props.item);
    }    
  },

  
  onBlur(e) {
    
    if (this.props.onBlur) {
      this.props.onBlur(e.target.value, this.props.item);
    }
  },

  onFocus(e) {
    
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

  handleKeyPressed(e) {
    if (this.props.handleKeyPressed) {
      this.props.handleKeyPressed(e);
    }
    else {
      if (e.charCode == 13) {
        
        this.props.item.value = this.state.value;
        //ReactDOM.findDOMNode(this.refs.myInput).blur();
        this.emit('focusout');
      }
      else if(e.charCode==9) {
        //ReactDOM.findDOMNode(this.refs.myInput).blur();
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
          <Col md={5}>
            <TextField
              type={"password"}
              name={this.props.item.name + "_id"}
              key={this.props.item.name + "_id"}
              onChange={this._changeHandler}
              onKeyPress={this.handleKeyPressed}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              placeholder={this.props.placeholder}
              value={this.state.value || this.props.item.value}
              errorText={this.props.errorMessage}              
              style={{"width": "98%"}}
              ref="myInput" />
          </Col>
          {this.props.isFetching ?          
            <Col md={1}>                   
              <Spinner spinnerName='circle' noFadeIn style={{ width: 16, height: 16 }} />
            </Col>
            : 
            null
          }
        </Row>
      </div>
    );
  }
});

export default PasswordInputComponent;
