import React, {Component} from 'react'

//var Man = React.createClass({
class WeightRenderer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDigit: 0,
      secondDigit: 0,
      thirdDigit: 0,
      fourthDigit: 0,
      evolution: null,
      color: null
    }
    this._calculateEvolution = this._calculateEvolution.bind(this);
  }

  componentDidMount() {
    //
    this._calculateEvolution(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    //
    this._calculateEvolution(nextProps.value);
  }

  _calculateEvolution(value) { // value = [65,65,65,333] // evolution : "down" <- WTF oO
    //var value = [65,65,65,333]; // evolution: "up"
    if (value && Array.isArray(value) && value.length>=1) {
      const last = Number(value[value.length - 1]);
      const beforeLast = Number(value[value.length - 2]);      
      //
      this.setState(Object.assign({}, 
        {
          evolution: ((last > beforeLast) ? 'up' :
            last == beforeLast ? null : 'down')
        },
        this._numberToDigitArray(last)        
      ))
    }
    else {
      this._numberToDigitArray(value)
    }
  }

  _numberToDigitArray(number) {
    if (!isNaN(number)) {
      //
      if(number > 100) {
            // between 120 and 300 
            var h = Math.trunc(number/100);
            //
            
            var t = number-(h*100)
            //
            var d = Math.trunc(t/10);
            //
            var u = number-(d*10)-(h*100);
            //
            //
            this.setState({firstDigit: h, secondDigit: d, thirdDigit: u});
      }
      else {
        let unit = number % 10;
        let decimal = (number - unit) / 10.0;
        //
        this.setState({firstDigit: '', secondDigit: decimal, thirdDigit: unit});
      }
    }
  }

  renderArrow() {
    switch (this.state.evolution) {
      case 'up':
        return (this.state.color == 'green'
          ? 
          <g id="up_x5F_vert">
              <polygon id="XMLID_121_" className="st3" points="821.1,-184.4 817.3,-184.4 817.3,-238.1 804.2,-220 801.5,-223.8 819.2,-248.4 837,-223.8 834.2,-220 821.1,-238.1"/>
          </g>
          
          :
          <g id="up_x5F_rouge" className="st4">
            <polygon id="XMLID_11_" className="st5" points="821.1,-184.4 817.3,-184.4 817.3,-238.1 804.2,-220 801.5,-223.8 819.2,-248.4 837,-223.8 834.2,-220 821.1,-238.1"/>
          </g>
      );

      case 'down':
        return (this.state.color == 'green'
          ? 
          <g id="down_x5F_vert" className="st4">
            <polygon id="XMLID_125_" className="st6" points="818.5,-246.2 822.1,-246.2 822.1,-193.5 834.4,-211.3 837,-207.6 820.3,-183.5 803.7,-207.6 806.3,-211.3 818.5,-193.5"/>
          </g>
          : 
          <g id="down_x5F_rouge" className="st4">
            <polygon id="XMLID_123_" className="st5" points="818.5,-246.2 822.1,-246.2 822.1,-194 834.4,-211.7 837,-208 820.3,-184 803.7,-208 806.3,-211.7 818.5,-194"/>
          </g>
          );
    }
  }  

  render() {
    return (
      <g id="poids">
        <rect id="XMLID_93_" x="685.9" y="-248.4" className="st0" width="106.8" height="64.4"/>
        <rect id="XMLID_12_" x="690.4" y="-241.9" className="st1" width="97.7" height="51.5"/>
        <path id="XMLID_268_" className="st2" d="M636.4-235.5h33.5v38.6h-33.5V-235.5z M659.3-212h-12.1l-4.5-10.7c0,0,4.5-4.3,10.7-4.3c6.1,0,10.7,4.3,10.7,4.3L659.3-212z M653.2-212l3.1-8.6"/>
        {this.renderArrow()}
        <text id="XMLID_411_" transform="matrix(1 0 0 1 713.6023 -209.3501)" className="st7 st8">{this.state.firstDigit}</text>
        <text id="XMLID_410_" transform="matrix(1 0 0 1 725.4835 -209.3501)" className="st7 st8">{this.state.secondDigit}</text>
        <text id="XMLID_409_" transform="matrix(1 0 0 1 737.3837 -209.3501)" className="st7 st8">{this.state.thirdDigit}</text>

      </g>
    );
  }
};
/*
        <text id="XMLID_408_" transform="matrix(1 0 0 1 748.1978 -208.6501)" className="st7 st8">,</text> 
        <text id="XMLID_407_" transform="matrix(1 0 0 1 754.6527 -209.3501)" className="st7 st8">{this.state.fourthDigit}</text>
*/
export default WeightRenderer;