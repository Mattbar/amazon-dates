import React, { Component } from "react";
// import faker from "faker";
import "./Matches.scss";
// import PageHeader from "./components/PageHeader";
//import NavTabs from "./components/NavigationTabs";

class Matches extends Component {
  handdle = (info) => () =>{
    console.log(info)
  }
  render() {
    const { navigate, matches, startConvo, conversations } = this.props;
    
    const matched = matches.map(info => {
      return (
        <div className="col-2" key={info.name}>
          <div className="imgs">
            <div className={info.new ? "active" : "notActive"} onClick={startConvo(info)}/>
            <img
              onClick={startConvo(info)}
              className="img"
              src={info.img}
              alt="match"
            />
          </div>
          <p className="matchName">
            <strong>{info.name}</strong>
          </p>
        </div>
      );
    });

    const convos = conversations.map(info => {
      return (
        <div className="col-2 convoImg" key={info.name}>
          <img
            onClick={navigate("Current Conversations")}
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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
export default Matches;
