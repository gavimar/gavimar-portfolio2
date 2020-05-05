import React from 'react';
import '../stylesheets/App.scss';
import LandingMain from './LandingMain';
import { Fragment } from 'react';
import MenuBar from './MenuBar';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './Portfolio'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    return <Fragment>
      <Switch>
        <Route exact path="/">
      <MenuBar/>
      <LandingMain/>
      </Route>
      
      <Route exact path="/Portfolio">
          <Portfolio/>
      </Route>
      </Switch>
    </Fragment>
    
  }
}