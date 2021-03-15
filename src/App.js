import './App.css';
import Data from './data'
import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Data/>
        );
    }
}

export default App;

