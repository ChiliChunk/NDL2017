import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';

import {Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap';

const LOG = "[EatenMealSelectorComponent::"
const emptyPlate = {
  ent: 0,
  acc: 0,
  vpo: 0,
  des: 0,
  pl: 0
}

var EatenMealSelectorComponent = React.createClass({

  getDefaultProps() {
    return ({item: {}, onChange: {}, dayNumber: 1});
  },

  getInitialState: function () {
    if (this.props.item.value !== undefined){
      console.log("define" , this.props.item.value)
      return ({
        ent: this.props.item.value.ent, firstValue: this.props.item.value.ent,
        acc: this.props.item.value.acc, secondValue: this.props.item.value.acc,
        vpo: this.props.item.value.vpo, thirdValue: this.props.item.value.vpo,
        pl: this.props.item.value.pl, fourthValue: this.props.item.value.pl,
        des: this.props.item.value.des, fifthValue: this.props.item.value.des,
        min: 0,
        max: 4,
        step: 1,
      });
    }
    else{
      return ({
        ent: 0, firstValue: 0,
        acc: 0, secondValue: 0,
        vpo: 0, thirdValue: 0,
        pl: 0, fourthValue: 0,
        des: 0, fifthValue: 0,
        min: 0,
        max: 4,
        step: 1,
      });
    }
  },


  getFraction(value) {

    switch (value) {
      case 0: return '0'
      case 25: return '1/4'
      case 50: return '1/2'
      case 75: return '3/4'
      case 100: return '1';
    }
  },


  componentWillMount: function () {

  },

  componentDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  componentWillReceiveProps: function (nextProps) {

    this.setState({
      item: nextProps.item,
    });
  },

  _firstSelectChangeHandler: function (e, value) {

    var v = value * 25;

    var ret = {
      ent: v,
      acc: this.state.acc,
      vpo: this.state.vpo,
      pl: this.state.pl,
      des: this.state.des,
    }
    this.props.item.value = ret;
    this.setState({ent: v, firstValue: value})
    let ret2 = (typeof this.props.onChange === 'function');
    if (ret2) {

      this.props.onChange(ret, this.props.item);
    }
  },

  _secondSelectChangeHandler: function (e, value) {
    var v = value * 25;
    var ret = {
      ent: this.state.ent,
      acc: v,
      vpo: this.state.vpo,
      pl: this.state.pl,
      des: this.state.des,
    }
    this.props.item.value = ret;
    this.setState({acc: v, secondValue: value})
    let ret2 = (typeof this.props.onChange === 'function');
    if (ret2) {

      this.props.onChange(ret, this.props.item);
    }
  },

  _thirdSelectChangeHandler: function (e, value) {
    var v = value * 25;
    var ret = {
      ent: this.state.ent,
      acc: this.state.acc,
      vpo: v,
      pl: this.state.pl,
      des: this.state.des,
    }
    this.props.item.value = ret;
    this.setState({vpo: v, thirdValue: value})
    let ret2 = (typeof this.props.onChange === 'function');
    if (ret2) {

      this.props.onChange(ret, this.props.item);
    }
  },

  _fourthSelectChangeHandler: function (e, value) {

    var v = value * 25;

    var ret = {
      ent: this.state.ent,
      acc: this.state.acc,
      vpo: this.state.vpo,
      pl: this.state.pl,
      des: v,
    }
    this.props.item.value = ret;
    this.setState({des: v, fourthValue: value})
    let ret2 = (typeof this.props.onChange === 'function');
    if (ret2) {

      this.props.onChange(ret, this.props.item);
    }
  },

  _fifthSelectChangeHandler: function (e, value) {

    var v = value * 25;

    var ret = {
      ent: this.state.ent,
      acc: this.state.acc,
      vpo: this.state.vpo,
      pl: v,
      des: this.state.des,
    }
    this.props.item.value = ret;


    this.setState({pl: v, fifthValue: value})
    let ret2 = (typeof this.props.onChange === 'function');
    if (ret2) {

      this.props.onChange(ret, this.props.item);
    }
  },

  checkHandler(e, checked) {
  if (checked) {
    let savedState = this.state;
    var reset = {
      ent: 0, firstValue: 0,
      acc: 0, secondValue: 0,
      vpo: 0, thirdValue: 0,
      pl: 0, fourthValue: 0,
      des: 0, fifthValue: 0,
      min: 0,
      max: 4,
      step: 1,
    }
    this.props.item.value = { value: 'Information non disponible', id: -1, numericValue: -1 };
    //this.setState(reset)
    this.savedState = savedState;
  }
  else {
    //this.setState(this.savedState)
  }
},


  render: function () {
    return (
      <div id="meal-item-container">
        <Row>
          <Col md={3}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
        </Row>
        <Row>
          <Col md={5} style={{height: "24px", overflow:"hidden"}}>
            {"Entrée"}
          </Col>
          <Col md={4} style={{height: "24px", overflow:"visible"}}>
            <Slider name="slider1" onChange={this._firstSelectChangeHandler} min={this.state.min} max={this.state.max} step={this.state.step} style={{marginTop: "-24px"}}/>
          </Col>
          <Col md={1} style={{height: "24px", overflow:"visible"}}>
            {this.getFraction(this.state.ent)}
          </Col>
        </Row>
        <Row>
          <Col md={5} style={{height: "24px", overflow:"hidden"}}>
            {"Accompagnement"}
          </Col>
          <Col md={4} style={{height: "24px", overflow:"visible"}}>
            <Slider name="slider2" onChange={this._secondSelectChangeHandler} min={this.state.min} max={this.state.max} step={this.state.step} style={{marginTop: "-24px"}}/>
          </Col>
          <Col md={1} style={{height: "24px", overflow:"visible"}}>
            {this.getFraction(this.state.acc)}
          </Col>
        </Row>
        <Row>
          <Col md={5} style={{height: "24px", overflow:"hidden"}}>
            {"VPO"}
          </Col>
          <Col md={4} style={{height: "24px", overflow:"visible"}}>
            <Slider name="slider3" onChange={this._thirdSelectChangeHandler} min={this.state.min} max={this.state.max} step={this.state.step} style={{marginTop: "-24px"}}/>
          </Col>
         <Col md={1} style={{height: "24px", overflow:"visible"}}>
            {this.getFraction(this.state.vpo)}
          </Col>
        </Row>
        <Row>
          <Col md={5} style={{height: "24px", overflow:"hidden"}}>
            {"Dessert"}
          </Col>
          <Col md={4} style={{height: "24px", overflow:"visible"}}>
            <Slider name="slider4" onChange={this._fourthSelectChangeHandler} min={this.state.min} max={this.state.max} step={this.state.step} style={{marginTop: "-24px"}}/>
          </Col>
          <Col md={1} style={{height: "24px", overflow:"visible"}}>
            {this.getFraction(this.state.des)}
          </Col>
        </Row>
        <Row>
          <Col md={5} style={{height: "24px", overflow:"hidden"}}>
            {"Produits Laitiers"}
          </Col>
          <Col md={4} style={{height: "24px", overflow:"visible"}}>
            <Slider name="slider5" onChange={this._fifthSelectChangeHandler} min={this.state.min} max={this.state.max} step={this.state.step} style={{marginTop: "-24px"}}/>
          </Col>
          <Col md={1} style={{height: "24px", overflow:"visible"}}>
            {this.getFraction(this.state.pl)}
          </Col>
        </Row>

        {this.props.item.contrainte == 'showCheckbox' ?
          <div>
            <br />
            <Row>
              <Col md={9} style={{ height: "24px", overflow: "hidden" }}>
                <Checkbox
                  label={"Info indisponible"}
                  defaultChecked={false}
                  labelPosition="left"
                  onCheck={this.checkHandler} />
              </Col>
            </Row>
          </div>
          :
          null
        }

      </div>
    );
  }
});


export default EatenMealSelectorComponent;
