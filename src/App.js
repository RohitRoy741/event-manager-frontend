import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

class App extends React.Component {
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
