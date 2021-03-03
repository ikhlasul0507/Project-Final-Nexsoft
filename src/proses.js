import React, { Component } from 'react';
import Login from "./pages/login"
import Data from "./data"
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
class Proses extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path="/" exact component={(props)=><Login {...props}/>}></Route>
                    <Route path="/login" exact component={(props)=><Login {...props}/>}></Route>
                    <Route path="/data" exact component={(props)=><Data {...props}/>}></Route>
                    <Route path="/master-produk" exact component={(props)=><Data {...props}/>}></Route>
                    <Route path="/monitoring-produk" exact component={(props)=><Data {...props}/>}></Route>
                    <Route path="/add-monitoring" exact component={(props)=><Data {...props}/>}></Route>
                    <Route path="/report-monitoring" exact component={(props)=><Data {...props}/>}></Route>
                    <Route path="/detail-monitoring" exact component={(props)=><Data {...props}/>}></Route>
                </Switch>
            </Router>
         );
    }
}
 
export default Proses;