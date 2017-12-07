import React, {Component} from 'react'

class Plates4Renderer extends Component {

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
        <path id="accompagnement_x5F_25_3_" className="st32" d="M871.7,282.8v-9.6h9.6C881.3,278.2,876.7,282.8,871.7,282.8z"/>
      );
    }
    else
      if (acc > 49 && acc < 75) {
        return (
          <path id="accompagnement_x5F_50_6_" className="st31" d="M871.7,292.6v-19.4h20.1C891.8,283.2,882.7,292.6,871.7,292.6z"/>
        );
    }
    else
      if (acc > 74 && acc < 100) {
        return (
          <path id="accompagnement_x5F_50_7_" className="st31" d="M871.7,304.1v-30.9h30.6C902.4,290.7,888.3,304.1,871.7,304.1z"/>
        );

    }
    else
      if (acc === 100) {
        return (
          <path id="accompagnement_x5F_100_3_" className="st31" d="M871.7,312v-40.8H912C912,293.2,892.7,312,871.7,312z"/>              
        );

      }
  }
/*
          <path id="dessert_x5F_100_3_" className="st28" d="M870.7,312.1v-39.9h-39C831.7,293.2,849.7,312.1,870.7,312.1z"/>
          <path id="dessert_x5F_75_3_" className="st28" d="M870.7,304.4v-31.2h-30.1C840.6,290.2,854.7,304.4,870.7,304.4z"/>
          <path id="dessert_x5F_50_3_" className="st28" d="M871.7,292.8v-19.6h-19.9C851.8,283.2,860.7,292.8,871.7,292.8z"/>
          <path id="dessert_x5F_25_3_" className="st29" d="M871,282.9v-9.8h-9.5C861.5,279.1,866,282.9,871,282.9z"/>
*/
  renderDes() {
    const {des} = this.state.plate;
    //

    if (des > 24 && des < 50) {
      return (
        <path id="dessert_x5F_25_3_" className="st29" d="M871,282.9v-9.8h-9.5C861.5,279.1,866,282.9,871,282.9z"/>
      );

    }
    else
    if (des > 49 && des < 75) {
      return (
        <path id="dessert_x5F_50_3_" className="st28" d="M871.7,292.8v-19.6h-19.9C851.8,283.2,860.7,292.8,871.7,292.8z"/>
      );

    }
    else
      if (des > 74 && des < 100) {
        return (
          <path id="dessert_x5F_75_3_" className="st28" d="M870.7,304.4v-31.2h-30.1C840.6,290.2,854.7,304.4,870.7,304.4z"/>
        );
      }
      else
        if (des === 100) {
          return (            
            <path id="dessert_x5F_100_3_" className="st28" d="M870.7,312.1v-39.9h-39C831.7,293.2,849.7,312.1,870.7,312.1z"/>
          );
        }
  }
/*
          <path id="entree_x5F_100_3_" className="st40" d="M871.7,232.3v40.9H831C831,251.2,849.7,232.3,871.7,232.3z"/>
          <path id="entree_x5F_75_3_" className="st40" d="M870.7,242.2v30h-30.1C840.6,255.2,854.7,242.2,870.7,242.2z"/>
          <path id="entree_x5F_50_3_" className="st40" d="M870.7,253.6v18.6h-18.9C851.8,262.6,859.7,253.6,870.7,253.6z"/>
          <path id="entree_x5F_25_3_" className="st47" d="M871,262.5v9.7h-9.5C861.5,267.2,866,262.5,871,262.5z"/>
*/
  renderEnt() {
    const {ent} = this.state.plate;
    //

    if (ent > 24 && ent < 50) {
      return (
        //<path id="entree_x5F_25" style={{ fill: "#462446" }} d="M-806.9,593.4v9.7h-9.5C-816.4,598.1-811.9,593.4-806.9,593.4z" />
        <path id="entree_x5F_25_3_" className="st47" d="M871,262.5v9.7h-9.5C861.5,267.2,866,262.5,871,262.5z"/>
      );

    }
    else
      if (ent > 49 && ent < 75) {
        return (
          //<path id="entree_x5F_50" style={{ fill: "#462446" }} d="M-807.2,584.5v18.6h-18.9C-826.1,593.5-818.2,584.5-807.2,584.5z" />
          <path id="entree_x5F_50_3_" className="st40" d="M870.7,253.6v18.6h-18.9C851.8,262.6,859.7,253.6,870.7,253.6z"/>
        );

      }
      else
        if (ent > 74 && ent < 100) {
          return (
            //<path id="entree_x5F_75" style={{ fill: "#462446" }} d="M-807.2,573.1v30h-30.1C-837.3,586.1-823.2,573.1-807.2,573.1z" />
            <path id="entree_x5F_75_3_" className="st40" d="M870.7,242.2v30h-30.1C840.6,255.2,854.7,242.2,870.7,242.2z"/>
          );

        }
        else
          if (ent === 100) {
            return (
              //<path id="entree_x5F_100" style={{ fill: "#462446" }} d="M-806.2,563.2v40.9h-40.7C-846.9,582.1-828.2,563.2-806.2,563.2z" />
              <path id="entree_x5F_100_3_" className="st40" d="M871.7,232.3v40.9H831C831,251.2,849.7,232.3,871.7,232.3z"/>
            );

          }
  }
