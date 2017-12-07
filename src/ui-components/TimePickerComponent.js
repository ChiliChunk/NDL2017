import React, {Component} from 'react';
import TimePicker from 'material-ui/TimePicker';
import { Grid, Col, Row, Panel, Modal, Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

const LOG = "[TimePickerComponent::"

export default class TimePickerComponent extends Component {

  constructor(props) {
    super(props)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.state = { 
      item: this.props.item,
      time: undefined,
    };
  }


  componentWillMount() {
    console.log(`${LOG}componentWillMount]: dumping state and props (items)`);
  }

  componentDidMount() {
    console.log(`${LOG}componentDidMount]: dumping state and props (items)`);
  }

  componentWillReceiveProps(nextProps) {
    console.warn(`${LOG}componentWillReceiveProps]: Updating props : value : ${JSON.stringify(nextProps)}`);
  }


  handleTimeChange(e, time) {
    console.log(`${LOG}handleTimeChange]: settings [value] props of the item property to value : ${time}`)
    /**
     * @todo: use parent's callback given as props to set the value in the parent directly
     */
    this.props.item.value = time;
    this.setState({time})
  }

  getData() {
    return this.props.item.value || this.state.time
  }

  render() {
    return (
        <Row>
          <Col xsHidden smHidden md={6}>
            <ControlLabel bsClass="input-text-label-align">{this.props.item.text}</ControlLabel>
          </Col>
          <Col xs={12} mdHidden lgHidden>
            <ControlLabel>{this.props.item.text}</ControlLabel>
          </Col>
          <Col md={6}>
            <TimePicker
              format="24hr"
              ref="time"
              value={this.state.value || undefined}
              onChange={this.handleTimeChange}
              autoOk={true}
              hintText="Heure" />
          </Col>
        </Row>
    );
  }
}
