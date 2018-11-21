import React, { Component } from "react";
import PageHeader from "./components/PageHeader";
import "./App.scss";

class WelcomePage extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <div className="WelcomePage">
        <div className="container">
          <PageHeader />
          <div className="row mt-5">
            <div className="col">
              <p>
                <strong> Data driven matches ensures compatibility </strong>{" "}
              </p>{" "}
              <p>
                <strong> Start making connections today </strong>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row mt-3">
            <div className="col">
              <button className="btn btn-warning" onClick={navigate("SignIn")}>
                already a prime member ?
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
        </div>
      </div>
    );
  }
}

export default WelcomePage;
