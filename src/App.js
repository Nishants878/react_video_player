import React from 'react';

import Main from './MainContainer/main';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './App.module.css'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <h1 className={classes.Top}>The Video Player</h1>
          <Route path="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
