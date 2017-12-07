import React from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[CookingInputComponent::";

var cookingItems = [
  { "id":"0", "text":"autocuiseur"},
  { "id":"1", "text":"cocotte/fait-tout"},
  { "id":"2", "text":"cuit-vapeur"},
  { "id":"3", "text":"four"},
  { "id":"4", "text":"micro-onde"},
  { "id":"5", "text":"plancha"},
  { "id":"6", "text":"plaques de cuisson"}
 ];

var storageItems = [
  { "id":"0", "text":"congélateur"},
  { "id":"1", "text":"réfrigérateur"}
 ];

var preparationItems = [
  { "id":"0", "text":"mixer (blender)"},
  { "id":"1", "text":"robot de cuisine"}
 ];


var data = new Array();


// export default class ChoicesInputComponent extends
var  CookingInputComponent = React.createClass({

    getInitialState: function() {
        return { selectedItems: [], checkedArray: [] };
    },

    componentDidMount: function() {
      if (this.props.item.value !== undefined){
        this.props.item.value.map ( (osef , i) => {
          data.push(this.props.item.value[i])
        })
      }
      this.removeDataDuplicates()

    },

    removeDataDuplicates : function (){
      var unique = data.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
      })
      data = unique
    },

    // BUG : https://github.com/callemall/material-ui/issues/2983
    _onClickHandler: function(event, checked) {

        if(checked) {
          data.push(event.target.offsetParent.offsetParent.lastElementChild.innerHTML);
        }
        else {
          var index = data.length;

          for( var i=0; i<data.length; i++ ) {

            if(data[i].match(event.target.offsetParent.offsetParent.lastElementChild.innerHTML)) {
              data.splice(i, 1);
            }
          }
      }
      this.removeDataDuplicates()
      this.props.item.value = data;
      this.forceUpdate()
    },

verify: function(string){
  if (data.indexOf(string) != -1){
    return true
  }
  return false
},
    render: function() {

        return (
          <div id="checklist-container">
           <div className="row">
           <div className="col s3">
              <List>
              <ListItem
                primaryText="Cuisson"
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("autocuiseur")}/>} key={0} primaryText="autocuiseur"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("cocotte/fait-tout")}/>} key={1} primaryText="cocotte/fait-tout"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("cuit-vapeur")}/>} key={2} primaryText="cuit-vapeur"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("four")}/>} key={3} primaryText="four"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("micro-onde")}/>} key={4} primaryText="micro-onde"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("plancha")}/>} key={5} primaryText="plancha"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} defaultChecked = {this.verify("plaques de cuisson")}/>} key={6} primaryText="plaques de cuisson"/>
                ]} />
              </List>
              </div>
              <div className="col s3">
              <List>
              <ListItem
                primaryText="stockage"
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                      <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} />} key={0} primaryText="congélateur"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} />} key={1} primaryText="réfrigérateur"/>
                ]} />
              </List>
              </div>
              <div className="col s3">
              <List>
              <ListItem
                primaryText="préparation"
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} />} key={0} primaryText="mixer (blender)"/>,
                    <ListItem leftCheckbox={<Checkbox onCheck={this._onClickHandler} />} key={1} primaryText="robot de cuisine"/>
                ]} />
            </List>
            </div>
            </div>
          </div>
          );
  }
});

export default  CookingInputComponent;
