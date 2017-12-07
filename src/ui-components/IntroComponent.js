import React from 'react';

const LOG = '[IntroComponent::' 


var  IntroComponent = React.createClass({  
  
  componentDidMount() {

  }, 

  rawMarkup() {
      return { __html: this.props.text };
  },

  render() {
      return(
          <div className="intro-item content"
          dangerouslySetInnerHTML={this.rawMarkup()} />
      );
  }
});


export default  IntroComponent;