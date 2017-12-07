import React, {Component} from 'react'

class Plates3Renderer extends Component {

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
        <path id="accompagnement_x5F_25_2_" className="st32" d="M700.9,282.8v-9.6h9.6C710.5,278.2,705.9,282.8,700.9,282.8z"/>
        //<path id="accompagnement_x5F_25" style={{ fill: "#FFC153" }} d="M-806.2,613.7v-9.6h9.6C-796.6,609.1-801.2,613.7-806.2,613.7z" />
      );
    }
    else
      if (acc > 49 && acc < 75) {
        return (
          <path id="accompagnement_x5F_50_4_" className="st31" d="M700.9,292.6v-19.4H721C721,283.2,711.9,292.6,700.9,292.6z"/>          
        );

      }
      else
        if (acc > 74 && acc < 100) {
          return (
            //<path id="accompagnement_x5F_50" style={{ fill: "#FFC153" }} d="M-806.2,635v-30.9h30.6C-775.5,621.6-789.6,635-806.2,635z" />
            //<path id="accompagnement_x5F_50_1_" className="st32" d="M358.8,293.7v-19.4h20.1C378.9,284.3,369.8,293.7,358.8,293.7z"/>
            <path id="accompagnement_x5F_50_5_" className="st31" d="M700.9,304.1v-30.9h30.6C731.6,290.7,717.5,304.1,700.9,304.1z"/>
          );

        }
        else
          if (acc === 100) {
            return (
              //<path id="accompagnement_x5F_100" style={{ fill: "#FFC153" }} d="M-806.2,642.9v-40.8h40.3C-765.9,624.1-785.2,642.9-806.2,642.9z" />
              //<path id="accompagnement_x5F_100" className="st31" d="M358.8,313.1v-40.8h40.3C399.1,294.3,379.8,313.1,358.8,313.1z"/>
              <path id="accompagnement_x5F_100_2_" className="st31" d="M700.9,312v-40.8h40.3C741.2,293.2,721.9,312,700.9,312z"/>              
            );

          }
  }
