import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
                <div className="App">
                  <Home />
                </div>
            )}/>
            <Route exact={true} path='/signup' render={() => (
                <div className="App">
                  <SignUp />
                </div>
            )}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
