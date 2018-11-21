import React, { Component } from "react";
import amazonDates from "../images/AmazonDates.svg";

export default class PageHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <img src={amazonDates} className="dates-logo" alt="logo" />
        </div>
      </div>
    );
  }
}
