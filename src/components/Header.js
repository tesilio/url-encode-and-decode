import React from 'react';
import '../styles/header.css';
import {Link} from "react-router-dom";

export default class Header extends React.Component {


  render() {
    return (
      <div id='Header'>
        <span><Link to='/'>🏡</Link></span>
        <span><Link to='/clock'>⏱</Link></span>
        <span><Link to='/url-encode-decode'>URL E&D</Link></span>
      </div>
    );
  }
}