/*
          <path id="dessert_x5F_100_2_" className="st28" d="M699.9,312.1v-39.9h-39C660.9,293.2,678.9,312.1,699.9,312.1z"/>
          <path id="dessert_x5F_75_2_" className="st28" d="M699.9,304.4v-31.2h-30.1C669.8,290.2,683.9,304.4,699.9,304.4z"/>
          <path id="dessert_x5F_50_2_" className="st28" d="M700.9,292.8v-19.6H681C681,283.2,689.9,292.8,700.9,292.8z"/>
          <path id="dessert_x5F_25_2_" className="st29" d="M700.2,282.9v-9.8h-9.5C690.7,279.1,695.2,282.9,700.2,282.9z"/>
*/
  renderDes() {
    const {des} = this.state.plate;
    //

    if (des > 24 && des < 50) {
      return (
        //<path id="dessert_x5F_25" className="st28" d="M358.1,284v-9.8h-9.5C348.6,280.2,353.1,284,358.1,284z"/>
        //<path id="dessert_x5F_25" style={{ fill: "#EB6B56" }} d="M-806.9,613.8V604h-9.5C-816.4,610-811.9,613.8-806.9,613.8z" />
        <path id="dessert_x5F_25_2_" className="st29" d="M700.2,282.9v-9.8h-9.5C690.7,279.1,695.2,282.9,700.2,282.9z"/>
      );

    }
    else
    if (des > 49 && des < 75) {
      return (
        //<path id="dessert_x5F_50" className="st28" d="M358.8,293.9v-19.6h-19.9C338.9,284.3,347.8,293.9,358.8,293.9z"/>
        //<path id="dessert_x5F_50" style={{ fill: "#EB6B56" }} d="M-806.2,623.7v-19.6h-19.9C-826.1,614.1-817.2,623.7-806.2,623.7z" />
        <path id="dessert_x5F_50_2_" className="st28" d="M700.9,292.8v-19.6H681C681,283.2,689.9,292.8,700.9,292.8z"/>
      );

    }
    else
      if (des > 74 && des < 100) {
        return (
          //<path id="dessert_x5F_75" className="st29" d="M357.8,305.5v-31.2h-30.1C327.7,291.3,341.8,305.5,357.8,305.5z"/>
          //<path id="dessert_x5F_75" style={{ fill: "#EB6B56" }} d="M-807.2,635.3v-31.2h-30.1C-837.3,621.1-823.2,635.3-807.2,635.3z" />
          //<path id="dessert_x5F_75_2_" className="st28" d="M699.9,304.4v-31.2h-30.1C669.8,290.2,683.9,304.4,699.9,304.4z"/>
          <path id="dessert_x5F_75_2_" className="st28" d="M699.9,304.4v-31.2h-30.1C669.8,290.2,683.9,304.4,699.9,304.4z"/>
        );

      }
      else
        if (des === 100) {
          return (            
            //<path id="dessert_x5F_100" className="st28" d="M357.8,313.2v-39.9h-39C318.8,294.3,336.8,313.2,357.8,313.2z"/>
            //<path id="dessert_x5F_100" style={{ fill: "#EB6B56" }} d="M-807.2,643v-39.9h-39C-846.2,624.1-828.2,643-807.2,643z" />
            <path id="dessert_x5F_100_2_" className="st28" d="M699.9,312.1v-39.9h-39C660.9,293.2,678.9,312.1,699.9,312.1z"/>
          );
        }
  }
  /*
          <path id="entree_x5F_100_2_" className="st40" d="M700.9,232.3v40.9h-40.7C660.2,251.2,678.9,232.3,700.9,232.3z"/>
          <path id="entree_x5F_75_2_" className="st40" d="M699.9,242.2v30h-30.1C669.8,255.2,683.9,242.2,699.9,242.2z"/>
          <path id="entree_x5F_50_2_" className="st40" d="M699.9,253.6v18.6H681C681,262.6,688.9,253.6,699.9,253.6z"/>
          <path id="entree_x5F_25_2_" className="st47" d="M700.2,262.5v9.7h-9.5C690.7,267.2,695.2,262.5,700.2,262.5z"/>
  */  
  renderEnt() {
    const {ent} = this.state.plate;
    //
    
    if (ent > 24 && ent < 50) {
      return (
        //<path id="entree_x5F_25" style={{ fill: "#462446" }} d="M-806.9,593.4v9.7h-9.5C-816.4,598.1-811.9,593.4-806.9,593.4z" />
        <path id="entree_x5F_25_2_" className="st47" d="M700.2,262.5v9.7h-9.5C690.7,267.2,695.2,262.5,700.2,262.5z"/>
      );

    }
    else
      if (ent > 49 && ent < 75) {
        return (
          //<path id="entree_x5F_50" style={{ fill: "#462446" }} d="M-807.2,584.5v18.6h-18.9C-826.1,593.5-818.2,584.5-807.2,584.5z" />
          <path id="entree_x5F_50_2_" className="st40" d="M699.9,253.6v18.6H681C681,262.6,688.9,253.6,699.9,253.6z"/>
        );

      }
      else
        if (ent > 74 && ent < 100) {
          return (
            //<path id="entree_x5F_75" style={{ fill: "#462446" }} d="M-807.2,573.1v30h-30.1C-837.3,586.1-823.2,573.1-807.2,573.1z" />
            <path id="entree_x5F_75_2_" className="st40" d="M699.9,242.2v30h-30.1C669.8,255.2,683.9,242.2,699.9,242.2z"/>
          );

        }
        else
          if (ent === 100) {
            return (
              //<path id="entree_x5F_100" style={{ fill: "#462446" }} d="M-806.2,563.2v40.9h-40.7C-846.9,582.1-828.2,563.2-806.2,563.2z" />
              <path id="entree_x5F_100_2_" className="st40" d="M700.9,232.3v40.9h-40.7C660.2,251.2,678.9,232.3,700.9,232.3z"/>
            );

          }
  }
