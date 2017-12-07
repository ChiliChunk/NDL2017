import React, {Component} from 'react'

//var Man = React.createClass({
class WristRenderer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDigit: 0,
      secondDigit: 0,
      thirdDigit: 0,
      fourthDigit: 0,
    }    
    this._numberToDigitArray = this._numberToDigitArray.bind(this);
  }


  componentDidMount() {
    
    //
    this._numberToDigitArray(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    //
    this._numberToDigitArray(nextProps.value);
  }

  _numberToDigitArray(number) {
    if (!isNaN(number)) {
      //
        let unit = number % 10;
        let decimal = (number - unit) / 10.0;
        var floatingValue  = Math.round(unit * 10.0);
        var finalUnit = Math.trunc(unit);     
        //
        this.setState({ firstDigit: decimal, secondDigit: finalUnit, thirdDigit: floatingValue });             
    }
  }

  render() {
    
    return (
      <g id="poignet">
        <text id="XMLID_107_" transform="matrix(1 0 0 1 490.4086 -28.1501)" className="st9 st7 st8">{this.props.value}</text>
      </g>
    );
  }
};

export default WristRenderer;