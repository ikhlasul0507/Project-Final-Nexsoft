import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <input
                className={this.props.className}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
                type={this.props.type}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
            >
            </input>
        );
    }
}

export default Input;