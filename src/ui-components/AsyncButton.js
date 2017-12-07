import React, { PropTypes } from "react";
import RaisedButton from "material-ui/RaisedButton";
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import * as Colors from "material-ui/styles/colors";
import Spinner from "react-spinkit";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AsyncButton extends React.Component {
  render () {
   return (
      <MuiThemeProvider>
        <RaisedButton label={<span style={{paddingLeft: 15}}>{this.props.label}</span>}   onClick={this.props.onClick}>
          <span style={{
            width: 15,
            height: 15,
            position: "absolute",
            left: 10,
            top: 10
          }}>
          {this.props.isLoading ? <Spinner spinnerName='circle' style={{width: 15, height: 15}}/> :
            <ActionExitToApp style={{width: 15, height: 15}}/> }
          </span>
        </RaisedButton>
      </MuiThemeProvider>
    );
  }
}

export default AsyncButton;
