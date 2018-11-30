import React, { Component } from "react";
import "./NavigationTabs.scss";

const navLocations = [
  "Matches",
  "PAG",
  "Current Conversations",
  "Account Settings",
  "Home"
];



class NavigationTabs extends Component {
  render()
  {
    const navBar = navLocations.map(nav => {
      let active;
      if(nav === this.props.page){
        active="active";
      }
      else{
        active="";
      }
      return (
        <button  onClick={this.props.navigate(nav)}className={`d-flex col-2 align-items-center justify-content-center navBox ${active}`} key={nav}>
          <strong>
            {nav}
          </strong>
        </button>
      );
    });
    return <div className="row py-2 mt-4 justify-content-between align-items-center">{navBar}</div>;
  }
}
export default NavigationTabs;
