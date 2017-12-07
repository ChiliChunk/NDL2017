import React, {Component} from 'react'

class LegRenderer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <g id="mollet">
        <text transform="matrix(1 0 0 1 472.8618 86.6564)" className="st9 st7 st8">{this.props.value}</text>
      </g>
    );
  }
};

export default LegRenderer;