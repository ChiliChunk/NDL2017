import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import TimePicker from 'material-ui/TimePicker';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[CollationSelector::"

const style = {
  marginRight: 20,
};

var CollationItem = React.createClass({
  render() {
    return (
      <Row>
        <Col lg={3} md={6} xs={12} mdOffset={6} lgOffset={6}>
          <label>{this.props.name}</label>
        </Col>
        <Col md={2}>
          <label>{this.props.time}</label>
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


var CollationSelector = React.createClass({

  getInitialState() {

    return ({
      items: [],
      canRemove: false,
      refCounter: 0,
      value: '',
      time: ''
    });
  },


  componentWillMount() {
    // consultationController.initVariable();
  },

  componentDidMount() {
    if (this.props.item.value !== undefined){
      this.setState({items : this.props.item.value , refCounter : this.props.item.value.length})
    }
    else{

      this.setState({ items: this.props.items, refCounter: this.props.items.length });
    }

  },

  componentWillReceiveProps(nextProps) {

    this.setState({ items: nextProps.items });
  },

  _changeHandler(e) {
    e.preventDefault();

    this.setState({ value: e.target.value })
  },

  _removeItem(itemToRemove) {



    // get the array
    var {items} = this.state;

    // filter out the item to remove
    var filteredItems = items.filter(function (item) {
      return itemToRemove.id !== item.id;
    });
    this.state.refCounter--;

    // update the state
    this.setState({ items: filteredItems })

    this.props.item.value = filteredItems;
  },

  _addItem(e) {


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

    var newItem = {};
    newItem.id = this.state.refCounter++;
    newItem.name = this.state.value;
    newItem.time = this.state.time;
    items.push(newItem);


    // update the state
    this.setState({ items })

    this.props.item.value = items;
  },

  _handleTimeChange(e, time) {

    // this.refs.timepicker.setTime(time);
    this.setState({ time: time.toLocaleTimeString() });
    this._addItem(e);

  },

  handleKeyPressed(e) {
    if( e.charCode == 13 ) {
      this._addItem(e);
    }
  },

  render() {
    return (
      <div id="collation-item-container">
        <Row>
          <Col xs={12} md={6} lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col xsHidden smHidden mdHidden lg={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>
          <Col lg={3} md={3} xs={12} mdOffset={6} lgOffset={6}>
            <TextField
              onKeyPress={this.handleKeyPressed}
              onChange={this._changeHandler}
              style={{"width": "100%"}}
              value={this.state.value}
              />
          </Col>
          <Col md={2}>
            <TimePicker
              format="24hr"
              ref="timepicker"
              autoOk={true}
              style={{"width": "90%"}}
              onChange={this._handleTimeChange}/>
          </Col>
          <Col md={1}>
            <FloatingActionButton mini={true} secondary={false} onClick={this.props._addItem}>
              <ContentAdd />
            </FloatingActionButton>
          </Col>
        </Row>
        <div className="collation-item-list">
          {(this.state.items || []).map(function (item, i) {
            return (
              <CollationItem name={item.name} time={item.time} key={i} id={item.id} _removeItem={this._removeItem.bind(this, item) } />
            );
          }, this) }
        </div>
      </div>
    );
  }
});



export default CollationSelector;
