import React, {Component} from 'react'

class H3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <h3 className={this.props.className}>{this.props.children}</h3>
            </>
        );
    }
}

export default H3;