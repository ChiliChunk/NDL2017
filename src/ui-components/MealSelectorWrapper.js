import React from 'react';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import MealSelectorComponent from './MealSelectorComponent';

var MealSelectorWrapper = React.createClass({

  getInitialState() {
    
    return ({
      items: []
    })
  },


  componentWillMount() {
  },

  componentDidMount() {
  },

  componentWillReceiveProps(nextProps) {
    
    //this.setState({ items: nextProps.items });
  },

  _removeItem(itemToRemove) {
    
    var {items} = this.state
    var filteredItems = items.filter( (item) => {
      return itemToRemove.id !== item.id;
    });
    this.setState({ items: filteredItems, refCounter: filteredItems.length })
  },

  _addItem(e) {

    
    var {items} = this.state

    var newItem = {}
    newItem.id = this.state.items.length + 1;
    newItem.name = this.state.value
    items.push(newItem)
    
        
    // update the state
    this.setState({ items })
  },

  onChange(e) {
    
    
    this.state.items.forEach( (item) => {
        
    })
  },

  render() {
    return (
      <div id="meal-item-container">        
        <FloatingActionButton   mini={true} onClick={this._addItem}>
          <ContentAdd />
        </FloatingActionButton>
        <div className="meal-item-list">
          {(this.state.items || []).map(function (item, i) {
            return (
              <div className="row" key={"mealSelector-" + i}>
                  <MealSelectorComponent onChange={this.onChange} ref={"item-" + i}/>
                  <FloatingActionButton mini={true} secondary={true} onClick={this._removeItem.bind(this, item)}>
                    <ContentRemove />
                  </FloatingActionButton>
              </div>
            );
          }, this) }
        </div>
      </div>
    );
  }
});



export default MealSelectorWrapper;