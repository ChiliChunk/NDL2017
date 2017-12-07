import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import WebRtc from 'react-simplewebrtc';
import {
  Grid,
  Col,
  Row,
  Panel,
  Modal,
  Button,
  FormControl,
  FormGroup,
  HelpBlock,
  ControlLabel
} from 'react-bootstrap';
import WindowContainer from '../containers/WindowContainer';
import TabComponent from './TabComponent'
import RoomPage from '../containers/RoomPage';
import IconButton from 'material-ui/IconButton';
import ProgressButton from './ProgressButton';
import ConnectionStatusIndicator from './ConnectionStatusIndicator';

var constraint = {
  "audio": true,
  "video": {
    "mandatory": {
      "minWidth": 320,
      "maxWidth": 1280,
      "minHeight": 180,
      "maxHeight": 720,
      "minFrameRate": 30
    },
    "optional": []
  }
}


const statusMap = {
  ['checking']: 'Verification',
  ['connected']: 'Connexion établie',
  ['completed']: 'Connexion établie',
  ['disconnected']: 'Déconnecté',
  ['failed']: 'Echec de la connexion',
  ['closed']: 'Connexion terminé',
}

class WebRTC extends React.Component {

  constructor(props) {
    super(props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.readyToCall = this.readyToCall.bind(this);
    this.iceFailed = this.iceFailed.bind(this);
    this.connectivityError = this.connectivityError.bind(this);
    this.reconnect = this.reconnect.bind(this);
    this.state = {
      joined: false,
      status: 'initial',
    }
  }

  componentWillMount(nextProps) {
    this.roomName = this.context.location.query.room;
  }

  componentDidMount() {
    this.webrtc = new SimpleWebRTC({
      localVideoEl: ReactDOM.findDOMNode(this.refs.local),
      remoteVideosEl: "",
      autoRequestMedia: true,
      debug: false,
      //media: constraint,
      url: ['stun:https://consultation.cdiet.care:8888/', 'turn:turn.cdiet.care:3478']
    });
    
    this.webrtc.on('videoAdded', this.addVideo);
    this.webrtc.on('videoRemoved', this.removeVideo);
    this.webrtc.on('readyToCall', this.readyToCall);
    this.webrtc.on('iceFailed', this.iceFailed);
    this.webrtc.on('connectivityError', this.connectivityError);
    this.webrtc.leaveRoom(this.roomName);
  }
 

  componentWillUnmount() {
    return this.webrtc.leaveRoom(this.props.roomName);
  }

  addVideo(video, peer) {

    
    

    var self = this;

    var remotes = ReactDOM.findDOMNode(this.refs.remotes);
    
    if (remotes) {
      var container = document.createElement('div');
      container.className = 'videoContainer';
      container.id = 'container_' + this.webrtc.getDomId(peer);
      video.style.width = "90%";
      video.style.height = "90%";
      
      container.appendChild(video);

      
      
      // show the ice connection state
      if (peer && peer.pc) {
        /*
        var connstate = document.createElement('div');
        connstate.className = 'connectionstate';
        container.appendChild(connstate);
        var self = this;  

        peer.pc.on('iceConnectionStateChange', function (event) {
            
            //self.setState({status: peer.pc.iceConnectionState})
            switch (peer.pc.iceConnectionState) {

             case 'new':
                connstate.innerText = 'Recherche de partenaire...';                
                break;              

              case 'checking':
                connstate.innerText = 'Connexion en cours...';                
                break;

              case 'connected':
              case 'completed': // on caller side
                connstate.innerText = 'Connexion établie.';
                break;

              case 'disconnected':
                connstate.innerText = 'Déconnecté.';
                break;

              case 'failed':
                break;

              case 'closed':
                connstate.innerText = 'Connexion terminée.';
                break;
            }
             
        }, self);
        */
        peer.pc.on('offer', function(offer) {
            
            //alert(offer);
        });
        peer.pc.on('answer', function(answer) {
            
            //alert(answer);
        }); 
     
      }
      
      remotes.appendChild(container);
    }
  }

  removeVideo(video, peer) {
    
    var remotes = ReactDOM.findDOMNode(this.refs.remotes);
    var el = document.getElementById(peer
      ? 'container_' + this.webrtc.getDomId(peer)
      : 'localScreenContainer');
    if (remotes && el) {
      remotes.removeChild(el);
    }
  }

  reconnect() {
    var isReady = this.webrtc.testReadiness();
    if(isReady) {
      alert('connexion is ready' + isReady )
    }
    else 
    alert('connexion not ready' + isReady);

    
    this.webrtc.leaveRoom(this.props.roomName);
    this.webrtc.joinRoom(this.roomName);    
  }  

  readyToCall() {
    return this.webrtc.joinRoom(this.roomName);
  }

  iceFailed() {
  }

  connectivityError() {
  }

  connect() {
    
  }

  disconnect() {
    
  }

  render() {   
    return (
      <div id="video-container">
        <WindowContainer 
          ref="remotevideo" 
          key={"remotevideo"}
          id={this.props.remotevideo.id}          
          title={'Patient'} 
          top={this.props.remotevideo.top} 
          left={this.props.remotevideo.left} 
          width={this.props.remotevideo.width} 
          height={this.props.remotevideo.height+ 64}   
	        lockAspectRatio={true}>
          <div className="remotes" id='remoteVideos' style={{ padding: "5px", height: "100%vh", width: "100%vw", zIndex: "100" }} ref="remotes">
          </div>
        </WindowContainer>
        <WindowContainer 
          ref="localvideo" 
          key={"localvideo"}
          id={this.props.localvideo.id}          
          title={'Vidéo Personnelle'} 
          top={this.props.localvideo.top} 
          left={this.props.localvideo.left} 
          width={this.props.localvideo.width} 
          height={this.props.localvideo.height}   
	        lockAspectRatio={true}>
          <video className="local" id="localVideo" style={{ padding: "5px", height: "100%", width: "100%", zIndex: "100" }} ref="local">
          </video>
        </WindowContainer>          
      </div>     
    );

  }
}

WebRTC.contextTypes = {
  history: React.PropTypes.object,
  router: React.PropTypes.object,
  store: React.PropTypes.object,
  location: React.PropTypes.object,
}; 

export default WebRTC;
