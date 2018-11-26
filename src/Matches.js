import React, { Component } from "react";
// import faker from "faker";
import "./Matches.scss";
import PageHeader from "./components/PageHeader";
import NavTabs from "./components/NavigationTabs";

class Matches extends Component {
  render() {
    const { navigate, matches, startConvo, conversations } = this.props;

    const matched = matches.map(info => {
      return (
        <div className="col-2 img" key={info.name}>
          <img
            onClick={startConvo(info)}
            className={info.new ? "active" : "notActive"}
            src={info.img}
            alt="match"
          />
          <p className="matchName">
            <strong>{info.name}</strong>
          </p>
        </div>
      );
    });

    const convos = conversations.map(info => {
      return (
        <div className="col-2 img" key={info.name}>
          <img
          onClick= {navigate("Current Conversations")}
            className={info.active ? "active" : "notActive"}
            src={info.img}
            alt="match"
          />
          <p className="matchName">
            <strong>{info.name}</strong>
          </p>
        </div>
      );
    });

    return (
      <div className="Matches">
        <div className="container">
          <PageHeader />
          <NavTabs navigate={navigate} />
          <div className="queView">
            <div className="row">
              <div className="col-3">
                <p className="header">
                  <strong>Match Queue</strong>
                </p>
              </div>
            </div>
            <div className="row matchesQue">{matched}</div>
          </div>
          <div className="convo">
            <div className="row">
              <div className="col-3">
                <p>
                  <strong className="header">Conversations</strong>
                </p>
              </div>
            </div>
            <div className="row matchesQue">{convos}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Matches;
