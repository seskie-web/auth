import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Login from "./views/Login";
import Welcome from "./views/Welcome";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/welcome">
                            <Welcome />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
