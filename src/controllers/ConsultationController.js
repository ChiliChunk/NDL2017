import React from 'react';
// import CalculationVariable from './CalculationVariable';
// import * as SurveyActions from '../actions/survey';
import IntroComponent from '../ui-components/IntroComponent';
import TextInputComponent from '../ui-components/TextInputComponent';
import BooleanComponent from '../ui-components/BooleanComponent';
import DatePickerInputComponent from '../ui-components/DatePickerInputComponent';
import ChoicesInputComponent from '../ui-components/ChoicesInputComponent';
import ChoicesInputSelector from '../ui-components/ChoicesInputSelector';
import TimePickerComponent from '../ui-components/TimePickerComponent';
import LinkedListInputComponent from '../ui-components/LinkedListInputComponent';
import TextAndUnitInputComponent from '../ui-components/TextAndUnitInputComponent';
import TextWithUnitDisplayInputComponent from '../ui-components/TextWithUnitDisplayInputComponent';
import CheckListInputComponent from '../ui-components/CheckListInputComponent';
import SliderInputComponent from '../ui-components/SliderInputComponent';
import MealSelectorComponent from '../ui-components/MealSelectorComponent';
import CureSelectorComponent from '../ui-components/CureSelectorComponent';
import CookingInputComponent from '../ui-components/CookingInputComponent';
import EatenMealSelectorComponent from '../ui-components/EatenMealSelectorComponent';
import ChoiceOrTextIfNone from '../ui-components/ChoiceOrTextIfNone';
import RadioComponent from '../ui-components/RadioComponent';
import RadioOrTextIfNone from '../ui-components/RadioOrTextIfNone';
import ChecklistOrTextIfNone from '../ui-components/ChecklistOrTextIfNone';
import LinkedListInputSelector from '../ui-components/LinkedListInputSelector';
import AutoCompleteComponent from '../ui-components/AutoCompleteComponent';
import TimedEatenMealSelectorComponent from '../ui-components/TimedEatenMealSelectorComponent';
import CollationSelector from '../ui-components/CollationSelector';
import DailyDietLogger from '../ui-components/DailyDietLogger';
import {
  Col,
  Row,
  ControlLabel
} from 'react-bootstrap';
//
// var _dispatch = {};
//
// export function attachDispatcher(dispatch) {
//   _dispatch = dispatch;
//
// }
//
// // this store the value of the input, and set the next step : re-input (invalid)
// // or load next (valid)
// export function validate(item, validCallback, invalidCallback) {
//
//
//
//   switch (item.field_type) {
//
//     case 'none':
//       return ({success: true});
//
//     case 'autocomplete':
//     case 'text':
//       // check length and requirement - check database string size
//       var value = item.value;
//       if (value === undefined || value.trim().length < 1 || value.trim().length < 1) {
//         item.errorMessage = `${item.name} est un champs requis`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//
//         return ({success: true});
//       }
//
//     case 'cooking':
//
//
//       return ({success: true});
//
//     case 'email':
//       // @TODO: use regexp to check validation
//       if (item.value === undefined) {
//         item.errorMessage = `${item.name} est un champs requis`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//         var mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (mailRegExp.test(item.value)) {
//           return ({success: true})
//         }
//         else {
//
//           return ({
//             success: false,
//             message: item.value + 'n\'est pas un email valide'
//           });
//         }
//         //return ({ success: true })
//       }
//
//     case 'mealTableArray':
//
//
//       if (item.hasOwnProperty("items")) {
//         item
//           .items
//           .map(function (item) {
//             if (!item.hasOwnProperty('value')) {
//               return ({success: false});
//             }
//           })
//       } else {
//
//         return ({success: false});
//       }
//       return ({success: true});
//
//     case 'date':
//       var value = item.value;
//       if (!item.noValidation && value === undefined) {
//         item.errorMessage = `${item.name} est un champs requis`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//
//         return ({success: true});
//       }
//
//     case 'choiceOrOther':
//       var value = item.value;
//       var compositeValue = {};
//       compositeValue.value = item.value;
//       compositeValue.id = item.numericValue;
//       //item.value = compositeValue;
//
//       return ({success: true});
//
//       // no specific validation, value was already in an array, just store it in the
//       // patient object
//     case 'choice':
//     case 'choices':
//       var value = item.value;
//       var compositeValue = {};
//       compositeValue.value = item.value;
//       compositeValue.id = item.numericValue;
//
//
//       return ({success: true});
//
//     case 'number':
//       var boundaries = item
//         .contrainte
//         .split(',');
//       var min = boundaries[0];
//       var max = boundaries[1];
//
//       if (parseInt(item.value) > parseInt(max)) {
//         item.errorMessage = `Le chiffre doit etre inferieur a ${max}`;
//         return ({success: false, message: item.errorMessage});
//       } else if (parseInt(min) > parseInt(item.value)) {
//         item.errorMessage = `Le chiffre doit etre superieur a ${min}`;
//         return ({success: false, message: item.errorMessage});
//       } else if (isNaN(item.value)) {
//         item.errorMessage = `${item.value} n\'est pas un nombre valide`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//
//         return ({success: true});
//       }
//
//     case 'boolean':
//       if (item.value === undefined) {
//         item.errorMessage = `${item.name} est un champs requis`;
//         return ({success: false, message: item.errorMessage});
//       }
//
//       var compositeValue = {};
//       compositeValue.value = item.value;
//       compositeValue.id = item.numericValue;
//
//       return ({success: true});
//
//     case 'dailyDietLogger':
//     case 'mealTime':
//     case 'cureTable':
//     case 'dietTable':
//     case 'collationTable':
//     case 'choiceAddRemove':
//       var value = item.value;
//       if (!item.noValidation && value === undefined) {
//         item.errorMessage = `${item.name} est un champs requis`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//         var compositeValue = {};
//         compositeValue.value = item.value;
//         compositeValue.id = item.numericValue;
//
//         return ({success: true});
//       }
//
//     case 'newMealTable':
//     case 'mealTable':
//
//       var value = item.value;
//       if (value === undefined) {
//         item.errorMessage = `${item.name} est un champs requis`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//
//         return ({success: true});
//       }
//
//     case 'multiplebox':
//       return ({success: true});
//
//     case 'dynamicMultiplebox':
//       return ({success: true});
//
//     case 'checklist':
//     case 'checkList':
//
//       return ({success: true});
//
//     case 'slider':
//       return ({success: true});
//
//     case 'textAndUnit':
//
//
//       var boundaries = item
//         .contrainte
//         .split(',');
//       var min = boundaries[0];
//       var max = boundaries[1];
//
//       if (parseInt(item.value) > parseInt(max)) {
//         item.errorMessage = `Le chiffre doit etre inferieur a ${max}`;
//         return ({success: false, message: item.errorMessage});
//       } else if (parseInt(min) > parseInt(item.value)) {
//         item.errorMessage = `Le chiffre doit etre superieur a ${min}`;
//         return ({success: false, message: item.errorMessage});
//       } else if (isNaN(item.value)) {
//         item.errorMessage = `${item.value} n\'est pas un nombre valide`;
//         return ({success: false, message: item.errorMessage});
//       } else {
//
//         return ({success: true});
//       }
//
//     case 'custom':
//
//       return ({success: true});
//
//       // save the value and return error to user
//     default:
//       item.errorMessage = `Pas de validation pour le type : ${item.field_type}`;
//
//       return ({success: false, message: item.errorMessage});
//
//   }
// };
//
// export function updateStoreValue(item) {
//
//   this._dispatch(SurveyActions.storeValue(item, item.value));
// }

