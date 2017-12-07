import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = '[CheckListInputComponent::';

// var data = new Array();

// export default class ChoicesInputComponent extends
var  CheckListInputComponent = React.createClass({

    getInitialState: function() {
      return { selectedItems: [], items: [] };
    },

    componentDidMount: function() {
      if (this.props.item.StringVal !== undefined){
        var newItems = JSON.parse(this.props.item.StringVal)

        this.setState( {items: newItems });
      }
    },

    componentWillReceiveProps: function(nextProps) {


      this.setState( { item: nextProps.item, items: nextProps.items, selectedItems: nextProps.item.value });
    },

    handler(e, checked) {

      var item = this.props.items[e.currentTarget.value];


      if(e.currentTarget.checked) {

          this.props.item.value.push(item);

      }
      else {
          // filter out the item to remove
          var filteredItems = this.props.item.value.filter( function(filtered) {
            return filtered.id !== item.id;
          });
          this.props.items.value = filteredItems;

      }

    },


    render: function() {
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
        </div>
      );
  }
});

export default  CheckListInputComponent;
