import React from 'react';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var mealSelector = [
  {"id":"0", "text" : "Petit Déjeuner"},
  {"id":"1", "text" : "Déjeuner"},
  {"id":"2", "text" : "Dîner"},
  {"id":"3", "text" : "Collation"}
];

var placeSelector = [
  {"id":"0", "text" : "Travail"},
  {"id":"1", "text" : "Maison"},
  {"id":"2", "text" : "Restaurant"}
];

var peopleSelector = [
  {"id":"0", "text" : "Seul"},
  {"id":"1", "text" : "Collègues"},
  {"id":"2", "text" : "Famille"},
  {"id":"3", "text" : "Autres"}
];

const MealSelectorComponent = React.createClass({
  
  getInitialState() {
    
    return { 
        selectorCount: 1,
        mealValue: 0,
        placeValue: 0,
        peopleValue: 0,
        duration: 0
      };
  },

  componentDidMount() {
      //this.props.item.text =  this.props.item.text.replace("%newline%", "<br />");
      //
  },

  _computeDuration() {
  },


  _mealChangeHandler(e, index, value) {
      
      this.setState({mealValue: value });    
      this.props.onChange();   
  },  

  _placeChangeHandler(e, index, value) {
      
      this.setState({placeValue: value }); 
      this.props.onChange();            
  },  

  _peopleChangeHandler (e, index, value) {
      
      this.setState({peopleValue: value });  
      this.props.onChange(this);     
  },  

  componentWillReceiveProps(nextProps) {

  },  

  render() {
      return (    
            <div id="meal-picker-container">          
              <div className="row">
                <SelectField value={this.state.mealValue} onChange={this._mealChangeHandler}>
                  {mealSelector.map( function(item) {
                    return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
                  })}
                </SelectField>                                               
                <TimePicker
                  format="24hr"
                  hintText="Debut"
                  ref={"start_" + this.state.selectorCount}
                  hintText="24hr Format" />
                <TimePicker
                  format="24hr"
                  hintText="Fin"
                  ref={"end_" + this.state.selectorCount}
                  hintText="24hr Format" />
                <TimePicker
                  format="24hr"
                  hintText="Durée"
                  ref={"duration_" + this.state.selectorCount} />
                <SelectField value={this.state.placeValue} onChange={this._placeChangeHandler}>
                  {placeSelector.map( function(item) {
                    return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
                  })}
                </SelectField>
                <SelectField value={this.state.peopleValue} onChange={this._peopleChangeHandler}>
                  {peopleSelector.map( function(item) {
                    return <MenuItem value={item.id} label={item.text} key={item.id} primaryText={item.text}/>
                  })}
                </SelectField>        
              </div>  
            </div>  
      );
  }
});



export default MealSelectorComponent;