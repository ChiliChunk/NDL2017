
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[ChoicesInputSelector::"

var MyItem = React.createClass({
  render: function () {
    return (
      <Row>
        <Col md={5} mdOffset={6} >
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

var ChoicesInputSelector = React.createClass({

  getInitialState: function () {
    return { items: [], refCounter: 0 };
  },

  componentDidMount: function () {

    this.setState({ value: 0, items: this.props.items });
    if (this.props.item.MyValue !== undefined){
      this.setState({items : this.props.item.MyValue})
    }
  },


  componentWillReceiveProps: function (nextProps) {

    this.setState({ value: nextProps.value });
    this.props.item.value = nextProps.value;
  },

  _changeHandler: function (e, index, value) {

    this.setState({ value: value });
    this.props.item.value = this.props.menuItems[value].text;
    this.props.item.numericValue = index;


    var {items} = this.state;

    var newItem = {};
    newItem.id = this.state.refCounter++;
    newItem.name = this.props.menuItems[value].text;
    items.push(newItem);


    // update the state
    this.setState({ items })
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

  render: function () {
    const unique = this.props.item.name;
    return (
      <div id="select-container">
        <Row>
          <Col md={6}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={6}>
            <SelectField style={{ width: "100%" }} value={this.state.value} onChange={this._changeHandler}>
              {this.props.menuItems.map(function (item) {
                return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
              }) }
            </SelectField>
          </Col>
        </Row>
        <div className="dynamic-item-list">
          {this.state.items.map(function (item, i) {
            return (
              <MyItem name={item.name} key={unique + '_' + item.id + '_' + i} id={item.id} _removeItem={this._removeItem.bind(this, item) } />
            );
          }, this) }
        </div>
      </div>
    );
  }
});

export default ChoicesInputSelector;
