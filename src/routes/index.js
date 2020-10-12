import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home'
import Passengers from './Passengers'
import Driver from './Driver'


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Passengers" component={Passengers}/>
          <Route path="/Driver" component={Driver}/>
        </Switch>
    </Router>
  );
}

