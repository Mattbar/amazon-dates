import React, { Component } from "react";
import "./Home.scss";
import PageHeader from "./components/PageHeader";
import NavTabs from "./components/NavigationTabs";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <PageHeader />
          <NavTabs />
        </div>
      </div>
    );
  }
}
export default Home;
