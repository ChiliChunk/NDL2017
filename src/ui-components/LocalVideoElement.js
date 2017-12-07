import React, {Component} from 'react';
import { Panel} from 'react-bootstrap';

class LocalVideoElement extends Component {

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
        <Panel header="Video Local">
          <video id="mini-video" style={styles} autoPlay muted {...this.props}>
          </video>
        </Panel>
      </div>
    );
  }
};

export default LocalVideoElement;
