import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Modal, Button } from 'react-bootstrap';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import NotePad from './NotePad'
import DataVisualization from './PatientInformation/DataVisualization'
import ChartTab from './ChartTab';
import DataTab from './DataTab';


export default class TabsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => this.setState({ value: value })

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };
    
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}>
        <Tab label="Données Visuel" value={1} styles={styles}>
          <Panel>
            <DataVisualization patient={this.props.patient} />
          </Panel>
        </Tab>
        <Tab label="Informations" value={2}>
          <DataTab patient={this.props.patient} />
        </Tab>        
        <Tab label="Graphique" value={3}>
          <ChartTab patient={this.props.patient} />
        </Tab>
        <Tab label="Bloc Note" value={4}>
          <NotePad userId={this.props.userId} sendmail={this.props.sendmail} update={this.props.updateNotepadContent} />
        </Tab>
      </Tabs>
    );
  }
}
