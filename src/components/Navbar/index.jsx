import React from "react";
import "./style.css";
import logo from "../../assets/imgs/logo.png";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Savat } from "../../assets/icons/savat.svg";
import { ReactComponent as Stroke4 } from "../../assets/icons/Stroke 4.svg";
class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper1">
          <img src={logo} className="logo" />
          GREENSHOP
        </div>
        <div className="wrapper2">
          <div className="item">Home</div>
          <div className="item">Shop</div>
          <div className="item">Plant Care</div>
          <div className="item">Blogs</div>
        </div>
        <div className="wrapper3">
          <Search className="icon-search" />
          <Savat className="icon-savat"/>
          <button className="btn">
            <Stroke4 />
            -Login
          </button>
        </div>
      </div>
    );
  }
}
export default Navbar;
