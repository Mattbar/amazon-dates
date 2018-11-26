import React, { Component } from "react";
// import faker from "faker";
import PageHeader from "./components/PageHeader";
import NavTabs from "./components/NavigationTabs";

class Conversations extends Component {
  render() {
    const { navigate } = this.props;

    return (
      <div className="Matches">
        <div className="container">
          <PageHeader />
          <NavTabs navigate={navigate} />
          <div className="row">
            <div className="col-3">
              <p className="header">
                <strong>Conversations</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Conversations;
