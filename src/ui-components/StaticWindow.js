import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import MovableResizableWindow from 'react-rnd'
import { Modal, Button } from 'react-bootstrap';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Lock from 'material-ui/svg-icons/action/lock';
import LockOpen from 'material-ui/svg-icons/action/lock-open';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

class Window extends Component {

  constructor(props) {
    super(props)
    this.toggleLockPosition = this.toggleLockPosition.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onResizeStart = this.onResizeStart.bind(this);
    this.onResizeStop = this.onResizeStop.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
    }
  }


  componentWillMount() {
    
  }

  componentDidMount() {
    
    this.props.windowActions.init({
      x: this.props.x || 150,
      y: this.props.y || 150,
      width: 500,
      height: 750,
      id: this.props.windowName,
    });
    this.setState({
      x: this.props.x || 150,
      y: this.props.y || 150,
      width: 500,
      height: 750,    
    })
    
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.index) {
      alert('we ' + this.props.windowName + 'are window index : ' + nextProps.index );
      this.index =    nextProps.index;
    }
  }
  
  toggleLockPosition(e) {
    
    
    if (!this.props.window.positionLocked) {      
      this.props.windowActions.lockWindowPosition(this.props.windowName)      
      var myWindow = ReactDOM.findDOMNode(this.refs.window);
      myWindow.style.setProperty("cursor", "auto");
      
    }
    else {
      this.props.windowActions.unlockWindowPosition(this.props.windowName);      
      var myWindow = ReactDOM.findDOMNode(this.refs.window);
      myWindow.style.setProperty("cursor", "move");
      
    }
    
  }
  /**
   * Use props to store position 
   */
  onResizeStart(e, data) {
    
    
    
    this.props.windowActions.onResizeStart(data);    
  }

  cumulativeOffset(element) {
      var top = 0, left = 0;
      do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while(element);

      return {
        top: top,
        left: left
      };
  };   

  /** 
   * save new position inside props
   */
  onResizeStop(e, data) {
    
    
    this.props.windowActions.onResizeStop(data);
    this.setState({width: data.width, height: data.height})    
  }

 

  /** 
   * start new drag (invalid current position/size)
   */
  onDragStart(e, data) {
    
    
    if (this.props.window.positionLocked) {   
      error.silent();
      //e.stopPropagation();
    }
    this.props.windowActions.onDragStart(data);
  }

  /**
   * Store new position in props
   */
  onDragStop(e, data) {
    
    
    
    this.setState({x: data.position.top, y: data.position.left})
    this.props.windowActions.onDragStop(data);
  }
  
  onFocus(e) {
      //alert('onFocus');
      var titleBar = ReactDOM.findDOMNode(this.refs.titleBar);
      titleBar.style.setProperty("backgroundColor","#25258B");    
      
      this.setState({zIndex: 999});       
  }

  onBlur(e) {
      //alert('onBlur');
      var titleBar = ReactDOM.findDOMNode(this.refs.titleBar);
      titleBar.style.setProperty("backgroundColor","#86868B");
      
      this.setState({zIndex: 0});            
  }  

  componentDidUpdate(props) {
    var myWindow = ReactDOM.findDOMNode(this.refs.window);
    
    
  }

  render() {
    const style = {
      //verticalAlign: 'center',
      //textAlign: 'center',
      backgroundColor: '#aaaaaa',
      padding: '4px',
      border: 'solid 1px #aaaaaa',
      borderRadius: '3px',
      color: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      overflow: 'hidden',
    };
    

    return (
      <div
        id="focus-blur-container"
        onBlur={this.onBlur}
        onFocus={this.onFocus}>
         <AppBar
          ref="titleBar"
          style={{ height: "32px", "minHeight": "32px", backgroundColor: "#86868B" }}
          title={this.props.title}
          titleStyle={{ lineHeight: "32px" }}          
          iconElementLeft={<IconButton style={{ "marginTop": "-16px", }} onClick={this.toggleLockPosition}>{ this.props.window.positionLocked ? <Lock /> : <LockOpen />}</IconButton>}
          iconElementRight={<IconButton style={{ "marginTop": "-16px", }} onClick={this.toggleLockPosition}>{ this.props.window.positionLocked ? <Lock /> : <LockOpen />}</IconButton>}
          />
          <div style={{width:"100%", height:"100%"}}>
          {this.props.children}    
          <pre>x:{this.state.x} y:{this.state.y} h:{this.state.height} w:{this.state.width}</pre>       
        </div>
      </div>
    )
  }
}

export default Window;
