import React, { Component } from "react";
import "./PAG.scss";
import Flame from "./images/Flame.svg";
import Ice from "./images/Ice.svg";

class PAG extends Component {
  render() {
    const { PAGImg, hotOrNot } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h1>Preferences Gauge</h1>
            <p className="desc">Help us make better matches by letting us know your preferences.</p>
          </div>
        </div>
        <div className="container p-5">
          <div className="box">
            <div className="row align-items-center">
              <div className="d-flex col justify-content-end">
                <img
                  className="pagImg"
                  onClick={hotOrNot()}
                  src={Ice}
                  alt="Ice"
                />
              </div>
              <div className="col">
                <img className="hotNotImg" src={PAGImg} alt="PAGImg" />
              </div>
              <div className="d-flex col justify-content-start">
                <img
                  className="pagImg"
                  onClick={hotOrNot()}
                  src={Flame}
                  alt="Flame"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PAG;