/*
          <path id="VPO_x5F_100_2_" className="st37" d="M700.9,232.2v40H741C741,250.2,722.9,232.2,700.9,232.2z"/>
          <path id="VPO_x5F_75_2_" className="st37" d="M700.9,242v30.2h30.5C731.5,255.2,716.9,242,700.9,242z"/>
          <path id="VPO_x5F_50_2_" className="st37" d="M700.9,253.6v19.6h20.2C721.1,263.2,712.1,253.6,700.9,253.6z"/>
          <path id="VPO_x5F_25_2_" className="st38" d="M700.9,262.5v9.7h9.6C710.5,266.3,705.9,262.5,700.9,262.5z"/>
*/

  renderVpo() {
    const {vpo} = this.state.plate;
    //

    if (vpo > 24 && vpo < 50) {
      return (
          <path id="VPO_x5F_25_2_" className="st38" d="M700.9,262.5v9.7h9.6C710.5,266.3,705.9,262.5,700.9,262.5z"/>    
      );
    }
    else
      if (vpo > 49 && vpo < 75) {
        return (
          //<path id="VPO_x5F_50" style={{ fill: "#B05F6D" }} d="M-806.2,584.5v19.6h20.2C-786,594.1-795,584.5-806.2,584.5z" />
          <path id="VPO_x5F_50_2_" className="st37" d="M700.9,253.6v19.6h20.2C721.1,263.2,712.1,253.6,700.9,253.6z"/>
        );

      }
      else
        if (vpo > 74 && vpo < 100) {
          return (
            //<path id="VPO_x5F_75" style={{ fill: "#B05F6D" }} d="M-806.2,572.9v30.2h30.5C-775.6,586.1-790.2,572.9-806.2,572.9z" />
            <path id="VPO_x5F_75_2_" className="st37" d="M700.9,242v30.2h30.5C731.5,255.2,716.9,242,700.9,242z"/>
          );

        }
        else
          if (vpo > 99) {
            return (
              //<path id="VPO_x5F_100" style={{ fill: "#B05F6D" }} d="M-806.2,563.1v40h40.1C-766.1,581.1-784.2,563.1-806.2,563.1z" />
              <path id="VPO_x5F_100_2_" className="st37" d="M700.9,232.2v40H741C741,250.2,722.9,232.2,700.9,232.2z"/>
            );
          }
  }
