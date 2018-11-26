import React, { Component } from "react";
import "./Home.scss";
import PageHeader from "./components/PageHeader";
import NavTabs from "./components/NavigationTabs";

class Home extends Component {
  render() {
    const { navigate, userImg } = this.props;
    return (
      <div className="Home">
        <div className="container">
          <PageHeader />
          <NavTabs navigate={navigate} />
          <div className="container p-5">
            <div className="row">
              <div className="col">
                <img className="userImg" src={userImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
