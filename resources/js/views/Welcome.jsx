import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="text-center mt-5">
                            <h1 className="page-title">Welcome</h1>
                            <p className="summary">
                                thank you for using our app
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
