import React, { Component } from "react";
import faker from "faker";
import "./Home.scss";
import PageHeader from "./components/PageHeader";
import NavTabs from "./components/NavigationTabs";


class Matches extends Component {
  render() {
    const {navigate} = this.props
    const Name = faker.name.findName();
    
    return (
      <div className="Home">
        <div className="container">
          <PageHeader />
          <NavTabs navigate={navigate}/>
          <div className="row">
            <p>
              {Name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Matches;