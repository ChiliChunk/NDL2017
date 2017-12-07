import React, {  Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from './Logo'
import { darkWhite, lightWhite} from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import FontAwesome from 'react-fontawesome';


class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueSingle: '',
    }
  }


  getStyles() {
    const styles = {
      navDrawer: {
        zIndex: 999,
      },
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: 0 + 1,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: "#FFFFFF",
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: lightWhite,
        maxWidth: 356,
      },
      browserstack: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '25px 15px 0',
        padding: 0,
        color: lightWhite,
        lineHeight: '25px',
        fontSize: 12,
      },
      browserstackLogo: {
        margin: '0 3px',
      },
      iconButton: {
        color: darkWhite,
      },
    };

    return styles;
  }
  render() {
    const styles = this.getStyles();
    const {
      history,
      location,
      children,
      open,
      openSideBar,
      closeSideBar
    } = this.props;
    let navDrawerOpen = open;

    const child =<div style = {{marginTop : "10"}}> <Logo height='40'/></div>
    return (
      <div id="navigation-container">
        <AppBar
          title={child}
          zDepth={1}
          style={styles.appBar}
          showMenuIconButton = {false}
        />
        <div style={{marginTop:'74px'}}>
        {this.props.children}
        </div>
      </div>
    );
  }

}


Navigation.contextTypes = {
  history: React.PropTypes.object,
  router: React.PropTypes.object,
  store: React.PropTypes.object,
  socket: React.PropTypes.func,
  muiTheme: React.PropTypes.object.isRequired,
};

export default Navigation;
