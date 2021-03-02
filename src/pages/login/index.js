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
        this.validate = this.validate.bind(this)
        this.save = this.save.bind(this)
        this.state = {
            recaptchaResponse: "",
            email:"",
            password:""
        }

        this.handle = () => {

        }
    }
    handleCaptchaResponseChange(response) {
        this.setState({
            recaptchaResponse: response,
        });
        console.log("captcha :", this.state.recaptchaResponse)
    }
    
    setValue(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    validate(){
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.recaptchaResponse);
        if(this.state.email ==="")
            alert("Please, enter your email !")
            else
        if(this.state.password === "")
            alert("Please enter your password !")
            else
        if(this.state.recaptchaResponse === "")
            alert("Please, submit recaptcha !")
            else
            this.save()
    }
    save(){
        alert("Berhasil Simpan Data")
        console.log("Simpan")
        console.log(this.props)
        this.props.history.push("/data")
    }
    render() {
        const { email, password , recaptchaResponse} = this.state
        return (
                    <DivClassSingle className="form">
                    <Img src={Nd6} className="img" />
                    <H1>Monitoring Stok Log in</H1>
                    <DivClassSingle className="inset">
                        <P>
                            <Label>EMAIL ADDRESS</Label>
                            <Input type="email" className="form-input-login" placeholder="Enter your email..." value={email} onChange={this.setValue} name="email"/>
                        </P>
                        <P>
                            <Label>PASSWORD</Label>
                            <Input type="password" className="form-input-login" placeholder="Enter your password..." value={password} onChange={this.setValue} name="password" />
                        </P>
                        <ReCAPTCHA
                            ref={(el) => { this.recaptcha = el; }}
                            sitekey="6LfiUGUaAAAAAJYZqK86U0MTTCTJ7VEMman4yCgW"
                            onChange={this.handleCaptchaResponseChange}
                        />
                    </DivClassSingle>
                    <P className="p-container">
                        <Button className="button" type="button" onClick={this.validate} name="go">Log in</Button>
                    </P>
                    <DivClassSingle/>
                    </DivClassSingle>
        );
    }
}

export default Login;