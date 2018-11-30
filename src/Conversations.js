import React, { Component } from "react";
import faker from "faker";

import "./Conversations.scss";

class Conversations extends Component {
  render() {
    const { conversations, userImg } = this.props;
    const currentConvo = conversations.map(info => {
      const topics = faker.random.arrayElement([
        "hiking",
        "the cinema",
        "to travel"
      ]);
      return (
        <div className="col-3 mx-1 convoBox" key={info.name}>
          <div className="row convoBoxHeader">
            <div className="col-4 p-2">
              <img className="img" src={info.img} alt="img" />
            </div>
            <div className="d-flex col-6 align-self-center p-0">
              <span>
                <strong>{info.name}</strong>
              </span>
            </div>
          </div>
          <div className="row topic">
            <div className="col-11 align-self-start">
              <span>{info.name + " also enjoys " + topics}</span>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-10 p-0 align-self-start recieved">
              <img className="smallImg pr-1 pt-1" src={info.img} alt="img" />
              {faker.lorem.words(4)}
            </div>
          </div>
          <div className="row justify-content-end align-items-center">
            <div className="d-flex col-10 p-0 justify-content-end  sent">
              {faker.lorem.words(4)}
            </div>
            <div className="col-2 p-0">
              <img className="smallImg pl-1 pt-1" src={userImg} alt="img" />
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <p className="header">
              <strong>Conversations</strong>
            </p>
          </div>
        </div>
        <div className="row justify-content-end">{currentConvo}</div>
      </React.Fragment>
    );
  }
}
export default Conversations;
