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

class PatientView extends React.Component {

  constructor(props) {
    
    super(props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.readyToCall = this.readyToCall.bind(this);
    this.createdPeer = this.createdPeer.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {
      joined: false,
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
      url: 'https://consultation.cdiet.care:8888/'
    });
    
    this.webrtc.on('videoAdded', this.addVideo);
    this.webrtc.on('videoRemoved', this.removeVideo);
    this.webrtc.on('readyToCall', this.readyToCall);
    this.webrtc.on('createdPeer', this.createdPeer);
    this.webrtc.on('connectionReady', this.connectionReady);
    //connectionReady
  }

  componentWillUnmount() {
    return this.webrtc.leaveRoom(this.roomName);
  }

  connectionReady(sessionId) {
    
  }

  createdPeer(peer) {
    
  }

  addVideo(video, peer) {

    
    

    var remotes = ReactDOM.findDOMNode(this.refs.remotes);
    
    if (remotes) {
      var container = document.createElement('div');
      container.className = 'videoContainer';
      container.id = 'container_' + this
        .webrtc
        .getDomId(peer);
      video.style.width = "90%";
      video.style.height = "90%";
      
      container.appendChild(video);

      

      // show the ice connection state
      if (peer && peer.pc) {
        var connstate = document.createElement('div');
        connstate.className = 'connectionstate';
        container.appendChild(connstate);
        peer.pc.on('iceConnectionStateChange', function (event) {
            switch (peer.pc.iceConnectionState) {

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
          });
        peer.pc.on('offer', function(offer) {
            
            //alert(offer);
        });
        peer.pc.on('answer', function(answer) {
            
            //alert(offer);
        }); 
        peer.pc.on('endOfCandidates',  function() {
            //alert('endOfCandidates')            
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

  refresh() {
    
    this.webrtc.leaveRoom(this.props.roomName);
    this.webrtc.joinRoom(this.roomName);
    if(this.webrtc.testReadiness()) {
      alert('connexion is ready')
    }
    else alert('connexion not ready');
  }  

  readyToCall() {
    return this.webrtc.joinRoom(this.roomName);
  }

  connect() {
    
  }

  disconnect() {
    
  }

  render() {
    const refreshButton = (
      <IconButton onClick={this.refresh}>
        <svg style={{
              width: "24px",
              height: "24px",
              fill: "#000000"
            }}
            viewBox="0 0 24 24">
          <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"/>
        </svg>
      </IconButton>
    );    
    return (
      <div>
          <div
            className="remotes"
            id='remoteVideos'
            style={{
            padding: "5px",
            height: "100%vh",
            width: "100%vw",
            zIndex: "100"
          }}
          ref="remotes"></div>
        <WindowContainer
          id="localvideo"
          top={74}
          left={20}
          height={180}
          width={180}
          title="Vidéo Personnelle"
          lockAspectRatio={true}
          layoutMenuActive={true}>
          <video
            className="local"
            id="localVideo"
            style={{
            padding: "5px",
            height: "100%",
            width: "100%",
            zIndex: "100"
          }}
            ref="local"></video>
        </WindowContainer>
        {refreshButton}
      </div>
    );

  }
}

PatientView.contextTypes = {
  history: React.PropTypes.object,
  router: React.PropTypes.object,
  store: React.PropTypes.object,
  location: React.PropTypes.object,
}; 

export default PatientView;