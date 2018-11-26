import React, { Component } from "react";

//import PageHeader from "./components/PageHeader";
// import navigationTab from "./components/NavigationTabs";
import WelcomePage from "./WelcomePage";
import SignIn from "./SignIn";
import Home from "./Home";
import Matches from "./Matches";
import Conversations from "./Conversations";
import "./App.scss";
import faker from "faker";

const handleMakeMatches =() =>{
  let numbMatch = faker.random.number({min:1, max:4});
  let matches = [];
  for(let i= 0; i<numbMatch; i++){
    matches.push({
      new: faker.random.boolean(),
      img: faker.image.avatar(),
      name: faker.name.findName()
    });
  }
  matches.sort((a,b) => (a.new < b.new) ? 1 : -1);
  return matches;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImg: faker.image.avatar(),
      page: "WelcomePage",
      matches:handleMakeMatches(),
      conversations:[]
    };
  }

  handleNavigation = page => () => {
    if (page !== this.state.page) {
      this.setState({
        page: page
      });
    }
  };

handleStartConvo = (match)=> () => {
  let conversations = this.state.conversations;
  let matches = this.state.matches;
  let index = this.state.matches.findIndex(a => a.name === match.name);
  if(index !== -1){
    conversations.push(match)
  }
  if(match.new === true){
    matches[index].new = false;
  }
  matches.sort((a,b) => (a.new < b.new) ? 1 : -1);
  this.setState({
    consversations: conversations,
    matches: matches,
  });
  this.setState({
    page:"Current Conversations"
  })
};
  
  render() 
  
  {
    const { page, matches, conversations, userImg } = this.state;
    let curPage;
    
    if (page === "WelcomePage") {
      curPage = <WelcomePage navigate={this.handleNavigation} />;
    } else if (page === "SignIn") {
      curPage = <SignIn navigate={this.handleNavigation} />;
    } else if (page === "Home") {
      curPage = <Home navigate={this.handleNavigation} userImg={userImg}/>;
    } else if(page === "Matches"){
      curPage = <Matches navigate={this.handleNavigation} matches={matches} startConvo={this.handleStartConvo} conversations={conversations}/>
    }else if (page === "Current Conversations"){
      curPage = <Conversations navigate={this.handleNavigation} conversations={conversations} userImg={userImg}/>
    }
    return <div className="App">{curPage}</div>;
  }
}

export default App;
