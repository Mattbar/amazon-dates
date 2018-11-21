import React, { Component } from "react";
import "./NavigationTabs.scss";

const navLocations = [
  "Matches",
  "PAG",
  "CurrentConvo",
  "AccountSettings",
  "HomePAge"
];
const navBar = navLocations.map(nav => {
  return (
    <div className=" col navBox" key={nav}>
      {nav}
    </div>
  );
});
class NavigationTabs extends Component {
  render() {
    // map locations make buttons.
    return <div className="row ">{navBar}</div>;
  }
}
export default NavigationTabs;
