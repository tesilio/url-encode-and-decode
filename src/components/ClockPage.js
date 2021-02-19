import React from 'react';
import Clock from "./Clock";
import Video from "./Video";

export default class ClockPage extends React.Component {
  render() {
    return (
      <div id='ClockPage'>
        <Clock/>
        <Video/>
      </div>
    )
  }
}