/*
          <path id="PL_x5F_100_2_" className="st35" d="M769.1,219.1c-11,0-20.3,9.1-20.3,20.1s9.3,19.9,20.3,19.9s19.7-8.9,19.7-19.9S780.1,219.1,769.1,219.1z"/>
          <path id="PL_x5F_75_2_" className="st35" d="M767.9,219.1v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S778.9,219.1,767.9,219.1z"/>
          <path id="PL_x5F_50_2_" className="st35" d="M768.9,219.1v20.1v19.9c11,0,19.9-8.9,19.9-19.9S779.9,219.1,768.9,219.1z"/>
          <path id="PL_x5F_25_2_" className="st34" d="M768.9,219.1v20h19.7C788.6,228.2,778.9,219.1,768.9,219.1z"/>
*/          
  renderPl() {
    const {pl} = this.state.plate;
    //

    if (pl > 24 && pl < 50) {
      return (
        //<path id="PL_x5F_25" style={{ fill: "#47B39D" }} d="M-738.2,550v20h19.7C-718.5,559.1-728.2,550-738.2,550z" />
        <path id="PL_x5F_25_2_" className="st34" d="M768.9,219.1v20h19.7C788.6,228.2,778.9,219.1,768.9,219.1z"/>
      );
    }
    else
      if (pl > 49 && pl < 75) {
        return (
          //<path id="PL_x5F_50" style={{ fill: "#47B39D" }} d="M-738.2,550v20.1V590c11,0,19.9-8.9,19.9-19.9S-727.2,550-738.2,550z" />
          <path id="PL_x5F_50_2_" className="st35" d="M768.9,219.1v20.1v19.9c11,0,19.9-8.9,19.9-19.9S779.9,219.1,768.9,219.1z"/>
        );
      }
      else
        if (pl > 74 && pl < 100) {
          return (
            //<path id="PL_x5F_75" style={{ fill: "#47B39D" }} d="M-739.2,550v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S-728.2,550-739.2,550z" />
            <path id="PL_x5F_75_2_" className="st35" d="M767.9,219.1v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S778.9,219.1,767.9,219.1z"/>
          );
        }
        else
          if (pl === 100) {
            return (
              //<path id="PL_x5F_100" style={{ fill: "#47B39D" }} d="M-738,550c-11,0-20.3,9.1-20.3,20.1S-749,590-738,590s19.7-8.9,19.7-19.9S-727,550-738,550z" />
              <path id="PL_x5F_100_2_" className="st35" d="M769.1,219.1c-11,0-20.3,9.1-20.3,20.1s9.3,19.9,20.3,19.9s19.7-8.9,19.7-19.9S780.1,219.1,769.1,219.1z"/>
            );
          }
  } 

  
  render() {
    return (
      <g id="assiette2">
        <g id="CONTOURS_2_">
          <g id="contours_x5F_assiette_x5F_pple_2_">            
              <linearGradient id="XMLID_186_" gradientUnits="userSpaceOnUse" x1="700.5" y1="991.1" x2="700.5" y2="873.1" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="0.391" style={{stopColor:"#FAFAFA"}}/>
              <stop  offset="0.8214" style={{stopColor:"#EDEDED"}}/>
              <stop  offset="1" style={{stopColor:"#E6E6E6"}}/>
            </linearGradient>
            <path id="XMLID_335_" className="st48" d="M700.5,331.1c-32.5,0-59-26.5-59-59s26.5-59,59-59s59,26.5,59,59S733.1,331.1,700.5,331.1z"/>            
              <linearGradient id="XMLID_188_" gradientUnits="userSpaceOnUse" x1="700.5" y1="874.6" x2="700.5" y2="989.6" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <circle id="XMLID_334_" className="st49" cx="700.5" cy="272.1" r="57.5"/>            
              <linearGradient id="XMLID_189_" gradientUnits="userSpaceOnUse" x1="700.5" y1="977.1" x2="700.5" y2="887.1" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <path id="XMLID_333_" className="st50" d="M700.5,317.1c-24.8,0-45-20.2-45-45s20.2-45,45-45s45,20.2,45,45S725.3,317.1,700.5,317.1z"/>
          </g>
          <g id="contours_x5F_assiette_x5F_PL_2_">            
              <linearGradient id="XMLID_191_" gradientUnits="userSpaceOnUse" x1="768.5" y1="990.0864" x2="768.5" y2="940.1469" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="0.391" style={{stopColor:"#FAFAFA"}}/>
              <stop  offset="0.8214" style={{stopColor:"#EDEDED"}}/>
              <stop  offset="1" style={{stopColor:"#E6E6E6"}}/>
            </linearGradient>
            <path id="XMLID_332_" className="st51" d="M768.5,264c-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S782.3,264,768.5,264z"/>            
              <linearGradient id="XMLID_192_" gradientUnits="userSpaceOnUse" x1="768.5" y1="940.8" x2="768.5" y2="989.4698" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <circle id="XMLID_331_" className="st52" cx="768.5" cy="239.1" r="24.3"/>            
              <linearGradient id="XMLID_204_" gradientUnits="userSpaceOnUse" x1="768.4" y1="987.9999" x2="768.4" y2="942.2999" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="4.464286e-03" style={{stopColor:"#E6E6E6"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <path id="XMLID_330_" className="st53" d="M768.4,261.9c-12.6,0-22.8-10.2-22.8-22.8c0-12.6,10.2-22.9,22.8-22.9s22.8,10.2,22.8,22.8C791.2,251.6,781,261.9,768.4,261.9z"/>
          </g>
        </g>
        <g id="DESSERT_2_">
          <path id="dessert_x5F_0_2_" className="st27" d="M660.9,272.7c0,21,17.5,39.4,39.5,39.4v-39.4H660.9z"/>
          {this.renderDes()}
        </g>
        <g id="ACCOMPAGNEMENT_2_">
          <path id="accompagnement_x5F_0_2_" className="st30" d="M700.4,312.1c22,0,40.5-18.4,40.5-39.4h-40.5V312.1z"/>
          {this.renderAcc()}
        </g>
        <g id="PL_2_">
          <path id="PL_x5F_0_2_" className="st33" d="M768.8,219.1c-11.2,0-20.2,9.2-20.2,20s9,20,20.2,20c10.8,0,19.8-9.2,19.8-20S779.6,219.1,768.8,219.1z"/>
          {this.renderPl()}
        </g>
        <g id="VPO_2_">
          <path id="VPO_x5F_0_2_" className="st36" d="M700.4,232.1v40.5h40.5C740.9,250.7,722.4,232.1,700.4,232.1z"/>
          {this.renderVpo()}
        </g>
        <g id="ENTREE_2_">
          <path id="entree_x5F_0_2_" className="st39" d="M660.9,272.7h39.5v-40.6C678.4,232.1,660.9,250.7,660.9,272.7z"/>
            {this.renderEnt()}
        </g>
      </g>          
    )
  }       

};

export default Plates3Renderer;          