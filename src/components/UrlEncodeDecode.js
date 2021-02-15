import React from 'react';
import '../styles/urlEncodeDecode.css';
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

export default class UrlEncodeDecode extends React.Component {
  state = {
    input: '',
    output: '',
    encoded: false,
    decoded: false,
    copied: false,
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
      encoded: false,
      decoded: false,
    });
  }

  handleClickForEncode = (e) => {
    this.setState({
      output: encodeURI(this.state.input),
      encoded: true,
      copied: false,
    });
  }
  handleClickForDecode = (e) => {
    this.setState({
      output: decodeURI(this.state.input),
      decoded: true,
      copied: false,
    });
  }

  handleOnCopy = () => {
    this.setState({
      copied: true,
    });
  }

  render() {
    return (
      <div id='Main'>
        <h1>
          URL Encode and Decode
        </h1>
        <div id='inputWrapper'>
          <textarea
            id='input'
            placeholder='input'
            defaultValue={this.state.input}
            onChange={this.handleInputChange}
          />
        </div>
        <div id='inAndOutputButtonWrapper'>
          <button
            className={this.state.encoded ? 'success' : ''}
            onClick={this.handleClickForEncode}
          >Encode
          </button>
          <div>or</div>
          <button
            className={this.state.decoded ? 'success' : ''}
            onClick={this.handleClickForDecode}
          >Decode
          </button>
        </div>
        <div id='outputWrapper'>
          <textarea
            id='output'
            placeholder='output'
            readOnly={true}
            defaultValue={this.state.output}
          />
        </div>
        <div id='copyButtonWrapper'>
          <CopyToClipboard onCopy={this.handleOnCopy} text={this.state.output}>
            <button className={this.state.copied ? 'success' : ''}>
              Copy To Clipboard
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}
