import React, {Component} from 'react'

class Plates1Renderer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plate: {
        ent: 0,
        acc: 0,
        vpo: 0,
        des: 0,
        pl: 0
      }
    }
  }

  componentDidMount() {    
    //this.setState({ plate: this.props.plate });
  }

  componentWillReceiveProps(nextProps) {  
    if(nextProps.hasOwnProperty('plate')) {
      //
      this.setState({ plate: nextProps.plate });
    }
  }  


  renderAcc() {
    const {acc} = this.state.plate;
    //

    if (acc > 24 && acc < 50) {
      return (
        <path id="accompagnement_x5F_25_1_" className="st32" d="M530.5,282.8v-9.6h9.6C540.1,278.2,535.5,282.8,530.5,282.8z"/>
        //<path id="accompagnement_x5F_25" style={{ fill: "#FFC153" }} d="M-806.2,613.7v-9.6h9.6C-796.6,609.1-801.2,613.7-806.2,613.7z" />
      );
    }
    else
      if (acc > 49 && acc < 75) {
        return (
          <path id="accompagnement_x5F_50_1_" style={{ fill: "#FFC153" }} d="M-806.2,623.5v-19.4h20.1C-786.1,614.1-795.2,623.5-806.2,623.5z" />
        );

      }
      else
        if (acc > 74 && acc < 100) {
          return (
            //<path id="accompagnement_x5F_50" style={{ fill: "#FFC153" }} d="M-806.2,635v-30.9h30.6C-775.5,621.6-789.6,635-806.2,635z" />
            <path id="accompagnement_x5F_50_1_" className="st32" d="M358.8,293.7v-19.4h20.1C378.9,284.3,369.8,293.7,358.8,293.7z"/>
          );

        }
        else
          if (acc === 100) {
            return (
              //<path id="accompagnement_x5F_100" style={{ fill: "#FFC153" }} d="M-806.2,642.9v-40.8h40.3C-765.9,624.1-785.2,642.9-806.2,642.9z" />
              <path id="accompagnement_x5F_100" className="st31" d="M358.8,313.1v-40.8h40.3C399.1,294.3,379.8,313.1,358.8,313.1z"/>              
            );

          }
  }

  renderDes() {
    const {des} = this.state.plate;
    //

    if (des > 24 && des < 50) {
      return (
        <path id="dessert_x5F_25" className="st28" d="M358.1,284v-9.8h-9.5C348.6,280.2,353.1,284,358.1,284z"/>
        //<path id="dessert_x5F_25" style={{ fill: "#EB6B56" }} d="M-806.9,613.8V604h-9.5C-816.4,610-811.9,613.8-806.9,613.8z" />
      );

    }
    else
    if (des > 49 && des < 75) {
      return (
        <path id="dessert_x5F_50" className="st28" d="M358.8,293.9v-19.6h-19.9C338.9,284.3,347.8,293.9,358.8,293.9z"/>
        //<path id="dessert_x5F_50" style={{ fill: "#EB6B56" }} d="M-806.2,623.7v-19.6h-19.9C-826.1,614.1-817.2,623.7-806.2,623.7z" />
      );

    }
    else
      if (des > 74 && des < 100) {
        return (
          <path id="dessert_x5F_75" className="st29" d="M357.8,305.5v-31.2h-30.1C327.7,291.3,341.8,305.5,357.8,305.5z"/>
          //<path id="dessert_x5F_75" style={{ fill: "#EB6B56" }} d="M-807.2,635.3v-31.2h-30.1C-837.3,621.1-823.2,635.3-807.2,635.3z" />
        );

      }
      else
        if (des === 100) {
          return (            
            <path id="dessert_x5F_100" className="st28" d="M357.8,313.2v-39.9h-39C318.8,294.3,336.8,313.2,357.8,313.2z"/>
            //<path id="dessert_x5F_100" style={{ fill: "#EB6B56" }} d="M-807.2,643v-39.9h-39C-846.2,624.1-828.2,643-807.2,643z" />
          );
        }
  }

  renderEnt() {
    const {ent} = this.state.plate;
    //
    if (ent > 24 && ent < 50) {
      return (
        //<path id="entree_x5F_25" style={{ fill: "#462446" }} d="M-806.9,593.4v9.7h-9.5C-816.4,598.1-811.9,593.4-806.9,593.4z" />
        <path id="entree_x5F_25" className="st40" d="M358.1,263.6v9.7h-9.5C348.6,268.3,353.1,263.6,358.1,263.6z"/>
      );

    }
    else
      if (ent > 49 && ent < 75) {
        return (
          //<path id="entree_x5F_50" style={{ fill: "#462446" }} d="M-807.2,584.5v18.6h-18.9C-826.1,593.5-818.2,584.5-807.2,584.5z" />
          <path id="entree_x5F_50" className="st40" d="M357.8,254.7v18.6h-18.9C338.9,263.7,346.8,254.7,357.8,254.7z"/>
        );

      }
      else
        if (ent > 74 && ent < 100) {
          return (
            //<path id="entree_x5F_75" style={{ fill: "#462446" }} d="M-807.2,573.1v30h-30.1C-837.3,586.1-823.2,573.1-807.2,573.1z" />
            <path id="entree_x5F_75" className="st40" d="M357.8,243.3v30h-30.1C327.7,256.3,341.8,243.3,357.8,243.3z"/>
          );

        }
        else
          if (ent === 100) {
            return (
              //<path id="entree_x5F_100" style={{ fill: "#462446" }} d="M-806.2,563.2v40.9h-40.7C-846.9,582.1-828.2,563.2-806.2,563.2z" />
              <path id="entree_x5F_100" className="st40" d="M358.8,233.4v40.9h-40.7C318.1,252.3,336.8,233.4,358.8,233.4z"/>
            );

          }
  }

  renderVpo() {
    const {vpo} = this.state.plate;
    //
    if (vpo > 24 && vpo < 50) {
      return (
          <path id="VPO_x5F_25" className="st38" d="M358.8,263.6v9.7h9.6C368.4,267.4,363.8,263.6,358.8,263.6z"/>
        //<path id="VPO_x5F_25" style={{ fill: "#B05F6D" }} d="M-806.2,593.4v9.7h9.6C-796.6,597.2-801.2,593.4-806.2,593.4z" />
      );
    }
    else
      if (vpo > 49 && vpo < 75) {
        return (
          //<path id="VPO_x5F_50" style={{ fill: "#B05F6D" }} d="M-806.2,584.5v19.6h20.2C-786,594.1-795,584.5-806.2,584.5z" />
          <path id="VPO_x5F_50" className="st37" d="M358.8,254.7v19.6H379C379,264.3,370,254.7,358.8,254.7z"/>
        );

      }
      else
        if (vpo > 74 && vpo < 100) {
          return (
            //<path id="VPO_x5F_75" style={{ fill: "#B05F6D" }} d="M-806.2,572.9v30.2h30.5C-775.6,586.1-790.2,572.9-806.2,572.9z" />
            <path id="VPO_x5F_75" className="st37" d="M358.8,243.1v30.2h30.5C389.4,256.3,374.8,243.1,358.8,243.1z"/>
          );

        }
        else
          if (vpo > 99) {
            return (
              //<path id="VPO_x5F_100" style={{ fill: "#B05F6D" }} d="M-806.2,563.1v40h40.1C-766.1,581.1-784.2,563.1-806.2,563.1z" />
              <path id="VPO_x5F_100" className="st37" d="M358.8,233.3v40h40.1C398.9,251.3,380.8,233.3,358.8,233.3z"/>
            );
          }
  }

  renderPl() {
    const {pl} = this.state.plate;
    //
    if (pl > 24 && pl < 50) {
      return (
        //<path id="PL_x5F_25" style={{ fill: "#47B39D" }} d="M-738.2,550v20h19.7C-718.5,559.1-728.2,550-738.2,550z" />
        <path id="PL_x5F_25" className="st35" d="M426.8,220.2v20h19.7C446.5,229.3,436.8,220.2,426.8,220.2z"/>
      );
    }
    else
      if (pl > 49 && pl < 75) {
        return (
          //<path id="PL_x5F_50" style={{ fill: "#47B39D" }} d="M-738.2,550v20.1V590c11,0,19.9-8.9,19.9-19.9S-727.2,550-738.2,550z" />
          <path id="PL_x5F_50" className="st35" d="M426.8,220.2v20.1v19.9c11,0,19.9-8.9,19.9-19.9S437.8,220.2,426.8,220.2z"/>
        );
      }
      else
        if (pl > 74 && pl < 100) {
          return (
            //<path id="PL_x5F_75" style={{ fill: "#47B39D" }} d="M-739.2,550v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S-728.2,550-739.2,550z" />
            <path id="PL_x5F_75" className="st35" d="M425.8,220.2v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S436.8,220.2,425.8,220.2z"/>
          );
        }
        else
          if (pl === 100) {
            return (
              //<path id="PL_x5F_100" style={{ fill: "#47B39D" }} d="M-738,550c-11,0-20.3,9.1-20.3,20.1S-749,590-738,590s19.7-8.9,19.7-19.9S-727,550-738,550z" />
              <path id="PL_x5F_100" className="st34" d="M427,220.2c-11,0-20.3,9.1-20.3,20.1s9.3,19.9,20.3,19.9s19.7-8.9,19.7-19.9S438,220.2,427,220.2z"/>
            );
          }
  }  
