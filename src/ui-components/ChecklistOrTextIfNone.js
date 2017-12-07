import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = '[ChecklistOrTextIfNone::';

// var data = new Array();

class ChecklistOrTextIfNone extends React.Component {

  constructor(props) {
    super(props);
    this.showOtherTextField = this.showOtherTextField.bind(this)
    this._textChangeHandler = this._textChangeHandler.bind(this)
    this.handler = this.handler.bind(this)
    this.state = {
      selectedItems: [],
      items: [],
      textValue: '',
      showOtherValue: false,
    };
  }

  componentDidMount() {
    console.log(LOG + 'componentDidMount]: dumping state and props (items)');
    this.props.item.value = new Array();
  }

  componentWillReceiveProps(nextProps) {
    console.warn(LOG + 'componentWillReceiveProps]: updating props ');
    this.setState({ item: nextProps.item, items: nextProps.items, selectedItems: nextProps.item.value });
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
            onBlur={this._addItemHandler}
            value={this.state.textValue} />
        </Col>
      </Row>
    );
  }

  _addItemHandler(e) {

  }

  _textChangeHandler(e, index, value) {
    console.log('ChecklistOrTextIfNone::_textChangeHandler : ' + e.target.value);
    var otherPosition = this.props.items.length - 1;
    this.setState({ textValue: e.target.value })
  }

  handler(e, checked) {

    var otherPosition = this.props.items.length - 1;
    var item = this.props.items[e.currentTarget.value];
    console.log('item matching the checkbox value ' + JSON.stringify(item));

    if (e.currentTarget.checked) {
      console.log('adding item  : ' + JSON.stringify(item));
      this.props.item.value.push(item);
      console.warn(`added data to item.value content : ${JSON.stringify(this.props.item.value)}`)
    }
    else {
      // filter out the item to remove
      var filteredItems = this.props.item.value.filter(function (filtered) {
        return filtered.id !== item.id;
      });
      this.props.item.value = filteredItems;
      console.warn(`removed data from item.value content : ${JSON.stringify(filteredItems)}`)
    }
    console.log('new content : ' + JSON.stringify(filteredItems) + ' state: ' + JSON.stringify(this.state));
    if (Number(e.currentTarget.value) == otherPosition && checked) {
      this.setState({ showOtherValue: true })
    }
    else if (Number(e.currentTarget.value) == otherPosition && !checked) {
      this.setState({ showOtherValue: false })
    }
  }


  render() {
    const unique = this.props.item.name;
    const self = this;
    const checkBoxes = this.props.items.map((item, i) => {
      const isChecked = self.props.item.value &&
        (self.props.item.value.find(_item => _item.id == item.id) != undefined)
      return (
        <Checkbox
          label={item.text}
          key={unique + '-' + i + '-' + item.text}
          value={item.id}
          defaultChecked={isChecked}
          labelPosition="left"
          onCheck={this.handler} />
      );
    });
    return (
      <div id='checkbox-container'>
        <Row>
          <Col md={6}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={6}>
            {checkBoxes}
          </Col>
        </Row>
        {this.state.showOtherValue
          ? this.showOtherTextField()
          : null}
      </div>
    );
  }
}

export default ChecklistOrTextIfNone;