import React, { Component } from 'react';
import BigCalendar from '../lib/react-big-calendar';
import '../lib/react-big-calendar/lib/less/styles.less';
import dates from '../lib/react-big-calendar/lib/utils/dates';
import moment from 'moment';
import {
  Grid,
  Col,
  Row,
  Panel,
  Modal,
  Button,
  FormControl,
  FormGroup,
  HelpBlock,
  ControlLabel
} from 'react-bootstrap';

moment.updateLocale('fr', {
  months: ("janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre").split("_"),
  monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY LT",
    LLLL: "dddd D MMMM YYYY LT"
  },
  calendar: {
    sameDay: "[Aujourd'hui à] LT",
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "une année",
    yy: "%d années"
  },
  ordinalParse: /\d{1,2}(er|ème)/,
  ordinal: function (number) {
    return number + (number === 1
      ? 'er'
      : 'ème');
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === 'M';
  },
  meridiem: function (hours, minutes, isLower) {
    return hours < 12
      ? 'PD'
      : 'MD';
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
});
BigCalendar.momentLocalizer(moment);


class Calendar extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    
  }


  render() {
    var start = new Date();
    start.setMinutes(0);
    start.setHours(8);
    var end = new Date();
    end.setMinutes(0);
    end.setHours(19);
    return (
      <Row>
        <Col md={10}>
          <BigCalendar
            selectable
            events={this.props.items}
            startAccessor='start'
            endAccessor='end'
            defaultView='day'
            culture={'fr'}
            allDayAccessor={false}
            min={new Date(start)}
            max={new Date(end)}
            defaultDate={new Date()}
            onSelectEvent={(event) => this.props.onEventSelected(event)}
            onSelectSlot={(slotInfo) => this.props.onEmptySlotSelected(slotInfo)} />
          </Col>
        </Row>
    )
  }

}

export default Calendar;