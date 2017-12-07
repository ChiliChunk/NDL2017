import React from 'react';
import FemaleRenderer from './FemaleRenderer';
import MaleRenderer from './MaleRenderer';
import ImcRenderer from './ImcRenderer';
import WeightRenderer from './WeightRenderer';
import ActivityRenderer from './ActivityRenderer';
import MnaRenderer from './MnaRenderer';
import Plates1Renderer from './Plates1Renderer';
import Plates2Renderer from './Plates2Renderer';
import Plates3Renderer from './Plates3Renderer';
import Plates4Renderer from './Plates4Renderer';
import LegRenderer from './LegRenderer';
import WristRenderer from './WristRenderer';

class DataVisualization extends React.Component {

  canProceed() {
    /*
    this._ehpad_id = this.props.location.query.ehpad_id;
    this._patient_id = this.props.location.query.patient_id;
    if (this._ehpad_id === undefined || this._patient_id == undefined) {
      this.context.router.push('/ehpad/patient');
      return false;
    }
    else {
      this.props.patientActions.fetchPatientById(this._patient_id)
        .then((response) => {
          this.props.patientActions.getPatientFileData(this._patient_id)
        })
        .catch((error) => {
          
        })
    }
    */
    return true;
  }

  componentWillMount() {
    this.canProceed();
  }  

  render() {
    
    let man = (this.props.patient.sexe == 0) || (this.props.patient.sexe == "Homme");
    var demoPlate = {
        ent: 0,
        acc: 25,
        vpo: 50,
        des: 75,
        pl: 100,
    }    
    var emptyPlate = {
        ent: 0,
        acc: 0,
        vpo: 0,
        des: 0,
        pl: 0,
    }    
    /**
     * this.props.patient.mna || [0]
     */
    let CM = 'ND';
    let CB = 'ND';
    let mnaHistory = new Array();
    if(this.props.patient.hasOwnProperty('mna')) {
      
      this.props.patient.mna.forEach( (mna) => {
        mnaHistory.push(mna.score);
      });

      let index = this.props.patient.mna.length-1;

      CM = this.props.patient.mna[index].hasOwnProperty('CM') ? this.props.patient.mna[index].CM : 'ND';
      CB = this.props.patient.mna[index].hasOwnProperty('CB') ? this.props.patient.mna[index].CB : 'ND';      

    }
    return (
      <div id="datavisualization">
        <svg id="dataviz" x="0px" y="0px" viewBox="281 -285 711.3 628" style={{ enableBackground: "new 281 -285 711.3 628" }}>
          {man ? <MaleRenderer value={this.props.patient.taille}/> : <FemaleRenderer value={this.props.patient.taille || 0}/> }
          <WeightRenderer value={this.props.patient.poids_derniere_mesure || this.props.patient.poids || 0} />
          <ImcRenderer value={this.props.patient.imc || 0} />
          <ActivityRenderer value={this.props.patient.activite_physique || 0} />
          <MnaRenderer value={mnaHistory || 'ND'} />
          <Plates1Renderer plate={demoPlate} />
          <Plates2Renderer plate={this.props.patient.consomation_alimentaire_j1 || emptyPlate } />
          <Plates3Renderer plate={this.props.patient.consomation_alimentaire_j2 || emptyPlate } />
          <Plates4Renderer plate={this.props.patient.consomation_alimentaire_j3 || emptyPlate } />
          <WristRenderer value={CB || 'N/D'}/>
          <LegRenderer value={CM || 'N/D'}/>                                  
        </svg>
      </div>
    );
  }

};

export default DataVisualization;
