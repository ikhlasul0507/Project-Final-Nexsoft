import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <button
                className={this.props.className}
                onClick={this.props.onClick}
                name={this.props.name}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;