import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Modal, Button } from 'react-bootstrap';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import * as Chart from 'react-chartjs';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

const MyPanel = (props) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={props.title || 'Example'} />
    </ToolbarGroup>
  </Toolbar>
);



class ChartTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mnaHistory: [],
      imcHistory: [],
    }
  }

  rand(min, max, num) {
    var rtn = [];
    while (rtn.length < num) {
      rtn.push((Math.random() * (max - min)) + min);
    }
    return rtn;
  }

  componentWillMount() {
    this.buildDataSets(this.props.patient);
  }

  componentReceiveProps(nextProps) {
    this.buildDataSets(nextProps.patient);
  }

  buildDataSets(rawData) {
    const dateToString = (date => date.getDate() + '/' + (Number(date.getMonth())+1) + '/' + date.getFullYear())
    let mnaHistory = [];
    let labels = [];
    let imcHistory = [];
    this.props.patient.mna.forEach((mna) => {
      mnaHistory.push(mna.score);
      let date = dateToString(new Date(mna.date));
      labels.push(date)
    });
    if(!Array.isArray(this.props.patient.imc)) {
     imcHistory = [this.props.patient.imc] ;
    }
    else imcHistory = this.props.patient.imc;
    this.setState({ mnaHistory, labels, imcHistory });
  }

  render() {
    let dataMna = {
      labels: this.state.labels,
      datasets: [
        {
          label: "Progression MNA",
          lineTension: 50,
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.mnaHistory,
        }        
      ]
    }
    let dataImc = {
      labels: this.state.imcHistory,
      datasets: [
        {
          label: "Progression IMC",
          lineTension: 10,          
          fillColor: "rgba(200,220,200,0.2)",
          strokeColor: "rgba(220,200,200,1)",
          pointColor: "rgba(200,200,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.imcHistory,
        }        
      ]
    }       
    return (
      <div id="chart-container">
        <pre>{JSON.stringify(this.state)}</pre>
        <Panel>
          <MyPanel title={'Courbe MNA'} />
          <Chart.Line data={dataMna} />
          <MyPanel title={'Courbe IMC'} />
          <Chart.Line data={dataImc} />
        </Panel>
      </div>
    )
  }
};

export default ChartTab;