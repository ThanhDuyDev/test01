import React from "react";
import "../css/nav.css";

export default class Nav extends React.Component {
  render() {
    var list = this.props.list;
    return (
      <div className="nav">
        <ul className="nav_list">
          {list.map((item) => (
            <li className="nav_item" key={item}>
              <p className="nav_item_text">{item}</p>
              <div className="item_selected" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
