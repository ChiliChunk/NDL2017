import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import DnR from '../lib/dnr/DnR';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import {WindowsTheme} from '../themes/default_theme';


class Window extends Component {

  constructor(props) {
    super(props)
    this.state = {
      minimize: false,
      aspectRatioLocked: false,
      ratio: 0,
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      id: null,
      title: null, 
      key: 'window_' + this.props.title,
      previousPosition: {},   
    }
		this.Windows = WindowsTheme({
			title: this.props.title,
			onClose: () => this.refs.window.minimize(),
			onMinimize: () => this.refs.window.minimize(),
			onMaximize: () => this.refs.window.maximize(),

		})
    this.onMove = this.onMove.bind(this);
    this.onResize = this.onResize.bind(this);
    //this.onTransform = this.onTransform.bind(this);    
	}  

  componentWillMount() {
    let ratio = this.props.width/this.props.height;
    
    
  }

  componentDidMount() {
    
  }
 
  
  componentWillReceiveProps(nextProps) {    
    
    this.forceUpdate();
  }

  onMove(data, e) {
    //alert("caller is " + arguments.callee.caller.toString());

    
    
    const newProps = {
      ...data,
      id: this.props.id,
      title: this.props.title,  
      ratio: this.state.ratio, 
      aspectRatioLocked: false,
    }
    this.props.windowActions.updateSizeAndPosition(newProps);
  }

  onResize(data, e) {   
    
    
    const newProps = {
      ...data,
      id: this.props.id,
      title: this.props.title,  
      ratio: this.state.ratio, 
      aspectRatioLocked: false,
    }
    this.props.windowActions.updateSizeAndPosition(newProps); 
  }

  toggleLockAspectRatio() {
    
    this.state.aspectRatioLocked ? this.props.windowActions.unlockAspectRatio() : this.props.windowActions.lockAspectRatio();  
  }  

  getCursor(c) {
    
  }
  
  render() { 
    const paneStyle = {
      width: '80%',
      height: '50%',
      top: '25%',
      left: '10%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      border: 'solid 1px #aaaaaa',
      borderRadius: '3px',  
    }
    const buttonStyle = {
        paddingLeft: 10,
        textAlign: 'center'
    }    
    return (
      <div>
				<DnR
          {...this.Windows}
					ref={'window'}
          key={this.state.key}
          locked={this.props.layout.locked}
          loaded={this.props.layout.loaded}
          minHeight={64}
          minWidth={64}   
          boundary={{top: 64, left: 0, right: window.innerWidth, bottom: window.innerHeight}}       
          onResize={this.onResize}
          onMove={this.onMove}
          initialWidth={this.props.width || 0}
          initialHeight={this.props.height || 0}
          initialTop={this.props.top || 0}
          initialLeft={this.props.left || 0}
					cursorRemap={(c) => c === 'move' ? 'default' : null}
          style={paneStyle}>
          <div>
            {this.props.children} 
          </div> 
				</DnR>   
      </div>   
    )
  }
}

      

// Since this is not a <Route> component, we add History to the context
Window.contextTypes = {
  history: React.PropTypes.object,
  router: React.PropTypes.object,
  store: React.PropTypes.object,
};

export default Window;
