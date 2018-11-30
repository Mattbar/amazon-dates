import React, { Component } from "react";

import PageHeader from "./components/PageHeader";
import NavTabs from "./components/NavigationTabs";
import WelcomePage from "./WelcomePage";
import SignIn from "./SignIn";
import Home from "./Home";
import Matches from "./Matches";
import Conversations from "./Conversations";
import AccountSettings from "./AccountSettings";
import PAG from "./PAG";
import "./App.scss";
import faker from "faker";

const handleMakeMatches = () => {
  let numbMatch = faker.random.number({ min: 1, max: 4 });
  let matches = [];
  for (let i = 0; i < numbMatch; i++) {
    matches.push({
      new: faker.random.boolean(),
      img: faker.image.avatar(),
      name: faker.name.findName()
    });
  }
  matches.sort((a, b) => (a.new < b.new ? 1 : -1));
  return matches;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PAGImg: faker.image.avatar(),
      userImg: faker.image.avatar(),
      page: "WelcomePage",
      matches: handleMakeMatches(),
      conversations: []
    };
  }

  handleNavigation = page => () => {
    if (page !== this.state.page) {
      this.setState({
        page: page
      });
    }
  };

  handleHotOrNot = () => () => {
    this.setState({
      PAGImg: faker.image.avatar()
    });
  };

  handleStartConvo = (match) => () => {
    console.log("start");
    let conversations = this.state.conversations;
    let matches = this.state.matches;
    let index = this.state.matches.findIndex(a => a.name === match.name);
    if (index !== -1) {
      conversations.push(match);
    }
    if (match.new === true) {
      matches[index].new = false;
    }
    matches.sort((a, b) => (a.new < b.new ? 1 : -1));
    this.setState({
      consversations: conversations,
      matches: matches
    });
    this.setState({
      page: "Current Conversations"
    });
  };

  render() {
    const { page, matches, conversations, userImg, PAGImg } = this.state;
    let curPage;
    let background = "";
    let nav;

    if (page === "WelcomePage") {
      curPage = <WelcomePage navigate={this.handleNavigation} />;
    } else if (page === "SignIn") {
      curPage = <SignIn navigate={this.handleNavigation} />;
    } else if (page === "Account Settings") {
      curPage = <AccountSettings navigate={this.handleNavigation}/>;
      background = "backGround";
      nav = <NavTabs navigate={this.handleNavigation} page={page} />
    } else if (page === "Home") {
      curPage = <Home navigate={this.handleNavigation} userImg={userImg} />;
      background = "backGround";
      nav = <NavTabs navigate={this.handleNavigation} page={page} />
    }else if (page === "Matches") {
      curPage = (
        <Matches
          navigate={this.handleNavigation}
          matches={matches}
          startConvo={this.handleStartConvo}
          conversations={conversations}
        />
      );
      background = "backGround";
      nav = <NavTabs navigate={this.handleNavigation} page={page}/>
    } else if (page === "Current Conversations") {
      curPage = (
        <Conversations
          conversations={conversations}
          userImg={userImg}
        />
      );
      background = "backGround";
      nav = <NavTabs navigate={this.handleNavigation} page={page}/>
    } else if (page === "PAG") {
      curPage = (
        <PAG
          
          PAGImg={PAGImg}
          hotOrNot={this.handleHotOrNot}
        />
      );
      background = "backGround";
      nav = <NavTabs navigate={this.handleNavigation} page={page}/>
    }
    return (
      <div className="App">
        <div className={`${background}`}>
          <div className="container">
            <PageHeader />
           {nav}  
            {curPage}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
