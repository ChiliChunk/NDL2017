import React, {Component} from 'react'

//var Man = React.createClass({
class ActivityRenderer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      evolution: null,
      value: null
    }
    this._calculateEvolution = this._calculateEvolution.bind(this);
  }

  componentDidMount() {
    this._calculateEvolution(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this._calculateEvolution(nextProps.value);
  }

  _translateValue(value) {
    switch (value) {
        case 0:
        case "O":
        case "Marche pas du tout":
          return 0;
        case 1:
        case "1":
        case "Marche un peu":
          return 1;
        case 2:
        case "2":
        case "Marche régulièrement":
          return 2;
        case 3:
        case "3":
        case "Marche beaucoup":
          return 3;
        default:
          return 0;
    }
  }

  _calculateEvolution(value) {
    if (value && Array.isArray(value) && value.length >= 2) {
      const last = this._translateValue(value[value.length - 1]);
      const beforeLast = this._translateValue(value[value.length - 2]);

      this.setState({
        evolution: last > beforeLast ? 'up' :
          last == beforeLast ? null : 'down',
        value: last
      });
    } else {
      this.setState({
        evolution: null,
        value: this._translateValue(value)
      })
    }
  }

  renderArrow() {
    switch (this.state.evolution) {
      case 'up':
        return (
          <g id="up_x5F_vert_1_">
            <polygon id="XMLID_135_" className="st3" points="815.6,58.7 812.4,58.7 812.4,21.2 801.8,33.9 799.6,31.2 814,14.1 828.5,31.2 826.2,33.9 815.6,21.2 		"/>
          </g>
        );

      case 'down':
        return ( 
          <g id="down_x5F_rouge_1_" className="st4">
            <polygon id="XMLID_132_" className="st5" points="813.5,15.5 816.4,15.5 816.4,52 826.4,39.7 828.5,42.2 814.9,59 801.4,42.2 803.5,39.7 813.5,52 		"/>
          </g>  
        );
    }
  }

  renderActivity() {
      switch(this.state.value) {
        case 0:
        return (
            <g id="activite_x5F_0">
              <path id="XMLID_128_" className="st2" d="M741.8,29.4l3.1,12c0,0,1.5,5.3,7.7,5.3h6.2 M749.6,24.1c0,1.5-1.4,2.7-3.1,2.7
                s-3.1-1.2-3.1-2.7s1.4-2.7,3.1-2.7S749.6,22.6,749.6,24.1L749.6,24.1z M763.5,52.1l-0.9-8c-0.3-1.6-1.9-2.7-3.7-2.7h-4.6
                c-1.7,0-3.3-1.1-3.7-2.5l-2.5-9.5"/>
            </g> 
            );

        case 1:
        return (
            <g id="activite_x5F_1" className="st4">
              <path id="XMLID_182_" className="st9" d="M761.3,39l-1.7,2.2l1.7,11h2.1L761.3,39z"/>
              <path id="XMLID_179_" className="st10" d="M760.9,24c0,2-1.8,3.6-4.1,3.6s-4.1-1.6-4.1-3.6s1.8-3.6,4.1-3.6S760.9,22,760.9,24
                L760.9,24z"/>
              <path id="XMLID_175_" className="st9" d="M743,38.4l5.6,5.4l2,8.4h3.4l-2.3-9.8l-5.4-5.3c0-1.3,0.1-5.2,2.6-8l2.1,5.3
                c0.2,0.6,0.6,1,1.2,1.4l6.3,4l1.9-2.3l-6.3-4l-2.1-5.4c-0.4-1-1.3-1.7-2.5-1.8c-1.1-0.2-2.3,0.2-3,1c-4,4.4-3.4,10.4-3.4,10.6
                L743,38.4z"/>
              <path id="XMLID_172_" className="st9" d="M741.1,52.2h3.3l1.9-8.4l-2.7-2.7L741.1,52.2z"/>
            </g>
            );            
            
        case 2:
        return (
            <g id="activité_x5F_2" className="st4">
              <path id="XMLID_124_" className="st10" d="M758.5,23.8c0,1.9-1.8,3.4-4,3.4s-4-1.5-4-3.4s1.8-3.4,4-3.4S758.5,21.9,758.5,23.8
                L758.5,23.8z"/>
              <path id="XMLID_122_" className="st11" d="M743.3,39.6l1.1-5.3c0-0.2,0.2-0.5,0.4-0.7l2.9-2.9c0.4-0.4,0.9-0.5,1.5-0.4l5.1,0.8
                c0.6,0.1,1.1,0.5,1.2,1l1.2,3.6c0.1,0.4,0.5,0.7,1,0.9l5.6,1.8"/>
              <path id="XMLID_105_" className="st9" d="M757.6,51.9h3.9l-10.2-12l2.2-8.6l-3.1-0.6l-2.2,8.6c-0.2,0.8,0,1.6,0.5,2.2L757.6,51.9z"/>
              <path id="XMLID_101_" className="st9" d="M746.6,51.9l3.7-4.3l0.2-0.8l-2.4-3l-0.8,2.6l-4.7,5.5L746.6,51.9L746.6,51.9z"/>
            </g>
        );

        case 3:
        return (          
            <g id="activite_x5F_3" className="st4">
              <path id="XMLID_190_" className="st10" d="M753.8,24.5c0,1.6,1.1,2.9,2.6,2.9c1.4,0,2.6-1.3,2.6-2.9s-1.1-2.9-2.6-2.9
                S753.8,22.9,753.8,24.5L753.8,24.5z"/>
              <path id="XMLID_187_" className="st11" d="M738.7,44.1h5.7c0.3,0,0.6-0.1,0.9-0.4l1.8-2.1 M742.4,32.8l4.2-5.2
                c0.4-0.6,1.2-0.7,1.7-0.2l5.2,4l2.1,3.6c0.2,0.4,0.6,0.6,1,0.6h5.5"/>
              <path id="XMLID_178_" className="st9" d="M751.5,44.4l-3.6,8.2h2.8l3-6.9c0.5-1.1,0.3-2.4-0.5-3.3l-4.4-5c-0.3-0.3-0.3-0.7-0.1-1.1
                l3.4-5.4l-2-1.6l-3.4,5.4c-0.9,1.5-0.8,3.5,0.3,4.7L751.5,44.4z"/>
            </g> 
        );       
      }
  }

  render() {
    
    return (
          <g id="activite">
            <rect id="XMLID_137_" x="705.3" y="14.1" className="st0" width="87" height="44.9"/>
            <rect id="XMLID_136_" x="709" y="18.6" className="st1" width="79.6" height="35.9"/>
            {this.renderActivity()}
            {this.renderArrow()}
            <text id="XMLID_348_" transform="matrix(1 0 0 1 615.8978 40.9778)" className="st7 st8">Activité</text>
          </g>
    );
  }
};

export default ActivityRenderer;