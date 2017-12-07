import React, {Component, PropsType} from 'react';
import { Panel} from 'react-bootstrap';

class RemoteVideoElement extends Component{

  getStyle() {
    const styles = {
     border: "4px solid gray",
     maxHeight: "100%",
     maxWidth: "100%"   
    }
    return styles;
  }


  render() { 
    var styles = this.getStyle();
    return (  
      <div>
        <Panel header="Video Patient">
        <div id='videos' style={styles} {...this.props}>
        </div>
        </Panel>
      </div>
    );
  }
};

export default RemoteVideoElement;