//
  render() {    
    return (
          <g id="assiette_x5F_temoin">
            <g id="CONTOURS">
              <g id="contours_x5F_assiette_x5F_pple">                
                  <linearGradient id="XMLID_129_" gradientUnits="userSpaceOnUse" x1="358.4" y1="989.9999" x2="358.4" y2="871.9999" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
                  <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
                  <stop  offset="0.391" style={{stopColor:"#FAFAFA"}}/>
                  <stop  offset="0.8214" style={{stopColor:"#EDEDED"}}/>
                  <stop  offset="1" style={{stopColor:"#E6E6E6"}}/>
                </linearGradient>
                <path id="XMLID_421_" className="st21" d="M358.4,332.2c-32.5,0-59-26.5-59-59s26.5-59,59-59s59,26.5,59,59S391,332.2,358.4,332.2z" />                
                  <linearGradient id="XMLID_130_" gradientUnits="userSpaceOnUse" x1="358.4" y1="873.4999" x2="358.4" y2="988.4999" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
                  <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
                  <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
                </linearGradient><path id="entree_x5F_100" className="st40" d="M358.8,233.4v40.9h-40.7C318.1,252.3,336.8,233.4,358.8,233.4z"/>
                <circle id="XMLID_420_" className="st22" cx="358.4" cy="273.2" r="57.5"/>
                
                  <linearGradient id="XMLID_131_" gradientUnits="userSpaceOnUse" x1="358.4" y1="975.9999" x2="358.4" y2="885.9999" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
                  <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
                  <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
                </linearGradient>
                <path id="XMLID_419_" className="st23" d="M358.4,318.2c-24.8,0-45-20.2-45-45s20.2-45,45-45c24.8,0,45,20.2,45,45
                  S383.2,318.2,358.4,318.2z"/>
                  
              </g>
              <g id="contours_x5F_assiette_x5F_PL">                
                  <linearGradient id="XMLID_173_" gradientUnits="userSpaceOnUse" x1="426.3999" y1="988.9863" x2="426.4001" y2="939.0468" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
                  <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
                  <stop  offset="0.391" style={{stopColor:"#FAFAFA"}}/>
                  <stop  offset="0.8214" style={{stopColor:"#EDEDED"}}/>
                  <stop  offset="1" style={{stopColor:"#E6E6E6"}}/>
                </linearGradient>
                <path id="XMLID_417_" className="st24" d="M426.4,265.1c-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25
                  C451.4,253.9,440.2,265.1,426.4,265.1z"/>
                
                  <linearGradient id="XMLID_174_" gradientUnits="userSpaceOnUse" x1="426.4" y1="939.7" x2="426.4" y2="988.3698" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
                  <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
                  <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
                </linearGradient>
                <circle id="XMLID_416_" className="st25" cx="426.4" cy="240.2" r="24.3"/>
                
                  <linearGradient id="XMLID_176_" gradientUnits="userSpaceOnUse" x1="426.3" y1="986.8999" x2="426.3" y2="941.2" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
                  <stop  offset="4.464286e-03" style={{stopColor:"#E6E6E6"}}/>
                  <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
                </linearGradient>
                <path id="XMLID_415_" className="st26" d="M426.3,263c-12.6,0-22.8-10.2-22.8-22.8s10.2-22.9,22.8-22.9c12.6,0,22.8,10.2,22.8,22.8
                  S438.9,263,426.3,263z"/>
              </g>
            </g>
            <g id="DESSERT">
              <path id="dessert_x5F_0" className="st27" d="M318.8,273.8c0,21,17.5,39.4,39.5,39.4v-39.4H318.8z"/>
              {this.renderDes()}              
            </g>
            <g id="ACCOMPAGNEMENT">
              <path id="accompagnement_x5F_0" className="st30" d="M358.3,313.2c22,0,40.5-18.4,40.5-39.4h-40.5V313.2z"/>
              {this.renderAcc()}
            </g>
            <g id="PL">
              <path id="PL_x5F_0" className="st33" d="M426.7,220.2c-11.2,0-20.2,9.2-20.2,20s9,20,20.2,20c10.8,0,19.8-9.2,19.8-20S437.5,220.2,426.7,220.2z"/>
              {this.renderPl()}              
            </g>
            <g id="VPO">
              <path id="VPO_x5F_0" className="st36" d="M358.3,233.2v40.5h40.5C398.8,251.8,380.3,233.2,358.3,233.2z"/>
              {this.renderVpo()}  
            </g>
            <g id="ENTREE">
              <path id="entree_x5F_0" className="st39" d="M318.8,273.8h39.5v-40.6C336.3,233.2,318.8,251.8,318.8,273.8z"/>
              {this.renderEnt()}              
            </g>
          </g>
    );
  }
};

export default Plates1Renderer;          