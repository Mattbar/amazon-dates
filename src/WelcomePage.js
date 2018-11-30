import React, { Component } from "react";

import "./App.scss";

class WelcomePage extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <React.Fragment>
        <div className="row mt-5 ">
          <div className="col">
            <p className="welcome">
              <strong> Data driven matches ensures compatibility </strong>{" "}
            </p>{" "}
            <p className="welcome">
              <strong> Start making connections today </strong>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="row mt-3">
          <div className="col">
            <button className="btn btn-warning" onClick={navigate("SignIn")}>
              Already a prime member ?
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="row mt-5">
          <div className="col">
            <button className="btn btn-secondary">
              Create a prime account
            </button>
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default WelcomePage;
