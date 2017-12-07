import React, {Component} from 'react'

//var Man = React.createClass({
class MnaRenderer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDigit: '0',
      secondDigit: '0',
      evolution: null
    };
    this._calculateMNAResult = this._calculateMNAResult.bind(this);
  }

  componentDidMount() {
    //
    this._calculateMNAResult(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    //
    this._calculateMNAResult(nextProps.value);
  }

  _calculateMNAResult(value) {
    if (value && value.length && value.length > 0) {
      const lastScore = value[value.length - 1];
      
      let newState = this._numberToDigitArray(lastScore);

      if (value.length >= 2 ) {
        const beforeLastScore = value[value.length - 2];

        newState.evolution = lastScore > beforeLastScore ? 'up' :
          lastScore == beforeLastScore ? null : 'down';
      }

      this.setState(newState);
    }
  }

  _numberToDigitArray(number) {
    if (!isNaN(number)) {
      //
      let unit = number % 10;
      let decimal = (number - unit) / 10.0;

      //
      return {firstDigit: decimal, secondDigit: unit};
    }
  }

  renderArrow() {
    switch (this.state.evolution) {
      case 'up':
        return (
          <g id="up_x5F_vert_3_">
            <polygon
              id="XMLID_345_"
              className="st3"
              points="816.7,143.3 813.6,143.3 813.6,105.8 802.9,118.5 800.7,115.8 815.1,98.7 829.6,115.8 827.4,118.5 816.7,105.8 		"/>
            </g>
          );

      case 'down':
        return (
          <g id="down_x5F_rouge_3_" className="st4">
            <polygon
              id="XMLID_342_"
              className="st5"
              points="814.6,100.2 817.5,100.2 817.5,136.6 827.5,124.3 829.6,126.9 816.1,143.6 802.5,126.9 804.6,124.3 814.6,136.6 		"/>
          </g>
        );
    }
  }

  render() {
    return (
      <g id="MNA">
        <rect
          id="XMLID_347_"
          x="706.5"
          y="98.7"
          className="st0"
          width="87"
          height="44.9"/>
        <rect
          id="XMLID_346_"
          x="710.2"
          y="103.2"
          className="st1"
          width="79.6"
          height="35.9"/> {this.renderArrow()}
        <text
          id="XMLID_349_"
          transform="matrix(1 0 0 1 615.8976 122.4774)"
          className="st7 st8">MNA</text>
        <text
          id="XMLID_395_"
          transform="matrix(1 0 0 1 738.2979 126.3369)"
          className="st7 st8">{this.state.firstDigit}</text>
        <text
          id="XMLID_396_"
          transform="matrix(1 0 0 1 750.9802 126.3369)"
          className="st7 st8">{this.state.secondDigit}</text>
      </g>
    );
  }
};

export default MnaRenderer;