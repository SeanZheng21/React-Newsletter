import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsLetter from './NewsLetter/NewsLetter';
import SubSucceed from './SubSucceed/SubSucceed';
import "./App.css";

class App extends Component {
    render() {
        return <div className="App">
            <Router>
                <Fragment>
                    <div className="container">
                        <Switch> 
                            <Route exact path="/" component={NewsLetter} />
                            <Route exact  path="/sub-succeed" component={SubSucceed} />
                            <Route render={() => <h1>404: page not found</h1>} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </div>
    }
}

export default App;