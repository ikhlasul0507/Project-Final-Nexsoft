import React, { Component } from 'react';
import "./beranda.css"
class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
           <div className="container">
               <div className="data-kanan">
                </div>
                <div className="data-kiri">
                </div>
           </div>
        );
    }
}

export default Beranda;