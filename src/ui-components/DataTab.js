import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Modal, Button } from 'react-bootstrap';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import * as Chart from 'react-chartjs';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';

const MyPanel = (props) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={props.title || 'Example'} />
    </ToolbarGroup>
  </Toolbar>
);



class DataTab extends Component {

  constructor(props) {
    super(props)
  }


  componentWillMount() {
  }

  componentReceiveProps(nextProps) {
  }

  render() {
    return (
      <div id="text-data-container">
        <Panel>
          <MyPanel title={'Pathologies'} />
          {this.props.patient.pathologies_nom.map((p) => {
            return <Subheader>{p.name}</Subheader>
          })}
          <MyPanel title={'Traitements'} />
          {this.props.patient.traitements.map((p) => {
            return <Subheader>{p.name}</Subheader>
          })}          
          <MyPanel title={'Etat physique'} />
          {this.props.patient.etat_mental.map((p) => {
            return <Subheader>{p.text}</Subheader>
          })}          
          <MyPanel title={'Etat mental'} />
          {this.props.patient.etat_physique.map((p) => {
            return <Subheader>{p.text}</Subheader>
          })}           
        </Panel>
      </div>
    )
  }
};

export default DataTab;