export function convertToReactComponent(item , i) {
  //

  switch (item.field_type) {
    case "separator":
      return(
        <div>
          <h4 style ={{margin : "auto"}} > Fin du questionnaire <b>{item.form_type}</b> </h4>
          <hr/>
        </div>
      )

    case 'none':
      return (<IntroComponent text={item.text} key={item.name + '-' + Math.random()} item={item} ref = {i}/>);

    case 'email':
    case 'text':
    case 'number':
      // most are alreay in database
      return (<TextInputComponent
        value={item.value}
        key={item.name + '-' + Math.random()}
        item={item}
        ref = {i}/>);

    case 'date':
      // item.value = 1/1/1 - BUG #1
      return (<DatePickerInputComponent
        value={item.value}
        key={item.name + '-' + Math.random()}
        item={item}
        ref = {i}/>);

    case 'choices':
      item.value = 0;

      var array = JSON.parse(item.data_provider);
      return (<ChoicesInputComponent
        value={item.value}
        key={item.name + '-' + Math.random()}
        item={item}
        menuItems={array}
        ref = {i}/>);

    case 'multiplebox':
      item.value = 0;
      var object = JSON.parse(item.data_provider);
      var markup = (<LinkedListInputComponent
        value={item.value}
        item={item}
        key={item.name + '-' + Math.random()}
        primaryMenuItems={object.primary}
        secondaryMenuItems={object.secondary}
        ref = {i}/>);
      return markup;

    case 'choiceOrOther':
      item.value = 0;

      var array = JSON.parse(item.data_provider);
      var markup = (<ChoiceOrTextIfNone
        value={item.value}
        item={item}
        key={item.name + '-' + Math.random()}
        menuItems={array}
        ref = {i}/>);
      return markup;

    case 'choiceAddRemove':
      var empty = new Array();
      var array = JSON.parse(item.data_provider);
      var markup = (<ChoicesInputSelector
        value={item.value}
        item={item}
        key={item.name + '-' + Math.random()}
        items={empty}
        menuItems={array}
        ref = {i}/>);
      return markup;

    case 'dynamicMultiplebox':
      item.value = 0;
      var object = JSON.parse(item.data_provider);
      var markup = (<LinkedListInputSelector
        value={item.value}
        item={item}
        key={item.name + '-' + Math.random()}
        primaryMenuItems={object.primary}
        secondaryMenuItems={object.secondary}
        ref = {i}/>);
      return markup;

    case 'newMealTable':
      return (<EatenMealSelectorComponent item={item} key={item.name + '-' + Math.random()} ref = {i}/>);

    case 'mealTime':
      var markup = (<TimedEatenMealSelectorComponent key={item.name + '-' + Math.random()} item={item} ref = {i}/>);
      return markup;

    case 'checklist':
    case 'checkList':
      item.value = [];
      var data = JSON.parse(item.data_provider);
      var markup = (<CheckListInputComponent
        item={item}
        key={item.name + '-' + Math.random()}
        items={data}
        ref = {i}/>);
      return markup;

    case 'cooking':
      var markup = (<CookingInputComponent item={item} key={item.name + '-' + Math.random()} ref = {i}/>);
      return markup;

    case 'collation':
      var empty = new Array();
      var markup = (<CollationSelector item={item} key={item.name + '-' + Math.random()} items={empty} ref = {i}/>);
      return markup;

    case 'textAndUnit':
      item.value = 1;
      item.unit = 0;
      var array = JSON.parse(item.data_provider);
      var markup = (<TextAndUnitInputComponent
        value={item.value}
        item={item}
        key={item.name + '-' + Math.random()}
        menuItems={array}
        ref = {i}/>);
      return markup;

    case 'slider':
      var data = JSON.parse(item.data_provider);
      var markup = (<SliderInputComponent
        item={item}
        modifier={data.modifier}
        key={item.name + '-' + Math.random()}
        step={data.step}
        ref = {i}/>);
      return markup;

    case 'autocomplete':
      var cspArray = item
        .data_provider
        .split(';');


      var markup = (<AutoCompleteComponent
        dataSource={cspArray}
        item={item}
        key={item.name + '-' + Math.random()}
        ref = {i}/>);
      return markup;

    case 'collationTable':
      var empty = new Array();
      var markup = (<CollationSelector item={item} key={item.name + '-' + Math.random()} items={empty} ref = {i}/>);
      return markup;

    case 'boolean':
      var answers = [
        {
          "id": "1",
          "text": "Oui"
        }, {
          "id": "0",
          "text": "Non"
        }
      ];
      var markup = (<BooleanComponent
        item={item}
        key={item.name + '-' + Math.random()}
        radioItems={answers}
        ref = {i}/>
      );

      return markup;

    case 'mealTable':
      var empty = new Array();
      var markup = (<EatenMealSelectorComponent
        item={item}
        key={item.name + '-' + Math.random()}
        items={empty}
        ref = {i}/>);
      return markup;

    case 'mealTableArray':

      var markup = (
        <div>
          <Row>
            <Col md={6}>
              <ControlLabel>{item.text}</ControlLabel>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <EatenMealSelectorComponent
                item={item.items[0]}
                dayNumber={"1"}
                key={item.items[0].name + '-' + item.items[0].id}/>
            </Col>
            <Col md={4}>
              <EatenMealSelectorComponent
                item={item.items[1]}
                dayNumber={"2"}
                key={item.items[1].name + '-' + item.items[1].id}/>
            </Col>
            <Col md={4}>
              <EatenMealSelectorComponent
                item={item.items[2]}
                dayNumber={"3"}
                key={item.items[2].name + '-' + item.items[2].id}/>
            </Col>
          </Row>
        </div>
      );
      return markup;
      break;

    case 'cureTable':
      var empty = new Array();
      return (
        <CureSelectorComponent
          selectorName={"Liste des traitements"}
          item={item}
          key={item.name + '-' + Math.random()}
          items={empty}
          ref = {i}/>
        );

    case 'dailyDietLogger':
      return (
        <DailyDietLogger item={item} key={item.name + '-' + Math.random() } ref = {i}/>
      );

    case 'dietTable':
      var empty = new Array();
      return (
        <CureSelectorComponent
          selectorName={"Régime appliqué"}
          item={item}
          key={item.name + '-' + Math.random()}
          items={empty}
          ref = {i}/>
      );

        case 'radio':
          var array = JSON.parse(item.data_provider);
          var markup = (
          <RadioComponent
          item={item}
          radioItems={array}
          key={`${item.name}_id`}
          ref = {i}/>
          );
          return markup;
        break

        case 'time':
          return (
          <TimePickerComponent
          item={item}
          value={item.value || undefined}
          key={`${item.name}_id`}
          ref = {i}/>
          )
        break;

        case 'checklistOrOther':

        var array = JSON.parse(item.data_provider);
        return (
          <ChecklistOrTextIfNone
            value={item.value}
            item={item}
            key={`${item.name}_id`}
            items={array}
            ref = {i}/>
        );

      case 'radioOrOther':
        var array = JSON.parse(item.data_provider);
        return (
          <RadioOrTextIfNone
            value={item.value}
            item={item}
            key={`${item.name}_id`}
            radioItems={array}
            ref = {i} />
        );


      case 'textUnitDisplay':
        var markup = (
          <TextWithUnitDisplayInputComponent
            item={item}
            key={`${item.name}_id`}
            unit={'g/L'}
            ref = {i} />
        );
        return markup;


    case 'custom':
      // return (<MealSelectorWrapper key={item.name + '-' + Math.random()} item={item}/>);

    default:
      return (<IntroComponent text={"Erreur de rendering item :" + item.field_type + "text: "} ref = {i}/>);
      //;
  }
}

