import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Clock from './components/Clock';
import UrlEncodeDecode from './components/UrlEncodeDecode';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div id='App'>
        <BrowserRouter>
          <Route path='/' component={Main} exact/>
          <Route path='/clock' component={Clock} exact/>
          <Route path='/url-encode-decode' component={UrlEncodeDecode} exact/>
          <Header />
        </BrowserRouter>
      </div>
    );
  }
}
