import React, {Component} from 'react'

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <textarea
                name={this.props.name}
                className={this.props.className}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                value={this.props.value}
            >
             </textarea>
        );
    }
}

export default Textarea;