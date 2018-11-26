import React from "react";
import NavigationBar from "./components/NavigationBar";
import "./index.css";
import Routes from "./Routes";

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Routes/>
      </div>
    )
  }
}

export default Main;
