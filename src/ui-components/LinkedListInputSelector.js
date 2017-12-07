import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import {Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap';

const style = {
  marginBottom: 20
};
const LOG = "[LinkedListInputSelector::";

var MyItem = React.createClass({
  render: function () {
    return (
      <Row>
        <Col xsOffset={6} xs={12} md={5}>
          <label>{this.props.name}</label>
        </Col>
        <Col md={1}>
          <FloatingActionButton mini={true} secondary={true} onClick={this.props._removeItem}>
            <ContentRemove />
          </FloatingActionButton>
        </Col>
      </Row>
    );
  }
});

var LinkedListInputSelector = React.createClass({

  getInitialState: function () {
    var dataObject = JSON.parse(this.props.item.data_provider);


    return {
      items: [],
      refCounter: 0,
      primarySelectValue: undefined,
      secondaryMenuItems: [],
      finalValue: '',
      provider: dataObject,
      showOtherValue: false
    };
  },

  componentDidMount: function () {
    if (this.props.item.numericValue !== undefined && typeof this.props.item.numericValue == "object"){
      this.setState({items : this.props.item.numericValue})
      this.props.item.value = this.props.item.numericValue
    }
    else{

      this.setState({
        items: this.props.value
      });
    }
  },


  componentWillReceiveProps: function (nextProps) {

    var {items} = this.state || [];
    let ret = items.find(i => i.name == 'Aucune')
    let counter = 0;
    if(nextProps.value) {
      if(Array.isArray(nextProps.item.value)) {
        nextProps.value.forEach((item) => {
          var newItem = {};
          newItem.id = item.id;
          newItem.name = item.name;
          if(newItem.name && !items.find(i => i.name == newItem.name)) {
            items.push(newItem);
            counter++;
          }
        })
      }
      this.setState({
        items: items,
        primarySelectValue: undefined,
        secondarySelectValue: undefined
      })
    }
  },


  _textChangeHandler: function (e, index, value) {


    this.setState({finalValue: e.target.value})
    this.props.item.value = e.target.value;

  },

  _primaryChangeHandler: function (e, index, value) {

    var lastPrimaryPosition = this.props.primaryMenuItems.length - 1;
    /**
     * 2 cas spéciaux : Aucunes / Autres
     */
    switch(Number(value)) {
      case 7:


      this.setState({
        primarySelectValue: undefined,
        showOtherValue: true,
        secondarySelectValue: undefined,
        finalValue: '',
      })
      break;

      case 8:

      this.setState({
        showOtherValue: false,
        primarySelectValue: undefined,
        secondarySelectValue: undefined,
        finalValue: this.props.primaryMenuItems[value].text
      });
      this.props.item.value = this.props.primaryMenuItems[value].text;

      var {items} = this.state || [];

      var newItem = {};
      newItem.id = this.state.refCounter++;
      newItem.name = this.props.primaryMenuItems[value].text;
      items.push(newItem);


      // update the state
      this.setState({
        items: items,
        primarySelectValue: undefined,
        secondarySelectValue: undefined
      })
      this.props.item.value = items;
      break;


      default :

        this.setState({
          showOtherValue: false,
          primarySelectValue: value,
          secondarySelectValue: undefined,
          secondaryMenuItems: this.state.provider.secondary[value].array
        });
      break;

    }
  },

  _secondaryChangeHandler: function (e, index, value) {


    var lastPrimaryPosition = this.props.primaryMenuItems.length - 1;
    var lastSecondaryPosition = this.state.secondaryMenuItems.length - 1;

    if (value == lastSecondaryPosition && this.state.primarySelectValue == lastPrimaryPosition) {

      this.setState({
        showOtherValue: true,
        secondarySelectValue: value,
        finalValue: '',
      })
    }
    else {

      this.setState({
        showOtherValue: false,
        secondarySelectValue: value,
        finalValue: ''
      });
      this.props.item.value = this.state.secondaryMenuItems[value].text;

      var items = this.state.items || []

      var newItem = {};
      newItem.id = this.state.refCounter++;
      newItem.name = this.state.secondaryMenuItems[value].text;
      items.push(newItem);


      // update the state
      this.setState({items})
      this.props.item.value = items;
    }
  },

  _removeItem: function (itemToRemove) {



    // get the array
    var {items} = this.state;

    // filter out the item to remove
    var filteredItems = items.filter(function (item) {
      return itemToRemove.id !== item.id;
    });

    // update the state
      this.setState({
        secondarySelectValue: undefined,
        primarySelectValue: undefined,
        finalValue: '',
        items: filteredItems
      });

    this.props.item.value = filteredItems;

  },

  _addOther(e) {
    var {items} = this.state;

    // don't add empty rows
    if (this.state.finalValue === '' || this.state.finalValue === undefined) return;

    var newItem = {};
    newItem.id = this.state.refCounter++;
    newItem.name = this.state.finalValue;
    items.push(newItem);

    this.props.item.value = items;
    // update the state
    this.setState({items, finalValue: '', showOtherValue: false})

  },

  handleKeyPressed(e) {

    if (e.charCode == 13) {
      this._addOther(e);
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
            value={this.state.finalValue}/>
        </Col>
      </Row>
    );
  },

  render: function () {
    const unique = this.props.item.name;
    return (
      <div id="linked-selector-container">
        <Row>
          <Col xsHidden smHidden md={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>
          <Col xs={12} mdHidden lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col xs={11} md={5}>
            <SelectField value={this.state.primarySelectValue} onChange={this._primaryChangeHandler}
                         style={{"width": "98%"}}>
              {(this.props.primaryMenuItems || []).map(function (item) {
                return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
              })}
            </SelectField>
          </Col>
          <Col xs={1} md={1}>
            <FloatingActionButton   mini={true} onClick={this._addItem} >
              <ContentAdd />
            </FloatingActionButton>
          </Col>
        </Row>
        {this.state.primarySelectValue !== undefined ?
          <Row>
            <Col xs={6} xsOffset={6}>
              <SelectField value={this.state.secondarySelectValue} onChange={this._secondaryChangeHandler}
                           style={{"width": "98%"}}>
                {(this.state.secondaryMenuItems || []).map(function (item) {
                  return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
                })}
              </SelectField>
            </Col>
          </Row>
          : null
        }
        <div className="dynamic-item-list">
          {(this.state.items || []).map(function (item, i) {
            return (
              <MyItem name={item.name} key={unique+'_'+i} id={item.id} _removeItem={this._removeItem.bind(this, item)}/>
            );
          }, this)}
        </div>
        {this.state.showOtherValue ? this.showOtherTextField() : null}
      </div>
    );
  }
});

export default LinkedListInputSelector;
