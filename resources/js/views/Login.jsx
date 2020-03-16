import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        redirect: false,
        errors: {},
        email: "",
        password: ""
    };

    emailHandler(event) {
        this.setState({ email: event.target.value });
    }

    passwordHandler(event) {
        this.setState({ password: event.target.value });
    }

    showError(field) {
        if (this.state.errors[field]) {
            return (
                <strong className="text-danger">
                    {this.state.errors[field][0]}
                </strong>
            );
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("/api/auth/login", {
                email: this.state.email,
                password: this.state.password
            });

            this.setState({ redirect: true });
        } catch (e) {
            if (e.response && e.response.status && e.response.status == 422) {
                this.setState({ errors: e.response.data.errors });
            }
        }

        //this.setState({ redirect: true });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/welcome" />;
        }

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mt-4">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form
                                    action=""
                                    onSubmit={this.handleSubmit.bind(this)}
                                >
                                    <div className="form-group">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                            value={this.state.email}
                                            onChange={this.emailHandler.bind(
                                                this
                                            )}
                                        />

                                        {this.showError("email")}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor=""></label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.passwordHandler.bind(
                                                this
                                            )}
                                        />

                                        {this.showError("password")}
                                    </div>

                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                        >
                                            Login now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
