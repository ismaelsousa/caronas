import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home'
import Passengers from './Passengers'
import Driver from './Driver'
import Travels from './Travels'


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Passengers" component={Passengers}/>
          <Route path="/Driver" component={Driver}/>
          <Route path="/Travels" component={Travels}/>
        </Switch>
    </Router>
  );
}

