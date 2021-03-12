import React, {Component} from 'react'

class DivClassSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div
                className={this.props.className}
                key={this.props.key}
                onClick={this.props.onClick}
                data-tip={this.props.dataTip}
            >
                {this.props.children}
            </div>
        );
    }
}

export default DivClassSingle;