/*
          <path id="VPO_x5F_100_3_" className="st37" d="M871.7,232.2v40h40.1C911.8,250.2,893.7,232.2,871.7,232.2z"/>
          <path id="VPO_x5F_75_3_" className="st37" d="M871.7,242v30.2h30.5C902.3,255.2,887.7,242,871.7,242z"/>
          <path id="VPO_x5F_50_3_" className="st37" d="M871.7,253.6v19.6h20.2C891.9,263.2,882.9,253.6,871.7,253.6z"/>
          <path id="VPO_x5F_25_3_" className="st38" d="M871.7,262.5v9.7h9.6C881.3,266.3,876.7,262.5,871.7,262.5z"/>                    
*/
  renderVpo() {
    const {vpo} = this.state.plate;    
    //

    if (vpo > 24 && vpo < 50) {
      return (
          <path id="VPO_x5F_25" className="st38" d="M358.8,263.6v9.7h9.6C368.4,267.4,363.8,263.6,358.8,263.6z"/>
      );
    }
    else
      if (vpo > 49 && vpo < 75) {
        return (
          <path id="VPO_x5F_50_3_" className="st37" d="M871.7,253.6v19.6h20.2C891.9,263.2,882.9,253.6,871.7,253.6z"/>
        );

      }
      else
        if (vpo > 74 && vpo < 100) {
          return (
            <path id="VPO_x5F_75_3_" className="st37" d="M871.7,242v30.2h30.5C902.3,255.2,887.7,242,871.7,242z"/>
          );

        }
        else
          if (vpo > 99) {
            return (
              <path id="VPO_x5F_100_3_" className="st37" d="M871.7,232.2v40h40.1C911.8,250.2,893.7,232.2,871.7,232.2z"/>
            );
          }
  }
