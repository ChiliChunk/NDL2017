import React from 'react';

const LOG = "[FormPage::"

var FormPage = React.createClass({

  getInitialState: function () {
    return {
      completed: false,
      canSubmit: false,
      items: [],
    }
  },

  componentDidMount: function () {
    this.setState({ items: this.props.items });
  },

  onSubmit(e) {
    if (!this.props.onSubmit) {
      
    }
    else {
      
      this.props.onSubmit(e);
    }
  },

  render: function () {
    return (
      <div id="pre-submit-form-container">
        <form id="form-container" onSubmit={this.onSubmit}>
          {this.props.children}
        </form>
      </div>
    );
  }
});

export default FormPage;
