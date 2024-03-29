import React, {Component} from 'react'

class A extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <a
                className={this.props.className}
                href={this.props.href}
            >
                {this.props.children}
            </a>
        );
    }
}

export default A;