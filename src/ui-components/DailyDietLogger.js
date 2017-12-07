import React from 'react';
import EatenMealSelectorComponent from './EatenMealSelectorComponent';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

var DailyDietLogger = React.createClass({

  render: function () {
    const item1 = { "name": "day1", "text": "Petit Dejeuner" };
    const item2 = { "name": "day2", "text": "Dejeuner" };
    const item3 = { "name": "day3", "text": "Diner" };
    return (
      <div id="daily-meal-logger">
        <Row>
          <Col md={12}>
            <EatenMealSelectorComponent
              item={item1}
              dayNumber={item1.text} />
          </Col>
        </Row>
        <Row>        
          <Col md={12}>
            <EatenMealSelectorComponent
              item={item2}
              dayNumber={item2.text} />
          </Col>
        </Row>
        <Row>           
          <Col md={12}>
            <EatenMealSelectorComponent
              item={item3}
              dayNumber={item3.text} />
          </Col>
        </Row>
      </div>
    );
  }
});



export default DailyDietLogger;
