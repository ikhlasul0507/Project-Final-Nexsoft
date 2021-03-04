import React, {Component} from 'react'

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <select className={this.props.className} name={this.props.name}>{this.props.children}</select>
        );
    }
}

export default Select;