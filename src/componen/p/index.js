import React, {Component} from 'react'

class P extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <p className={this.props.className}>
                {this.props.children}
            </p>
        );
    }
}

export default P;