import React from "react";
import "./style.css";
import Cards from "../Cards/index";
class MainRight extends React.Component {
  render() {
    var data = [
      { id: 1, img: "", title: "Barberton Daisy", price: "$119" },
      { id: 2, img: "", title: "Angel Wing Begonia", price: "$169" },
      { id: 3, img: "", title: "African Violet", price: "$129" },
      { id: 4, img: "", title: "Beach Spider Lily", price: "$69" },
      { id: 5, img: "", title: "Blushing Bromeliad", price: "$89" },
      { id: 6, img: "", title: "Aliminium Plant", price: "$25" },
      { id: 7, img: "", title: "Birds Nest Ferm", price: "$95" },
      { id: 8, img: "", title: "Broadleaf Lady Palm", price: "$95" },
      { id: 9, img: "", title: "Chinese Evergreen", price: "$95" },
    ];
    return (
      <div className="right-container">
        <div className="right-header">
          <div className="navbar1">
            <h5 className="title">All Plants</h5>
            <h5 className="title">New Arrivals</h5>
            <h5 className="title">Sale</h5>
          </div>
          <div className="navbar2"></div>
          <div className="navbar3">
            <h3 className="sort">Short by:Default sorting</h3>
          </div>
        </div>
        <div className="cards">
          {data.map((value, index) => {
            return <Cards data={value} />;
          })}
        </div>
      </div>
    );
  }
}
export default MainRight;