/*
          <path id="PL_x5F_100_3_" className="st35" d="M939.9,219.1c-11,0-20.3,9.1-20.3,20.1s9.3,19.9,20.3,19.9s19.7-8.9,19.7-19.9S950.9,219.1,939.9,219.1z"/>
          <path id="PL_x5F_75_3_" className="st35" d="M938.7,219.1v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S949.7,219.1,938.7,219.1z"/>
          <path id="PL_x5F_50_3_" className="st35" d="M939.7,219.1v20.1v19.9c11,0,19.9-8.9,19.9-19.9S950.7,219.1,939.7,219.1z"/>
          <path id="PL_x5F_25_3_" className="st34" d="M939.7,219.1v20h19.7C959.4,228.2,949.7,219.1,939.7,219.1z"/>
*/
  renderPl() {
    const {pl} = this.state.plate;
    //

    if (pl > 24 && pl < 50) {
      return (
        //<path id="PL_x5F_25" style={{ fill: "#47B39D" }} d="M-738.2,550v20h19.7C-718.5,559.1-728.2,550-738.2,550z" />
        <path id="PL_x5F_25_3_" className="st34" d="M939.7,219.1v20h19.7C959.4,228.2,949.7,219.1,939.7,219.1z"/>
      );
    }
    else
      if (pl > 49 && pl < 75) {
        return (
          //<path id="PL_x5F_50" style={{ fill: "#47B39D" }} d="M-738.2,550v20.1V590c11,0,19.9-8.9,19.9-19.9S-727.2,550-738.2,550z" />
          <path id="PL_x5F_50_3_" className="st35" d="M939.7,219.1v20.1v19.9c11,0,19.9-8.9,19.9-19.9S950.7,219.1,939.7,219.1z"/>
        );
      }
      else
        if (pl > 74 && pl < 100) {
          return (
            //<path id="PL_x5F_75" style={{ fill: "#47B39D" }} d="M-739.2,550v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S-728.2,550-739.2,550z" />
            <path id="PL_x5F_75_3_" className="st35" d="M938.7,219.1v20h-19.5c0,11,8.7,20,19.7,20s20.2-8.9,20.2-19.9S949.7,219.1,938.7,219.1z"/>
          );
        }
        else
          if (pl === 100) {
            return (
              //<path id="PL_x5F_100" style={{ fill: "#47B39D" }} d="M-738,550c-11,0-20.3,9.1-20.3,20.1S-749,590-738,590s19.7-8.9,19.7-19.9S-727,550-738,550z" />
              <path id="PL_x5F_100_3_" className="st35" d="M939.9,219.1c-11,0-20.3,9.1-20.3,20.1s9.3,19.9,20.3,19.9s19.7-8.9,19.7-19.9S950.9,219.1,939.9,219.1z"/>
            );
          }
  }  

  render() {
    return (
      <g id="assiette3">
        <g id="CONTOURS_3_">
          <g id="contours_x5F_assiette_x5F_pple_3_">            
              <linearGradient id="XMLID_205_" gradientUnits="userSpaceOnUse" x1="871.3" y1="991.1" x2="871.3" y2="873.1" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="0.391" style={{stopColor:"#FAFAFA"}}/>
              <stop  offset="0.8214" style={{stopColor:"#EDEDED"}}/>
              <stop  offset="1" style={{stopColor:"#E6E6E6"}}/>
            </linearGradient>
            <path id="XMLID_341_" className="st54" d="M871.3,331.1c-32.5,0-59-26.5-59-59s26.5-59,59-59s59,26.5,59,59S903.9,331.1,871.3,331.1z"/>            
              <linearGradient id="XMLID_207_" gradientUnits="userSpaceOnUse" x1="871.3" y1="874.6" x2="871.3" y2="989.6" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <circle id="XMLID_340_" className="st55" cx="871.3" cy="272.1" r="57.5"/>            
              <linearGradient id="XMLID_208_" gradientUnits="userSpaceOnUse" x1="871.3" y1="977.1" x2="871.3" y2="887.1" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <path id="XMLID_339_" className="st56" d="M871.3,317.1c-24.8,0-45-20.2-45-45s20.2-45,45-45s45,20.2,45,45S896.1,317.1,871.3,317.1z"/>
          </g>
          <g id="contours_x5F_assiette_x5F_PL_3_">            
              <linearGradient id="XMLID_213_" gradientUnits="userSpaceOnUse" x1="939.3" y1="990.0863" x2="939.3" y2="940.1468" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="0.391" style={{stopColor:"#FAFAFA"}}/>
              <stop  offset="0.8214" style={{stopColor:"#EDEDED"}}/>
              <stop  offset="1" style={{stopColor:"#E6E6E6"}}/>
            </linearGradient>
            <path id="XMLID_338_" className="st57" d="M939.3,264c-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S953.1,264,939.3,264z"/>            
              <linearGradient id="XMLID_214_" gradientUnits="userSpaceOnUse" x1="939.3" y1="940.8" x2="939.3" y2="989.4698" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="0" style={{stopColor:"#FFFFFF"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <circle id="XMLID_337_" className="st58" cx="939.3" cy="239.1" r="24.3"/>            
              <linearGradient id="XMLID_229_" gradientUnits="userSpaceOnUse" x1="939.2" y1="987.9999" x2="939.2" y2="942.2999" gradientTransform="matrix(1 0 0 -1 0 1204.2)">
              <stop  offset="4.464286e-03" style={{stopColor:"#E6E6E6"}}/>
              <stop  offset="1" style={{stopColor:"#F4F4F4"}}/>
            </linearGradient>
            <path id="XMLID_336_" className="st59" d="M939.2,261.9c-12.6,0-22.8-10.2-22.8-22.8c0-12.6,10.2-22.9,22.8-22.9S962,226.4,962,239C962,251.6,951.8,261.9,939.2,261.9z"/>
          </g>
        </g>
        <g id="DESSERT_3_">
          <path id="dessert_x5F_0_3_" className="st27" d="M831.7,272.7c0,21,17.5,39.4,39.5,39.4v-39.4H831.7z"/>
          {this.renderDes()}
        </g>
        <g id="ACCOMPAGNEMENT_3_">
          <path id="accompagnement_x5F_0_3_" className="st30" d="M871.2,312.1c22,0,40.5-18.4,40.5-39.4h-40.5V312.1z"/>
          {this.renderAcc()}  
        </g>
        <g id="PL_3_">
          <path id="PL_x5F_0_3_" className="st33" d="M939.6,219.1c-11.2,0-20.2,9.2-20.2,20s9,20,20.2,20c10.8,0,19.8-9.2,19.8-20S950.4,219.1,939.6,219.1z"/>
        {this.renderPl()}
        </g>
        <g id="VPO_3_">
          <path id="VPO_x5F_0_3_" className="st36" d="M871.2,232.1v40.5h40.5C911.7,250.7,893.2,232.1,871.2,232.1z"/>
          {this.renderVpo()}
        </g>
        <g id="ENTREE_3_">
          <path id="entree_x5F_0_3_" className="st39" d="M831.7,272.7h39.5v-40.6C849.2,232.1,831.7,250.7,831.7,272.7z"/>
          {this.renderEnt()}
        </g>
      </g>      
    )
  }
  
};

export default Plates4Renderer;          