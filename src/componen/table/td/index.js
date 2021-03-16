import React, {Component} from 'react'

class Td extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <td 
            colSpan={this.props.colspan}
            className={this.props.className}
            >
                {this.props.children}
            </td>
        );
    }
}

export default Td;