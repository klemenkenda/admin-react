// react
import React, { Component } from 'react';

class Login extends Component {
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

    handleSubmit = (event) => {
        event.preventDefault();
        window._auth.login(this.state.user,
            () => {
                this.setState({ message: "" });
                this.props.history.push("/");
            },
            (message) => {
                this.setState({ message });
            }
        );
    };

    handleChange = (event) => {
        let target = event.target;
        if (target instanceof HTMLInputElement) {
            const field = target.id;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            // update
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
                        <header><i className="fa fa-users"></i> Prijava</header>

                        {/*
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
                        */}

                        <fieldset>

                            <section>
                                <label className="label">Uporabniško ime</label>
                                <label className="input">
                                    <i className="icon-append fa fa-user"></i>
                                    <input type="text" id="username" value={this.state.user.username} onChange={this.handleChange} />
                                    <span className="tooltip tooltip-top-right">Vpiši uporabniško ime</span>
                                </label>
                            </section>

                            <section>
                                <label className="label">Geslo</label>
                                <label className="input">
                                    <i className="icon-append fa fa-lock"></i>
                                    <input type="password" id="password" value={this.state.user.password } onChange={this.handleChange} />
                                    <b className="tooltip tooltip-top-right">Vpiši geslo</b>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" id="remember"
                                        checked={this.state.user.remember}
                                        onChange={this.handleChange}  />
                                        <i></i>Permanentna prijava
                                </label>
                            </section>

                        </fieldset>

                        <footer>
                            <button type="submit" className="btn btn-primary pull-right">Prijava</button>
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