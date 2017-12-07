import React from 'react';

const LOG = '[ShowTextComponent::' 


var  ShowTextComponent = React.createClass({  
  
  componentDidMount() {

  }, 

  rawMarkup() {
      return { __html: this.props.text };
  },

  render() {
      return(
          <div id="showtext-container"
            className="intro-item flow-text"
            className="content"
            dangerouslySetInnerHTML={this.rawMarkup()}>
          </div>
      );
  }
});

export default  ShowTextComponent;