import React from "react";
import "./style.css";
import MainRight from "../MainRight/index";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 39,
    };
  }
  render() {
    const SliderChange = (e) => {
      this.setState({
        price: e.target.value,
      });
    };
    return (
      <div className="main-wrapper">
        <div className="main-left">
          <div>
            <h4 className="title">Categories</h4>
            <div className="filterwrapper">
              <h4 className="item">House Plants</h4>
              <h4 className="item">(33)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Potter Plants</h4>
              <h4 className="item">(12)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Seeds</h4>
              <h4 className="item">(65)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Small Plants</h4>
              <h4 className="item">(39)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Big Plants</h4>
              <h4 className="item">(23)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Succelents</h4>
              <h4 className="item">(17)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Trerrariusum </h4>
              <h4 className="item">(19)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Gardening</h4>
              <h4 className="item">(13)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Accessories</h4>
              <h4 className="item">(33)</h4>
            </div>
            <h4 className="title">Price Range</h4>
            <div className="slidecontainer">
              <input
                type="range"
                min="39"
                max="1230"
                className="slider"
                id="myRange"
                onChange={SliderChange}
              />
            </div>
            <h4 className="item">
              Price :<span className="price-number"> ${this.state.price}</span>
            </h4>
            <button className="filter-btn">Filter</button>
            <h4 className="title">Size</h4>
            <div className="filterwrapper">
              <h4 className="item">Small</h4>
              <h4 className="item">(119)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Medium</h4>
              <h4 className="item">(86)</h4>
            </div>
            <div className="filterwrapper">
              <h4 className="item">Large</h4>
              <h4 className="item">(43)</h4>
            </div>
          </div>
        </div>
        <div className="main-right">
          <MainRight />
        </div>
      </div>
    );
  }
}
export default Main;
