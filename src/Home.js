import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  render() {
    const { userImg } = this.props;
    return (
      
          <div className="container p-5">
            <div className="row">
              <div className="col">
                <img className="userImg" src={userImg} alt="img" />
              </div>
            </div>
          </div>
    );
  }
}
export default Home;
