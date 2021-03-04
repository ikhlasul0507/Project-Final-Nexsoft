import React, {Component} from 'react';
import "./style.css"
import DivClassSingle from "../../componen/div/divClassSingle"
import {Button, H1, Input, Label, P, Img} from "../../componen"
import Nd6 from "../../assets/img/nd6.png"
import ReCAPTCHA from 'react-google-recaptcha'
import Tooltip from '@material-ui/core/Tooltip';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
        this.setValue = this.setValue.bind(this)
        this.validate = this.validate.bind(this)
        this.save = this.save.bind(this)
        this.state = {
            url: "http://localhost:8080/nd6/user/auth/",
            recaptchaResponse: "",
            username: "",
            password: "",
            user :{}
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

    setValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate() {
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.recaptchaResponse);
        if (this.state.username === "")
            alert("Please, enter your username !")
        else if (this.state.password === "")
            alert("Please enter your password !")
        else if (this.state.recaptchaResponse === "")
            alert("Please, submit recaptcha !")
        else
            this.save()
    }

    doLogin (){
        fetch(this.state.url+`?username=${this.state.username}&password=${this.state.password}`,{
            method:"post",
            headers :{
                "Content-Type": "application/json; ; charset=utf-8",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        .then(json =>{
           if(json.status === 500){
            alert("Failed the username!");
           }else{
               this.setState({
                   user : json
               })
           }
        })
        .catch((e) => {
            console.log(e);
            alert("Failed the Password ");
        });
    }

    save() {
        this.doLogin();
        console.log("user state",this.state.user)
        // alert("Berhasil Simpan Data")
        // console.log("Simpan")
        // console.log(this.props)
        // this.props.history.push("/data")
    }

    render() {
        const {username, password, recaptchaResponse} = this.state
        return (
            <DivClassSingle className="form">
                <Img src={Nd6} className="img"/>
                <H1>Monitoring Stok Log in</H1>
                <DivClassSingle className="inset">
                    <P>
                        <Label>USERNAME</Label>
                        <Input type="text" className="form-input-login" placeholder="Enter your username..." value={username}
                               onChange={this.setValue} name="username"/>
                    </P>
                    <P>
                        <Label>PASSWORD</Label>
                        <Input type="password" className="form-input-login" placeholder="Enter your password..."
                               value={password} onChange={this.setValue} name="password"/>
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
                    <Tooltip title="Delete">
                        <Button className="button" type="button" onClick={this.validate} name="go">Log in</Button>
                    </Tooltip>
                </P>
                <DivClassSingle/>
            </DivClassSingle>
        );
    }
}

export default Login;