import React, { Component } from "react";
import "./SignIn.scss";
import UserSignIn from "./images/UserSignIn.svg";
import AddAccountCross from "./images/AddAccountCross.svg";
import PageHeader from "./components/PageHeader";

class SignIn extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <div className="container">
        <PageHeader />
        <div className={`container  signInButtons`}>
          <div className="row p-0 justify-content-center">
            <button
              className="btn btn p-0 m-0 boarder"
              onClick={navigate("Home")}
            >
              <img src={UserSignIn} className="profileBox" alt="user" />
            </button>
          </div>
          <div className="row p-0 justify-content-center">
            <div className="d-flex col-4 align-items-center addAccount">
              <img src={AddAccountCross} className="addCross" alt="addCross" />
              <a href="# "> add an account</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
