import React, { Component } from "react";

//import PageHeader from "./components/PageHeader";
// import amazonDates from "./images/AmazonDates.svg";
import WelcomePage from "./WelcomePage";
import SignIn from "./SignIn";
import Home from "./Home";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "WelcomePage"
    };
  }

  handleNavigation = page => () => {
    if (page !== this.state.page) {
      this.setState({
        page: page
      });
    }
  };
  render() {
    const { page } = this.state;
    let curPage;

    if (page === "WelcomePage") {
      curPage = <WelcomePage navigate={this.handleNavigation} />;
    } else if (page === "SignIn") {
      curPage = <SignIn navigate={this.handleNavigation} />;
    } else if (page === "Home") {
      curPage = <Home />;
    }
    return <div className="App">{curPage}</div>;
  }
}

export default App;
