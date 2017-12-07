import React, { PropTypes } from "react";
import RaisedButton from "material-ui/RaisedButton";
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import * as Colors from "material-ui/styles/colors";
import Spinner from "react-spinkit";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Breadcrumb} from 'react-bootstrap';

class MyBreadcrumb extends React.Component {

  componentDidMount() {

  }

  componentWillReceiveProps() {

  }
  /*
   * location object example : { pathname : '/logout', text: "Se Deconnecter" }
   * @params: location.pathname 
   * @params: location.text 
   */
  render () {
   return (
      <Breadcrumb>
      {this.props.path.map( (location, index) => {
        return (
          <Breadcrumb.location href={"/#/" + location.pathname} key={index}>
            {location.text}
          </Breadcrumb.location>
        );
      })}
      </Breadcrumb>
    );
  }
}

export default MyBreadcrumb;