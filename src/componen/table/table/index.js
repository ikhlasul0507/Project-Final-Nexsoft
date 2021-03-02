import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <table 
            className={this.props.className}
            border ={this.props.border}
            cellPadding ={this.props.cellPadding}
            cellSpacing = {this.props.cellSpacing}
            >
                {this.props.children}
            </table>
         );
    }
}
 
export default Table;