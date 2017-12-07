import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Panel } from 'react-bootstrap';

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.update(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  makePDFHandler() {
    this.setState({ dialogOpen: false })
    this.props.update(this.state.textValue);
    this.props.sendmail({ title: this.state.fileName, content: this.state.textValue }, this.props.userId)
  }

  render() {
    const { editorState } = this.state;
    return (
      <div id="notepad-container" style={{height:'100%'}}>
        <Panel>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Panel>
      </div>
    );
  }
}

export default EditorConvertToHTML;