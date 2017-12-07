import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[DynamicFieldComponent::"

var DynamicItem = React.createClass({
  render: function () {
    return (
      <Row>
        <Col md={5} mdOffset={6}>
          <label>{this.props.name}</label>
        </Col>
        <Col md={1} >
          <FloatingActionButton mini={true} secondary={true} onClick={this.props._removeItem}>
            <ContentRemove />
          </FloatingActionButton>
        </Col>
      </Row>      
    );
  }
});

var DynamicFieldComponent = React.createClass({

  getInitialState: function () {
    return ({
      items: [],
      canRemove: false,
      refCounter: 0
    });
  },


  componentWillMount: function () {
    // consultationController.initVariable();
  },

  componentDidMount: function () {
    
    this.setState({ items: this.props.items, refCounter: this.props.items.length });
    
  },

  componentWillReceiveProps: function (nextProps) {
    
    this.setState({ items: nextProps.item.value||[] });
  },

  _changeHandler: function (e) {
    e.preventDefault();
    
    this.setState({ value: e.target.value })
  },

  _removeItem: function (itemToRemove) {

    

    // get the array
    var {items} = this.state;

    // filter out the item to remove
    var filteredItems = items.filter(function (item) {
      return itemToRemove.id !== item.id;
    });

    // update the state
    this.setState({ items: filteredItems })

    this.props.item.value = filteredItems;
  },

  _addItem: function (e) {

    
    var {items} = this.state;

    // don't add empty rows
    if (this.state.value === '' || this.state.value===undefined) return;

    var already = false;

    // don't add already present item
    items.map( (item) => {
      if(item.name === this.state.value)  { 
        already=true 
      }
    })

    if(already) return;

    var newItem = {};
    newItem.id = this.state.refCounter++;
    newItem.name = this.state.value;
    items.push(newItem);
    

    // update the state
    this.setState({ items, value: '' })

    this.props.item.value = items;
  },

  onBlur(e) {
    /*
    var input = this.refs.myInput;
    var inputValue = input.value;

    
    this.props.item.value = inputValue;
    */
  },

  onFocus(e) {
    //
  },


  handleKeyPressed(e) {
    if( e.charCode == 13 ) {
      this._addItem(e);
    }
  },  

  render: function () {
    
    return (
      <div id="dynamic-item-container">
        <Row>
          <Col md={6}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>        
          <Col md={5}>
          <TextField
            onKeyPress={this.handleKeyPressed}
            onChange={this._changeHandler}
            value={this.state.value}/>
          </Col>
          <Col md={1}>
            <FloatingActionButton   mini={true} onClick={this._addItem} >
              <ContentAdd />
            </FloatingActionButton>
          </Col>
        </Row>
        <div className="dynamic-item-list">
          {this.state.items.map(function (item, i) {
            return (
              <DynamicItem name={item.name} key={i} id={item.id} _removeItem={this._removeItem.bind(this, item) } />
            );
          }, this) }
        </div>
      </div>
    );
  }
});



export default DynamicFieldComponent;
