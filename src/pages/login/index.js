import React, { Component } from 'react';
import "./style.css"
import DivClassSingle from "../../componen/div/divClassSingle"
import { Button, H1, Input, Label, P, Img } from "../../componen"
import Nd6 from "../../assets/img/nd6.png"
import ReCAPTCHA from 'react-google-recaptcha'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
        this.setValue = this.setValue.bind(this)
        this.state = {
            url: "http://localhost:8080/nd6/user/auth/",
            recaptchaResponse: "",
            username: "",
            password: "",
            user: {}
        }
    }
    handleCaptchaResponseChange(response) {
        this.setState({
            recaptchaResponse: response,
        });
        console.log("captcha :", this.state.recaptchaResponse)
    }
    setValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { username, password, recaptchaResponse } = this.state
        return (
            <DivClassSingle className="form">
                <Img src={Nd6} className="img" />
                <H1>Monitoring Stok Log in</H1>
                <DivClassSingle className="inset">
                    <P>
                        <Label>USERNAME</Label>
                        <Input
                            type="text"
                            className="form-input-login"
                            placeholder="Enter your username..."
                            value={username}
                            onChange={this.setValue}
                            name="username"
                        />
                    </P>
                    <P>
                        <Label>PASSWORD</Label>
                        <Input
                            type="password"
                            className="form-input-login"
                            placeholder="Enter your password..."
                            value={password}
                            onChange={this.setValue}
                            name="password"
                        />
                    </P>
                    <ReCAPTCHA
                        ref={(el) => {
                            this.recaptcha = el;
                        }}
                        sitekey="6LfiUGUaAAAAAJYZqK86U0MTTCTJ7VEMman4yCgW"
                        onChange={this.handleCaptchaResponseChange}
                    />
                </DivClassSingle>
                <P className="p-container">
                    <Button
                        className="button"
                        type="button" onClick={() => { this.props.validate({ username, password, recaptchaResponse }) }}
                        name="go"
                    >Log in
                    </Button>

                </P>
                <DivClassSingle />
            </DivClassSingle>
        );
    }
}

export default Login;