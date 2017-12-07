import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

var AutoCompleteComponent = React.createClass({

  getInitialState() {
    return ({ dataSource: this.props.dataSource });
  },

  componentDidMount() {
    
    if (this.props.item.hasOwnProperty('value')) {
      
      this.setState({ value: this.props.item.value })
    }
    else {
      
    }
  },

  handleUpdateInput(input) {
    
    this.props.item.value = input;
    this.setState({ value: input })
  },

  handleNewRequest(input) {
    
    this.props.item.value = input;
    this.setState({ value: input })
  },

  filterCaseSensitive(searchText, key) {
    return key.toLowerCase().includes(searchText.toLowerCase());
  },

  render() {
    return (
      <div id="auto-complete-container">
        <Row>
          <Col md={6}>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={6}>        
          <AutoComplete
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            filter={this.filterCaseSensitive}
            searchText={this.state.value} />  
          </Col>
          </Row>   
        </div>
    );
  }
});

export default AutoCompleteComponent;
