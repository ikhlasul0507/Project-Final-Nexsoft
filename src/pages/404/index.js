import React, { Component } from 'react';
import "./page404.css"
import {Link} from "react-router-dom"
class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="page-404">
                <img src="https://previews.123rf.com/images/pa3x/pa3x1605/pa3x160500009/56425150-404-error-web-page-background-vector-design-page-not-found-template-with-typography-.jpg" alt="rocketttt"/>
                <Link to="/">
                <p>Back to login</p>
                </Link>
                </div>
            </div>
        );
    }
}

export default Page404;