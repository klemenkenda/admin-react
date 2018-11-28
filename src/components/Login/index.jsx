import React, { Component } from 'react';

import Auth from "../../lib/Auth";
import type { LoginUserObj } from  "../../lib/Models";

type Props = {
    history: Array<mixed>
};

type State = {
    user: LoginUserObj,
    message: string
};

class Login extends Component<Props, State> {
    constructor() {
        super();

        this.state =  {
            user: {
                username: "",
                password: "",
                remember: true
            },
            message: ""
        }
    };

    handleSubmit = (event: Event) => {
        event.preventDefault();
        console.log(this.state.user);
        /*
        Auth.login(this.state.user,
            () => {
                this.setState({ message: "" });
                this.props.history.push("/");
            },
            (message) => {
                this.setState({ message });
            }
        );
        */
    };

    handleChange = (event: Event) => {
        let target = event.target;
        if (target instanceof HTMLInputElement) {
            const field = target.id;
            const value = target.type === 'checkbox' ?
                target.checked : target.value;
            // update
            console.log(field);
            this.setState(prev_state => {
                prev_state.user[field] = value;
                return prev_state;
            });
        }
    };

    render() {
        return(
            <div className="padding-15">

                <div className="login-box">

                    <form className="sky-form boxed" onSubmit={this.handleSubmit}>
                        <header><i className="fa fa-users"></i> Sign In</header>

                        {/**
                        <div className="alert alert-danger noborder text-center weight-400 nomargin noradius">
                            Invalid Email or Password!
                        </div>

                        <div className="alert alert-warning noborder text-center weight-400 nomargin noradius">
                            Account Inactive!
                        </div>

                        <div className="alert alert-default noborder text-center weight-400 nomargin noradius">
                            <strong>Too many failures!</strong> <br />
                            Please wait: <span className="inlineCountdown" data-seconds="180"></span>
                        </div>
                        **/}

                        <fieldset>

                            <section>
                                <label className="label">Username</label>
                                <label className="input">
                                    <i className="icon-append fa fa-user"></i>
                                    <input type="text" id="username" value={this.state.user.username} onChange={this.handleChange} />
                                    <span className="tooltip tooltip-top-right">Type your Username</span>
                                </label>
                            </section>

                            <section>
                                <label className="label">Password</label>
                                <label className="input">
                                    <i className="icon-append fa fa-lock"></i>
                                    <input type="password" id="password" value={this.state.user.password } onChange={this.handleChange} />
                                    <b className="tooltip tooltip-top-right">Type your Password</b>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="remember-user" id="remember-user"
                                        checked={this.state.user.remember}
                                        onChange={this.handleChange}  />
                                        <i></i>Keep me logged in</label>
                            </section>

                        </fieldset>

                        <footer>
                            <button type="submit" className="btn btn-primary pull-right">Sign In</button>
                            <div className="forgot-password pull-left">
                                { /* <a href="page-password.html">Forgot password?</a> <br /> */ }
                            </div>
                        </footer>
                    </form>

                </div>

            </div>
        )
    }
}

export default Login;