// export function fixProperties(items) {
//   items.forEach((item) => {
//     if (!item.hasOwnProperty('is_hidden')) {
//       item.is_hidden = (item.depends_on !== "none")
//         ? true
//         : false;
//     }
//   });
//   return items;
// }

/**
 * purpose: get the next visible item and return it
 *
 * brief:
 *
 */
 export function getNextItem(state) {



  if (state.backCounter > 0) {
    /*

        state.currentItemIndex = state.indexes.pop();
        state.backCounter--;

        */
  } else {
    state.currentItemIndex++;
  }

  state.currentItem = state.items[state.currentItemIndex];


  // check if there's more item
  if (state.currentItemIndex < state.lastItemIndex) {

    // if hidden by design,
    if (state.currentItem.is_hidden === true) {

      // need more advanced conditions


      var showCondition = this.evaluateShowConditions(state, state.currentItem);


      if (!showCondition) {

        this.getNextItem(state);
      } else {

      }
    } else {

    }
    var text = this.formatPatientText(state, state.currentItem.text);
    state.currentItem.text = text;
  }
  /*
    else {
        // end of survey
        //alert('end of survey : no more items' );
        _dispatch(SurveyActions.finish());
    }
    */
};
//
// export function valueInterpreter(state, props, operand, value, unit) {
//
//   var self = this;
//
//   switch (operand) {
//       /** those are done on a non boolean anwser */
//     case '==':
//     case 'eq':
//
//       if (state.patient[props] === state.variable[value]) {
//         return true;
//       } else
//         return false;
//
//     case '!=':
//     case 'neq':
//
//       if (state.patient[props] !== state.variable[value]) {
//         return true;
//       } else
//         return false;
//
//     case '>':
//     case 'gt':
//
//       if (state.patient[props] >= state.variable[value]) {
//
//         return true;
//       } else {
//
//         return false;
//       }
//
//     case '<':
//     case 'lt':
//
//       if (state.patient[props] <= state.variable[value]) {
//
//         return true;
//       } else {
//
//         return false;
//       }
//
//     case 'is':
//     case 'has':
//     case 'isin':
//       // object has property
//       break;
//
//     default:
//
//       break;
//   }
// };
//
// export function getType(object) {
//   // get prototype
//   const valuePrototype = Object
//     .prototype
//     .toString
//     .call(object);
//
//
//   if (valuePrototype === '[object Undefined]') {
//     return 'undefined';
//   } else if (valuePrototype === '[object String]') {
//     return 'string';
//   } else if (valuePrototype === '[object Array]') {
//     return 'array';
//   } else if (valuePrototype === '[object Date]') {
//     return 'date';
//   } else if (valuePrototype === '[object Number]') {
//     return 'date';
//   } else if (valuePrototype === '[object Boolean]') {
//     return 'boolean';
//   } else if (valuePrototype === '[object Object]') {
//     if (object.hasOwnProperty('ent')) {
//       return 'meal';
//     }
//     return 'object';
//   }
// }
//
// export function viewInterpreter(state, props, operand, value, unit) {
//
//   var self = this;
//
//       '---------')
//
//
//   // property not present in data structure (questions skipped most likely so
//   // return false) condition can NOT be met
//   if (!state.patient.hasOwnProperty(props)) {
//
//     return false;
//   }
//
//   const _valueType1 = state.patient[props];
//   let valueType1 = typeof _valueType1 !== "string" ? _valueType1 :
//     (self.stringToBoolean(_valueType1) ? 0 : 1);
//   const _valueType2 = value;
//   let valueType2 = typeof _valueType2 !== "string" ? _valueType2 :
//     (self.stringToBoolean(_valueType2) ? 0 : 1);
//   let returnValue = undefined;
//
//   switch (operand) {
//
//     case '==':
//     case 'eq':
//
//
//       returnValue = (valueType1 == valueType2);
//
//       return returnValue;
//
//     case '!=':
//     case 'neq':
//
//
//       returnValue = (valueType1 == valueType2);
//
//       return returnValue;
//
//     case '>':
//     case 'gt':
//
//       if (state.patient[props] >= state.variable[value]) {
//
//         return true;
//       } else {
//
//         return false;
//       }
//       break;
//
//     case '<':
//     case 'lt':
//
//       if (state.patient[props] <= state.variable[value]) {
//
//         return true;
//       } else {
//
//         return false;
//       }
//       break;
//
//     case 'isin':
//     case 'isid':
//     case 'has':
//       var value = Number(state.patient[props].value);
//       var showDateGainLoss = ( value == 1)
//
//
//       var compare = (state.patient[props].numericValue == Number(state.patient[props].id));
//
//       return compare;
//
//     default:
//
//       break;
//   }
// };
//
// /**
//  * - evaluate each condition return true of false
// **/
// export function evaluateAndDisplay(state, raw, item) {
//
//   var self = this;
//   var conditions = raw.split(',');
//   var conditionMatch = false; // until true
//
//   // for each condition
//   for (var i = 0; i < conditions.length; i++) {
//
//
//
//     // parsing conditions are "props operand value"
//     var temp = conditions[i].split(' ');
//     var props = temp[0];
//     var op = temp[1];
//     var value = temp[2];
//
//
//
//
//     // call the interpreter
//     conditionMatch = self.valueInterpreter(state, props, op, value, item.unit);
//
//     if (conditionMatch) {
//       break;
//     }
//   };
//
//   return conditionMatch;
// };
//
// /**
//  * - evaluate each condition return true of false
//  **/
export function evaluateShowConditions(state, item) {
  var self = this;


  var conditions = item
    .depends_on
    .split(',');
  var conditionMatch = false; // until true
  var needAllTrue = false;
  var willShowUp = false; // until true
  if (item.contrainte.match('AND')) {
    needAllTrue = true
  };
  // if needed by needAllTrue
  var booleanArray = new Array();

  // for each condition
  for (var i = 0; i < conditions.length; i++) {


    // call the condition checker
    conditionMatch = self.checkShowCondition(state, item);

    if (conditionMatch && !needAllTrue) {

      willShowUp = true;
      break;
    } else {
      booleanArray.push(conditionMatch);
    }
  };
  // if needAllTrue check if array contains any false then return accordingly

  if (needAllTrue) {
    willShowUp = true; // until false
    booleanArray.forEach(function (value) {
      if (!value)
        willShowUp = false;
      }
    )
  }

  return conditionMatch;
};
//
// /**
//  * Use mixins / prototype
// */
// export function checkShowCondition(state, item) {
//
//   var self = this;
//   var conditions = item
//     .depends_on
//     .split(',');
//   var conditionMatch = false; // until true
//
//
//       ': ' + conditions.length);
//
//
//   switch (item.depends_on) {
//     case 'isFemale':
//       var isFemale = state
//         .patient["sexe"]
//         .toLowerCase()
//         .match('femme')
//         ? true
//         : false;
//
//       return isFemale;
//
//     case 'isElder':
//       var age = state.patient["age"];
//
//       var show = (age > 65)
//         ? true
//         : false;
//
//       return show;
//
//       // all that's not defined as a unique function returning true / false (isElder,
//       // isFemale, hasPathologie(blabla)) Syntax : {property} {operand} {value}
//     default:
//       var temp = item
//         .depends_on
//         .split(' ');
//       var props = temp[0];
//       var op = temp[1];
//       var value = temp[2];
//
//
//       var ret = this.viewInterpreter(state, props, op, value);
//
//       return ret;
//
//   }
// };
//
// export function stringToBoolean(string) {
//   switch (string.toLowerCase().trim()) {
//     case "oui":
//     case "true":
//     case "yes":
//     case "1":
//       return true;
//
//     case "non":
//     case "false":
//     case "no":
//     case "0":
//     case null:
//       return false;
//     default:
//       return Boolean(string);
//   }
// };
//
export function formatPatientText(patient, input) {

  //

  var target = new Array();
  target.push("%patient_firstname%");
  target.push("%patient_lastname%");
  target.push("%patient_birthdate%");
  target.push("%patient_email%");
  target.push("%patient_telephone%");
  target.push("%patient_adresse%");
  target.push("%medecin_referent%");
  target.push("%medecin_address%");
  target.push('%patient.age%');
  target.push('%patient.poids%');
  target.push('%patient.raison_consultation%');

  var source = new Array();
  source[0] = patient.prenom;
  source[1] = patient.nom;
  source[2] = patient.date_naissance;
  source[3] = patient.email;
  source[4] = patient.telephone;
  source[5] = patient.address;
  source[6] = patient.medecin_referent;
  source[7] = patient.medecin_address;
  source[8] = patient.age;
  source[9] = patient.poids;
  source[10] = patient.raison_consultation;

  // lookup
  for (var i = 0; i < target.length; i++) {
    if (input.search(target[i]) > 0) {
      input = input.replace(target[i], source[i]);
    }
  }
  return input;
}
//
// export function getAge(dob) {
//   var date = new Date(dob);
//   var now = new Date();
//   var diff = new Date(now - date);
//   var age = Math.abs(diff.getUTCFullYear() - 1970);
//
//   return age;
// }
//
// export function processEvents(state, item) {
//
//
//
//   var self = this;
//
//   switch (item.event) {
//     case 'CalculateAge':
//       let age = getAge(state.patient["date_naissance"]);
//       state.patient["age"] = age;
//       break;
//
//     case 'presubmitEvent':
//
//       break;
//
//     case 'CalculateIMC':
//       if (state.patient["taille"] === undefined || state.patient["poids"] === undefined) {
//         //throw Error('taille or poids invalide, impossible de calculer l\'IMC'); // should NEVER happen
//         item.errorMessage = `taille or poids invalide, impossible de calculer l'IMC`;
//       }
//       var taille = state.patient["taille"] / 100;
//       var imc = Math.round(parseFloat(state.patient["poids"]) / (parseFloat(taille) * parseFloat(taille)));
//
//       const imcRaw = {
//         value: imc,
//         numericValue: 0,
//         id: 0
//       }
//       state.patient["imc"] = imc;
//       state.rawPatient["imc"] = imcRaw;
//       break;
//
//     case 'setWeightEvent':
//       state.patient.poids_derniere_mesure = state.patient.poids;
//       break;
//
//     case 'executeScript':
//       var ret = eval(item.evaluationScript);
//
//       break;
//
//     case 'none':
//       break;
//
//     default:
//
//       // callback(new Error('un handled events in event loop'));
//       break;
//   }
// };
