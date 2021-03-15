import React, { Component } from 'react';
import Login from "./pages/login"
import Data from "./data"
import Page404 from "./pages/404"
import { connect } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
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
            if (username === "" &&  password === "") {
                swal({
                    title: "Error !",
                    text: "Please, enter your username and password !",
                    icon: "error",
                    button: "Ok",
                });
            } else if (recaptchaResponse === "") {
                swal({
                    title: "Error !",
                    text: "Please, submit recaptcha !",
                    icon: "error",
                    button: "Ok",
                });
            } else {
                this.save(login)
            }
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
                        swal({
                            title: "Error !",
                            text: json.errorMessage,
                            icon: "error",
                            button: "Ok",
                        });
                    } else {
                        this.setState({
                            user: json,
                            recaptchaResponse: recaptchaResponse
                        })
                        this.props.submitLogin({ userData: this.state.user, recaptchaResponse: recaptchaResponse })
                        Swal.fire({
                            title: "Good job!",
                            text: "Login success !!",
                            icon: "success",
                            imageUrl: "http://www.nexsoft.co.id/images/nd6antelope.png",
                            imageWidth: 400,
                            imageHeight: 200,
                            timer:2000,
                            showConfirmButton:false,
                            timerProgressBar:true
                        });
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
            if (!this.props.checkLogin) {
                return (
                    <Route path="/" exact component={(props) => <Login validate={this.validate} {...props} />}></Route>
                );
            } else
                return (
                    <>
                        <Route path="/" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/beranda" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/master-produk" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/monitoring-produk" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/add-monitoring" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/report-monitoring" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/detail-monitoring/:id" exact component={(props) => <Data {...props} />}></Route>
                        <Route path="/edit-monitoring/:id" exact component={(props) => <Data {...props} />}></Route>
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
                        <Page404 />
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
        submitLogin: (data, recaptchaResponse) => dispatch({ type: "LOGIN_SUCCESS", userData: data, recaptchaResponse: recaptchaResponse }),
        keluar: () => dispatch({ type: "LOGOUT_SUCCESS" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Proses);