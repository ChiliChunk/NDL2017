import React from 'react';
import Man from './PatientInformation/svg/Man';
import DataVisualization from './PatientInformation/DataVisualization';
import consultationController from '../controllers/ConsultationController';
import Calculator from './PatientInformation/calculator';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const LOG = "[PatientInformationComponent::"

// BUG # filtrer info de départqs 
// BUG #modifie la valeur du dessus de tps en tps 
// BUG #la taille du composant n'est pas adaptive 
//  

var itemToDisplayList = [
    "nom",
    "prenom",
    "raison_consultation", 
    "profession",
    "taille",
    "poids",
    "date_naissance",
    "age",
    "imc",
    "grossesse",
    "date_acouchement",
    "pathologie_nom",
    "antecedents_nom",
    "traitements",
    "tour_taille_valeur",
    "albumine_taux",
    "crp_taux",
    "glycemie_jeun_taux",
    "glycemie_post_prandiale_quantite",
    "cholesterol_quantite",
    "cholesterol_ldl_quantite",
    "cholesterol_hdl_quantite",
    "triglycerides_quantite",
    "situation_mastication",
    "situation_deglutition",  
    "situation_digestion",
    "nutrition_enterale",
    "poids_forme",
    "situation_familiale",
    "frequence_repas_restaurant",
    "liste_aliments_interdits",
    "nombre_repas",
    "ingestats"    
];


var itemToDisplayListEhpad = [
    "nom",
    "prenom",
    "age",
    "imc",
    "pathologie_nom",
    "raison_consultation", 
    "situation_mastication",
    "situation_deglutition"
];



var HealthItem = React.createClass({
  render: function() {
      return (
          <div className="health-item">
              <span style={{color: this.props.color}}><strong>{this.props.name} : </strong>{this.props.value}</span>
          </div>
      );
  }
});


var PatientInformationComponent = React.createClass({

  getDefaultProps: function() {
      var self = this;      
  } ,

  getInitialState: function () {    
    return ({ 
      items: [], 
      patient: this.props.patient || {},
    });
  },


  componentWillMount: function() {
      // consultationController.initVariable();
      this.setState ({ 
          items: [] ,
          patient: this.props.patient || {},
      });
  },

  componentDidMount: function() {          
      
      this.setState ({ 
          items: this.props.items || [],
          patient: this.props.patient || {},
      });
      
  },

  componentWillReceiveProps: function(nextProps) {
    
    this.setState({items:nextProps.items, patient: nextProps.patient});
  },  

  getItems: function() {
      var {items} = this.state;     
      return items;
  },

  _rawValueToHumanReadableValue: function(item, value) {
        
        switch(item.fieldType) {
            case 'boolean': 
              // convert boolean value to string value
                return consultationController.booleanToString(value);
              break;

            // boolean is the only one wich need casting for now
            default:
                return value;
              break;
        }
  },
  
  addItem: function (property, value, item) {
      
      
      var {items} = this.state;     
      var found  = false;
      var self = this;
      var red, green, color;

      
      
      consultationController.updateBoundaries(item);
      
      // Apply filters to incoming items
      if( itemToDisplayList.indexOf(property) === -1 )   {
          
          return;
      } 
      
    
      // refactor me maybe :p 
      Calculator.forEach(function(calculation) {
          if( calculation.name === property ) {
              

              red = consultationController.evaluateAndDisplay(calculation.red, item);              
              if(!red) {
                
                green = consultationController.evaluateAndDisplay(calculation.green, item);
              } 

              //ret =  consultationController.evaluateAndDisplay(calculation.red, item) 
              //
          }
      });
      // set color
      color = red ? "#F44336" : green ? "#4CAF50" : "#000000";
            
      
      // is already displayed - just update value 
      // #BUG: update 2 value at times 
      
      
      
      items.forEach( function( itemDisplayed ) {
          if(itemDisplayed.name.match(property) ) {
              // item already displayed just update the value 
              itemDisplayed.value = value;  
              
              found = true;
          }
      });
      
      
      
      
      
      // Not displayed, create the structure and add the item to the array
      if(!found) {
          var healthItem = {}
          healthItem.name = property;
          healthItem.value = value;          
          healthItem.color = color;
          items.push(healthItem);
          
      }      

      // update the state
      this.setState({items}) 
  },

  clickHandler(e) {
      this.refs.plates1.fillTest();
      this.refs.plates2.fillTest();
  },

  render: function() {     
        return (
          <DataVisualization patient={this.state.patient}/>
        );
    }    
});


export default PatientInformationComponent;

