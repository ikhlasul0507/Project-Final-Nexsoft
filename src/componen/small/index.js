import React, {Component} from 'react';

class Small extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <small className={this.props.className}>{this.props.children}</small>
        );
    }
}

export default Small;