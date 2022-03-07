import React from "react";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
class Roots extends React.Component {
  render() {
    return (
      <div className="root">
        <Navbar />
        <Header />
        <Main />
      </div>
    );
  }
}
export default Roots;
