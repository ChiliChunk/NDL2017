
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

var ChoicesInputComponent = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    if (this.props.item.value === undefined){
      this.setState({
        item: this.props.item,
        value: this.props.value
      });
    }
    else{
      console.log("ITEM DEJA QQCHOSE")
      var valueTemp
      console.log(this.props.item)
      // JSON.parse(this.props.item.data_provider).map( (choiceObject , i ) => {
      //   console.log(choiceObject)
      //   if (choiceObject.text == this.props.item.numericValue){
      //
      //     valueTemp = choiceObject.id
      //   }
      // } , this)
      valueTemp = this.props.item.numericValue

      this.setState ({
        item : this.props.item,
        value : valueTemp
      })
    }
  },

  getItem() {
    return this.state.item;
  },


  componentWillReceiveProps: function (nextProps) {

    this.setState({value: nextProps.value, item: nextProps.item});
  },

  _changeHandler: function (e, index, value) {

    let {item} = this.state;
    item.value = this.props.menuItems[value].text;
    item.numericValue = value;
    this.setState({item, value});


    if (this.props.onChange) {
      this.props.onChange(this.props.menuItems[value].text, item);
    }
  },

  render: function () {
    return (
      <div id='select-container'>
        <Row>
          <Col xsHidden smHidden md={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>
          <Col xs={12} mdHidden lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={6}>
            <SelectField style={{width: "98%", overflow: "hidden"}} value={this.state.value} onChange={this._changeHandler} placeholder="test">
              {this.props.menuItems.map(function (item) {
                return <MenuItem tooltip={item.text} value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
              }) }
            </SelectField>
          </Col>
        </Row>
      </div>
    );
  }
});

export default ChoicesInputComponent;
