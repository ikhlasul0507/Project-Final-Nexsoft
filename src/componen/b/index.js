import React, { Component } from 'react';
class B extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <b>{this.props.children}</b>
          );
    }
}
 
export default B;