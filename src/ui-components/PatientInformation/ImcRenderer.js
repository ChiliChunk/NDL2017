import React, {Component} from 'react'

//var Man = React.createClass({
class ImcRenderer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDigit: 0,
      secondDigit: 0,
      thirdDigit: 0,
      fourthDigit: 0,
      evolution: null,
      value: null,
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

  _calculateEvolution(value) {
    if (value && Array.isArray(value) && value.length >= 2) {
      const last = Number(value[value.length - 1]);
      const beforeLast = Number(value[value.length - 2]); 

      const evolution = last > beforeLast ? 'up' :
        last == beforeLast ? null : 'down'
      const color = (evolution == 'up' && last > 25 || evolution == 'down' && last < 21) ? 'red' :
        (evolution == 'down' && last > 25 || evolution == 'up' && last < 21) ? 'red' : 'green'

      this.setState(Object.assign({},
        {
          evolution,
          color
        },
        this._numberToDigitArray(last)));
    } else this.setState(Object.assign({}, {
      evolution: null,
      color: null
    },
    this._numberToDigitArray(value)))
  }


  _numberToDigitArray(number) {
    if (!isNaN(number)) {
        
        let unit = Math.round(number % 10);
        let decimal = Math.round(number - unit) / 10.0;
        var floatingValue  = Math.round(unit * 10.0);

        return { firstDigit: decimal, secondDigit: unit, thirdDigit: floatingValue, value: number };              
    }
  }  

  renderArrow() {
    switch (this.state.evolution) {
      case 'up':
        return (this.state.color == 'green'
          ? <g id="up_x5F_vert_2_">
              <polygon id="XMLID_141_" className="st3" points="954.2,-34.5 949.3,-34.5 949.3,-106.9 932.7,-82.4 929.2,-87.5 951.7,-120.7 974.2,-87.5 970.8,-82.4 954.2,-106.9 		"/>
            </g>
          :
          <g id="up_x5F_rouge_2_" className="st4">
            <polygon id="XMLID_140_" className="st5" points="954.2,-34.5 949.3,-34.5 949.3,-106.9 932.7,-82.4 929.2,-87.5 951.7,-120.7  974.2,-87.5 970.8,-82.4 954.2,-106.9 		"/>
          </g>
      );

      case 'down':
        return (this.state.color == 'green'
          ? 
            <g id="down_x5F_vert_2_" className="st4">
              <polygon id="XMLID_139_" className="st6" points="950.9,-117.8 955.4,-117.8 955.4,-46.8 971,-70.8 974.2,-65.8 953.1,-33.2  932,-65.8 935.3,-70.8 950.9,-46.8 		"/>
            </g>
          : 
            <g id="down_x5F_rouge_2_" className="st4">
              <polygon id="XMLID_138_" className="st5" points="950.9,-117.8 955.4,-117.8 955.4,-47.4 971,-71.2 974.2,-66.2 953.1,-33.9  932,-66.2 935.3,-71.2 950.9,-47.4 		"/>
            </g> 
          );
    }
  }

  renderImc() {
    let imc = this.state.value
    //
    if(!isNaN(imc)) {
      if(imc < 16) {
        return (
            <g id="_x3C__x3D__16_2_">
              <ellipse id="_x3C__x3D__16" className="st17" cx="591.2" cy="-110.1" rx="9.3" ry="10.6"/>
              <g id="_x3C__x3D__16_1_">
                <g id="XMLID_195_">
                  <g id="XMLID_280_">
                    <line id="XMLID_283_" className="st18" x1="590.4" y1="-101.9" x2="590.4" y2="-100.5"/>
                    <line id="XMLID_282_" className="st19" x1="590.4" y1="-97.6" x2="590.4" y2="-72.2"/>
                    <line id="XMLID_281_" className="st18" x1="590.4" y1="-70.8" x2="590.4" y2="-69.4"/>
                  </g>
                </g>
                <rect id="XMLID_194_" x="565.1" y="-69.2" className="st0" width="51.2" height="34.8"/>
                <rect id="XMLID_193_" x="567.4" y="-65.7" className="st1" width="46.8" height="27.9"/>
              </g>
              <text id="XMLID_449_" transform="matrix(1 0 0 1 571.3514 -45.5)" className="st7 st8">{this.state.value}</text>
            </g>          
        );
      }      
      else
      if(imc < 17) {
        return (
            <g id="_x3C__x3D__16_2_">
              <ellipse id="_x3C__x3D__16" className="st17" cx="591.2" cy="-110.1" rx="9.3" ry="10.6"/>
              <g id="_x3C__x3D__16_1_">
                <g id="XMLID_195_">
                  <g id="XMLID_280_">
                    <line id="XMLID_283_" className="st18" x1="590.4" y1="-101.9" x2="590.4" y2="-100.5"/>
                    <line id="XMLID_282_" className="st19" x1="590.4" y1="-97.6" x2="590.4" y2="-72.2"/>
                    <line id="XMLID_281_" className="st18" x1="590.4" y1="-70.8" x2="590.4" y2="-69.4"/>
                  </g>
                </g>
                <rect id="XMLID_194_" x="565.1" y="-69.2" className="st0" width="51.2" height="34.8"/>
                <rect id="XMLID_193_" x="567.4" y="-65.7" className="st1" width="46.8" height="27.9"/>
              </g>
              <text id="XMLID_449_" transform="matrix(1 0 0 1 571.3514 -45.5)" className="st7 st8">{this.state.value}</text>
            </g>          
        );
      }
      else
      if(imc < 18) {
        return (
          <g id="_x31_7_x2C_9-16_x2C_1_1_" className="st4">
            <ellipse id="_x31_7_x2C_9-16_x2C_1" className="st20" cx="618.5" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x31_7_x2C_9-16_x2C_1_2_" className="st9">
              <g id="XMLID_171_">
                <g id="XMLID_273_">
                  <line id="XMLID_276_" className="st18" x1="617.6" y1="-101.9" x2="617.6" y2="-100.5"/>
                  <line id="XMLID_275_" className="st19" x1="617.6" y1="-97.6" x2="617.6" y2="-72.2"/>
                  <line id="XMLID_274_" className="st18" x1="617.6" y1="-70.8" x2="617.6" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_170_" x="592.4" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_169_" x="594.6" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_379_" transform="matrix(1 0 0 1 597.5677 -44.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>       
        );
      }
      else
      if(imc < 19) {
        return (
          <g id="_x31_8_x2C_9-18_1_" className="st4">
            <ellipse id="_x31_8_x2C_9-18" className="st20" cx="645.7" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x31_8_x2C_9-18_2_" className="st9">
              <g id="XMLID_168_">
                <g id="XMLID_265_">
                  <line id="XMLID_269_" className="st18" x1="644.8" y1="-101.9" x2="644.8" y2="-100.5"/>
                  <line id="XMLID_267_" className="st19" x1="644.8" y1="-97.6" x2="644.8" y2="-72.2"/>
                  <line id="XMLID_266_" className="st18" x1="644.8" y1="-70.8" x2="644.8" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_167_" x="619.6" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_166_" x="621.8" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_375_" transform="matrix(1 0 0 1 625.7605 -44.9564)" className="st9 st7 st8">{this.state.value}</text>
          </g>     
        );
      }
      else
      if(imc < 21) {
        return (
          <g id="_x31_9-20_x2C_9_2_" className="st4">
            <ellipse id="_x31_9-20_x2C_9" className="st20" cx="671.7" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x31_9-20_x2C_9_1_" className="st9">
              <g id="XMLID_165_">
                <g id="XMLID_258_">
                  <line id="XMLID_261_" className="st18" x1="670.8" y1="-101.9" x2="670.8" y2="-100.5"/>
                  <line id="XMLID_260_" className="st19" x1="670.8" y1="-97.6" x2="670.8" y2="-72.2"/>
                  <line id="XMLID_259_" className="st18" x1="670.8" y1="-70.8" x2="670.8" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_164_" x="645.6" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_163_" x="647.8" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_371_" transform="matrix(1 0 0 1 651.7632 -44.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>    
        );
      }
      else
      if(imc < 22) {
        return (
          <g id="_x32_1-21_x2C_9_2_" className="st4">
            <ellipse id="_x32_1-21_x2C_9" className="st20" cx="697.6" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x32_1-21_x2C_9_1_" className="st9">
              <g id="XMLID_162_">
                <g id="XMLID_251_">
                  <line id="XMLID_254_" className="st18" x1="696.8" y1="-101.9" x2="696.8" y2="-100.5"/>
                  <line id="XMLID_253_" className="st19" x1="696.8" y1="-97.6" x2="696.8" y2="-72.2"/>
                  <line id="XMLID_252_" className="st18" x1="696.8" y1="-70.8" x2="696.8" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_161_" x="671.5" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_160_" x="673.8" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_365_" transform="matrix(1 0 0 1 677.7425 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>   
        );
      }                        
      else   
      if(imc < 23) {
        return (
          <g id="_x32_2-23_x2C_9_2_" className="st4">
            <ellipse id="_x32_2-23_x2C_9" className="st20" cx="733.5" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x32_2-23_x2C_9_1_" className="st9">
              <g id="XMLID_159_">
                <g id="XMLID_244_">
                  <line id="XMLID_247_" className="st18" x1="732.6" y1="-101.9" x2="732.6" y2="-100.5"/>
                  <line id="XMLID_246_" className="st19" x1="732.6" y1="-97.6" x2="732.6" y2="-72.2"/>
                  <line id="XMLID_245_" className="st18" x1="732.6" y1="-70.8" x2="732.6" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_158_" x="707.4" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_157_" x="709.6" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_361_" transform="matrix(1 0 0 1 713.6024 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>
        );
      }                        
      else         
      if(imc < 24) {
        return (
          <g id="_x32_2-23_x2C_9_2_" className="st4">
            <ellipse id="_x32_2-23_x2C_9" className="st20" cx="733.5" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x32_2-23_x2C_9_1_" className="st9">
              <g id="XMLID_159_">
                <g id="XMLID_244_">
                  <line id="XMLID_247_" className="st18" x1="732.6" y1="-101.9" x2="732.6" y2="-100.5"/>
                  <line id="XMLID_246_" className="st19" x1="732.6" y1="-97.6" x2="732.6" y2="-72.2"/>
                  <line id="XMLID_245_" className="st18" x1="732.6" y1="-70.8" x2="732.6" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_158_" x="707.4" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_157_" x="709.6" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_361_" transform="matrix(1 0 0 1 713.6024 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>         
        );
      }
      if(imc < 25) {
        return (
          <g id="_x32_4-24_x2C_9_2_" className="st4">
            <ellipse id="_x32_4-24_x2C_9" className="st20" cx="768.1" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x32_4-24_x2C_9_1_" className="st9">
              <g id="XMLID_156_">
                <g id="XMLID_237_">
                  <line id="XMLID_240_" className="st18" x1="767.3" y1="-101.9" x2="767.3" y2="-100.5"/>
                  <line id="XMLID_239_" className="st19" x1="767.3" y1="-97.6" x2="767.3" y2="-72.2"/>
                  <line id="XMLID_238_" className="st18" x1="767.3" y1="-70.8" x2="767.3" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_155_" x="742" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_154_" x="744.3" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_353_" transform="matrix(1 0 0 1 746.9925 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>         
        );
      }  
      if(imc < 30) {
        return (
          <g id="_x32_5-29_x2C_9_2_" className="st4">
            <ellipse id="_x32_5-29_x2C_9" className="st20" cx="795.4" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x32_5-29_x2C_9_1_" className="st9">
              <g id="XMLID_153_">
                <g id="XMLID_230_">
                  <line id="XMLID_233_" className="st18" x1="793.3" y1="-101.9" x2="793.3" y2="-100.5"/>
                  <line id="XMLID_232_" className="st19" x1="793.3" y1="-97.6" x2="793.3" y2="-72.2"/>
                  <line id="XMLID_231_" className="st18" x1="793.3" y1="-70.8" x2="793.3" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_152_" x="768" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_151_" x="770.3" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_447_" transform="matrix(1 0 0 1 774.0633 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>         
        );
    }                 
    else 
    if(imc < 35) {
      return (
        <g id="_x33_0-34_x2C_9_2_" className="st4">
          <ellipse id="_x33_0-34_x2C_9" className="st20" cx="823.8" cy="-110.1" rx="9.3" ry="10.6"/>
          <g id="_x33_0-34_x2C_9_1_" className="st9">
            <g id="XMLID_150_">
              <g id="XMLID_223_">
                <line id="XMLID_226_" className="st18" x1="823" y1="-101.9" x2="823" y2="-100.5"/>
                <line id="XMLID_225_" className="st19" x1="823" y1="-97.6" x2="823" y2="-72.2"/>
                <line id="XMLID_224_" className="st18" x1="823" y1="-70.8" x2="823" y2="-69.4"/>
              </g>
            </g>
            <rect id="XMLID_149_" x="797.7" y="-69.2" className="st0" width="51.2" height="34.8"/>
            <rect id="XMLID_148_" x="799.9" y="-65.7" className="st1" width="46.8" height="27.9"/>
          </g>
          <text id="XMLID_443_" transform="matrix(1 0 0 1 804.6383 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
        </g>         
        );
      }
      else                 
      if(imc < 40) {
        return (
          <g id="_x33_5-39_x2C_9_2_" className="st4">
            <ellipse id="_x33_5-39_x2C_9" className="st20" cx="851" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x33_5-39_x2C_9_1_" className="st9">
              <g id="XMLID_147_">
                <g id="XMLID_216_">
                  <line id="XMLID_219_" className="st18" x1="850.2" y1="-101.9" x2="850.2" y2="-100.5"/>
                  <line id="XMLID_218_" className="st19" x1="850.2" y1="-97.6" x2="850.2" y2="-72.2"/>
                  <line id="XMLID_217_" className="st18" x1="850.2" y1="-70.8" x2="850.2" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_146_" x="824.9" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_145_" x="827.2" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_436_" transform="matrix(1 0 0 1 832.1201 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>         
          );
      } 
      else                 
      if(imc > 40) {
        return (
          <g id="_x3E__x3D__40" className="st4">
            <ellipse id="_x3E__x3D__40_1_" className="st20" cx="877" cy="-110.1" rx="9.3" ry="10.6"/>
            <g id="_x3E___x3D__40" className="st9">
              <g id="XMLID_144_">
                <g id="XMLID_209_">
                  <line id="XMLID_212_" className="st18" x1="876.1" y1="-101.9" x2="876.1" y2="-100.5"/>
                  <line id="XMLID_211_" className="st19" x1="876.1" y1="-97.6" x2="876.1" y2="-72.2"/>
                  <line id="XMLID_210_" className="st18" x1="876.1" y1="-70.8" x2="876.1" y2="-69.4"/>
                </g>
              </g>
              <rect id="XMLID_143_" x="850.9" y="-69.2" className="st0" width="51.2" height="34.8"/>
              <rect id="XMLID_142_" x="853.1" y="-65.7" className="st1" width="46.8" height="27.9"/>
            </g>
            <text id="XMLID_431_" transform="matrix(1 0 0 1 859.3364 -46.8501)" className="st9 st7 st8">{this.state.value}</text>
          </g>         
          );
      }                       
    }
  }

  render() {      
    return (
          <g id="IMC">
            <g id="trait">
              <g id="XMLID_300_">
                <g id="XMLID_301_">
                  <g>
                    <defs>
                      <path id="SVGID_1_" d="M885.7-106.1H582.6c-1.7,0-3.1-1.6-3.1-3.5l0,0c0-2,1.4-3.5,3.1-3.5h303.1c1.7,0,3.1,1.6,3.1,3.5l0,0
                        C888.8-107.7,887.3-106.1,885.7-106.1z"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use xlinkHref="#SVGID_1_"  style={{overflow:"visible"}}/>
                    </clipPath>
                    <rect id="XMLID_200_" x="579.5" y="-120" className="st12" width="61.9" height="21.2"/>
                  </g>
                </g>
              </g>
              <g id="XMLID_296_">
                <g id="XMLID_297_">
                  <g>
                    <defs>
                      <path id="SVGID_3_" d="M885.7-106.1H582.6c-1.7,0-3.1-1.6-3.1-3.5l0,0c0-2,1.4-3.5,3.1-3.5h303.1c1.7,0,3.1,1.6,3.1,3.5l0,0
                        C888.8-107.7,887.3-106.1,885.7-106.1z"/>
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use xlinkHref="#SVGID_3_"  style={{overflow:"visible"}}/>
                    </clipPath>
                    <rect id="XMLID_199_" x="703.2" y="-120.3" className="st13" width="61.9" height="21.2"/>
                  </g>
                </g>
              </g>
              <g id="XMLID_292_">
                <g id="XMLID_293_">
                  <g>
                    <defs>
                      <path id="SVGID_5_" d="M885.7-106.1H582.6c-1.7,0-3.1-1.6-3.1-3.5l0,0c0-2,1.4-3.5,3.1-3.5h303.1c1.7,0,3.1,1.6,3.1,3.5l0,0
                        C888.8-107.7,887.3-106.1,885.7-106.1z"/>
                    </defs>
                    <clipPath id="SVGID_6_">
                      <use xlinkHref="#SVGID_5_"  style={{overflow:"visible"}}/>
                    </clipPath>
                    <rect id="XMLID_198_" x="765.1" y="-113.2" className="st14" width="61.9" height="7.1"/>
                  </g>
                </g>
              </g>
              <g id="XMLID_288_">
                <g id="XMLID_289_">
                  <g>
                    <defs>
                      <path id="SVGID_7_" d="M885.7-106.1H582.6c-1.7,0-3.1-1.6-3.1-3.5l0,0c0-2,1.4-3.5,3.1-3.5h303.1c1.7,0,3.1,1.6,3.1,3.5l0,0
                        C888.8-107.7,887.3-106.1,885.7-106.1z"/>
                    </defs>
                    <clipPath id="SVGID_8_">
                      <use xlinkHref="#SVGID_7_"  style={{overflow:"visible"}}/>
                    </clipPath>
                    <rect id="XMLID_197_" x="826.9" y="-120" className="st15" width="61.9" height="21.2"/>
                  </g>
                </g>
              </g>
              <g id="XMLID_284_">
                <g id="XMLID_285_">
                  <g>
                    <defs>
                      <path id="SVGID_9_" d="M885.7-106.1H582.6c-1.7,0-3.1-1.6-3.1-3.5l0,0c0-2,1.4-3.5,3.1-3.5h303.1c1.7,0,3.1,1.6,3.1,3.5l0,0
                        C888.8-107.7,887.3-106.1,885.7-106.1z"/>
                    </defs>
                    <clipPath id="SVGID_10_">
                      <use xlinkHref="#SVGID_9_"  style={{overflow:"visible"}}/>
                    </clipPath>
                    <rect id="XMLID_196_" x="641.3" y="-113.2" className="st16" width="62" height="7.1"/>
                  </g>
                </g>
              </g>
            </g>  
            {this.renderImc()}
            {this.renderArrow()}                  
          </g>        
    );
  }
};

//export default Man;
export default ImcRenderer;