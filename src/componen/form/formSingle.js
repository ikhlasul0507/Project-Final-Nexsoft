import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form>
                {this.props.children}
                </form>
         );
    }
}
 
export default Form;