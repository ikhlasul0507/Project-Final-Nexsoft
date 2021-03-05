import React, { Component } from 'react';
import Login from "./pages/login"
import Data from "./data"
import { connect } from "react-redux"
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

class Proses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://localhost:8080/nd6/user/auth/",
            recaptchaResponse: "",
            username: "",
            password: "",
            user: {}
        }

        this.validate = login => {
            const { username, password, recaptchaResponse } = login
            if (username === "")
                alert("Please, enter your username !")
            else if (password === "")
                alert("Please enter your password !")
            else if (recaptchaResponse === "")
                alert("Please, submit recaptcha !")
            else
                this.save(login)
        }
        this.doLogin = login => {
            const { username, password, recaptchaResponse } = login
            console.log("asasa", username)
            fetch(this.state.url + `?username=${username}&password=${password}`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(json => {
                    if (json.errorMessage) {
                        alert(json.errorMessage);
                    } else {
                        this.setState({
                            user: json,
                            recaptchaResponse : recaptchaResponse
                        })
                        this.props.submitLogin({ userData: this.state.user, recaptchaResponse : recaptchaResponse })
                        alert("Selamat Anda Berhasil Login !!")
                    }
                })
                .catch((e) => {
                    alert("Failed fetching api... ");
                });
        }
        this.save = login => {
            this.doLogin(login);
        }

        this.tampilPage = () => {
            console.log("adsadsadsa", this.props.dataLogin.recaptchaResponse)
            if (!this.props.checkLogin && this.props.dataLogin.recaptchaResponse === "") {
                return (
                    // <Router>
                    // <Switch>
                    <Route path="/" exact component={(props) => <Login validate={this.validate} {...props} />}></Route>
                    // </Switch>
                    // </Router>
                );
            } else
                return (
                    <>
                        <Route path="/" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/master-produk" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/monitoring-produk" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/add-monitoring" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/report-monitoring" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/detail-monitoring/:id" exact component={(props) => <Data {...props} />}></Route>
                    </>

                );
        }

    }


    render() {
        return (
            <>
                <Router>
                    <Switch>
                        {this.tampilPage()}
                        <Route>{"haha"}</Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

const mapStateToProps = state => ({
    checkLogin: state.AReducer.isLogin,
    dataLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
    return {
        submitLogin: (data, recaptchaResponse) => dispatch({ type: "LOGIN_SUCCESS", userData: data ,recaptchaResponse :recaptchaResponse}),
        keluar: () => dispatch({ type: "LOGOUT_SUCCESS" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Proses);