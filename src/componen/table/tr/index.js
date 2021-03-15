import React, {Component} from 'react'

class Tr extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <tr 
            onClick={this.props.onClick}
            key=""
            >
                {this.props.children}
            </tr>
        );
    }
}

export default Tr;